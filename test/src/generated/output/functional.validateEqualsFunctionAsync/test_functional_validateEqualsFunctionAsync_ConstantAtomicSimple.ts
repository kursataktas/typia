import typia from "typia";
import { _test_functional_validateEqualsFunctionAsync } from "../../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_functional_validateEqualsFunctionAsync_ConstantAtomicSimple =
  _test_functional_validateEqualsFunctionAsync("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      async (
        input: ConstantAtomicSimple,
      ): Promise<import("typia").IValidation<ConstantAtomicSimple>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ConstantAtomicSimple> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicSimple => {
              return (
                Array.isArray(input) &&
                input.length === 4 &&
                false === input[0] &&
                true === input[1] &&
                2 === input[2] &&
                "three" === input[3]
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ConstantAtomicSimple => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ConstantAtomicSimple",
                      value: input,
                    })) &&
                    (input.length === 4 ||
                      $report(true, {
                        path: _path + "",
                        expected: '[false, true, 2, "three"]',
                        value: input,
                      })) &&
                    [
                      false === input[0] ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "false",
                          value: input[0],
                        }),
                      true === input[1] ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "true",
                          value: input[1],
                        }),
                      2 === input[2] ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: "2",
                          value: input[2],
                        }),
                      "three" === input[3] ||
                        $report(true, {
                          path: _path + "[3]",
                          expected: '"three"',
                          value: input[3],
                        }),
                    ].every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicSimple",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((
          input: any,
        ): typia.IValidation<ConstantAtomicSimple> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 4 &&
              false === input[0] &&
              true === input[1] &&
              2 === input[2] &&
              "three" === input[3]
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicSimple => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicSimple",
                    value: input,
                  })) &&
                  (input.length === 4 ||
                    $report(true, {
                      path: _path + "",
                      expected: '[false, true, 2, "three"]',
                      value: input,
                    })) &&
                  [
                    false === input[0] ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "false",
                        value: input[0],
                      }),
                    true === input[1] ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "true",
                        value: input[1],
                      }),
                    2 === input[2] ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "2",
                        value: input[2],
                      }),
                    "three" === input[3] ||
                      $report(true, {
                        path: _path + "[3]",
                        expected: '"three"',
                        value: input[3],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicSimple",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
