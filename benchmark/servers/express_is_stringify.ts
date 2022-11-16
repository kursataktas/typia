import express from "express";

import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ServerStorage } from "./ServerStorage";

const server: express.Express = express();
const reply =
    <T>(stringify: (input: T) => string | null) =>
    (data: T) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(stringify(data));

server.get(
    "/ObjectSimple",
    reply(TSON.createIsStringify<ObjectSimple[]>())(ServerStorage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    reply(TSON.createIsStringify<ObjectHierarchical[]>())(
        ServerStorage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(TSON.createIsStringify<ObjectRecursive[]>())(
        ServerStorage.ObjectRecursive,
    ),
);
server.get(
    "/ObjectUnionExplicit",
    reply(TSON.createIsStringify<ObjectUnionExplicit[]>())(
        ServerStorage.ObjectUnionExplicit,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(TSON.createIsStringify<ArrayRecursive[]>())(
        ServerStorage.ArrayRecursive,
    ),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(TSON.createIsStringify<ArrayRecursiveUnionExplicit[]>())(
        ServerStorage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_334 });
