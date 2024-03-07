import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { TypeGuardError } from "typia";
export const test_functional_assertReturn_DynamicUndefined =
  _test_functional_assertReturn(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      (input: DynamicUndefined): DynamicUndefined => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): DynamicUndefined => {
          const __is = (input: any): input is DynamicUndefined => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return null !== value && undefined === value;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicUndefined => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $join = (typia.functional.assertReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    (null !== value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        },
                        errorFactory,
                      )) &&
                    (undefined === value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        },
                        errorFactory,
                      ))
                  );
                });
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "DynamicUndefined",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "DynamicUndefined",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
