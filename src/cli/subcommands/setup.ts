import { command } from 'cleye';
import process from "node:process";
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import * as PackageManager from '../utils/packageManager';
import * as CommandExecutor from "../utils/command";
import * as ConfFileUtils from "../utils/confFiles";
import * as FsUtils from "../utils/fs";
import * as Logger from "../utils/logger";
import * as MessageUtils from "../utils/message";

const TSPATCH_COMMAND = `ts-patch install`;
const TYPIA_PATCH_COMMAND = `typia patch`;
const TYPIA_TRANSFORM = `typia/lib/transform`;

/** package.json type */
interface PackageJson {
  scripts?: Record<string, string>;
}

/** tsconfig.json type */
interface TSConfig {
  compilerOptions?: {
    strictNullChecks?: boolean;
    strict?: boolean;
    plugins?: {
      transform: string;
    }[];
  };
}

/** dependency type */
interface Dependency {
  dev: boolean;
  modulo: string;
  version: string;
}

export const setup = command({
  name: "setup",

  flags: {
    project: {
      type: String,
      description: "tsconfig.json file path (e.g. ./tsconfig.test.json)",
    },
  },

  help: {
        description: "Setup Typia",
  }
}, async (argv) => {
    const { flags } = argv;
    const cwd = process.cwd();
    const manager = await PackageManager.detect({ cwd });
    let agent = manager?.agent;

    if (agent == null) {
      const selected = await Logger.logger.prompt("Select a package manager", {
        initial: "npm",
        options: PackageManager.AGENTS,
      }) as PackageManager.Agent;
      agent = selected;
    }

    /* yarn@berry is not supported */
    if (agent === "yarn@berry") {
      MessageUtils.bail("yarn@berry is not supported.");
    }

    /* install dependencies */
    for (const dep of DEPENDENCIES) {
      const addArgs= [
        `${dep.modulo}@${dep.version}`,
        dep.dev ? "-D" : "",
        (agent==='pnpm' || agent==='pnpm@6') && existsSync(resolve(cwd, 'pnpm-workspace.yaml')) ? '-w' : ''
      ]
      const { command, args } = PackageManager.resolveCommand(agent, 'add', addArgs)!;
      CommandExecutor.run(`${command} ${args.join(" ")}`);
    }

    /* === prepare package.json === */
    {
      const path = await FsUtils.findUp("package.json", { cwd });
      if (path == null) {
        MessageUtils.bail("package.json not found.");
      }
      const json = await FsUtils.readJsonFile<PackageJson>(path, cwd);

      let prepare = (
        (json.data?.scripts?.prepare as string | undefined) ?? ""
      ).trim();

      const FULL_COMMAND = `${TSPATCH_COMMAND} && ${TYPIA_PATCH_COMMAND}`;

      /* if ony `ts-patch install` is found, add `typia patch` */
      prepare.replace(TSPATCH_COMMAND, FULL_COMMAND);

      /* if prepare script is empty, set it to `typia patch` */
      if (prepare === "") {
        prepare = FULL_COMMAND;
      }

      /* if prepare script does not contain `typia patch`, add it */
      if (prepare !== FULL_COMMAND && !prepare.includes(FULL_COMMAND)) {
        prepare = `${FULL_COMMAND} && ${prepare}`;
      }

      /* update prepare script */
      json.data.scripts = { ...(json.data.scripts ?? {}), prepare };
      await FsUtils.writeJsonFile(json);
    }

    /* === prepare tsconfig.json === */
    {
      const tsConfigPath = flags.project ?? (await ConfFileUtils.findTsConfig({ cwd }));
      /* if tsconfig.json is not found, create it */
      if (tsConfigPath == null) {
        const { command, args } = PackageManager.resolveCommand(agent, 'execute', ['tsc --init'])!;
        CommandExecutor.run(`${command} ${args.join(" ")}`);
      }

      const tsConfig = await FsUtils.readJsonFile<TSConfig>(tsConfigPath, cwd);

      if (tsConfig.data.compilerOptions == null) {
        tsConfig.data.compilerOptions = {};
      }

      tsConfig.data.compilerOptions.strictNullChecks = true;
      tsConfig.data.compilerOptions.strict = true;

      tsConfig.data.compilerOptions.plugins = [
        { transform: TYPIA_TRANSFORM },
        ...(tsConfig.data.compilerOptions.plugins ?? []),
      ];
      await FsUtils.writeJsonFile(tsConfig);
    }

    /* === run prepare script === */
    const { command, args } = PackageManager.resolveCommand(agent, 'run', ['prepare'])!;
    CommandExecutor.run(`${command} ${args.join(" ")}`);
  },
);

/** dependencies to be installed */
const DEPENDENCIES = [
  { dev: true, modulo: "typescript", version: "5.5.2" },
  { dev: true, modulo: "ts-patch", version: "latest" },
] as const satisfies Dependency[];
