import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_createAssertCloneCustom_AtomicIntersection =
  _test_misc_assertClone(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<AtomicIntersection> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): AtomicIntersection => {
        const __is = (input: any): input is AtomicIntersection => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicIntersection => {
            const $guard = (typia.misc.createAssertClone as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "AtomicIntersection",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 3 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "[boolean, number, string]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                ("boolean" === typeof input[0] ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "boolean",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "number",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input[2] ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "string",
                      value: input[2],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "AtomicIntersection",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: AtomicIntersection,
      ): import("typia").Resolved<AtomicIntersection> => {
        return Array.isArray(input) &&
          input.length === 3 &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          "string" === typeof input[2]
          ? ([input[0] as any, input[1] as any, input[2] as any] as any)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
