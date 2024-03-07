import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardEqualsCustom_AtomicUnion = _test_assertGuardEquals(
  CustomGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is AtomicUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is AtomicUnion => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            null === elem ||
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem,
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is AtomicUnion => {
        const $guard = (typia.assertGuardEquals as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicUnion",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                "boolean" === typeof elem ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "(boolean | null | number | string)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "AtomicUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);
