import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_assertCloneCustom_ObjectPartialAndRequired =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ObjectPartialAndRequired> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectPartialAndRequired => {
        const __is = (input: any): input is ObjectPartialAndRequired => {
          const $io0 = (input: any): boolean =>
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io0(input.object))) &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPartialAndRequired => {
            const $guard = (typia.misc.assertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (null === input.object ||
                ((("object" === typeof input.object && null !== input.object) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".object",
                      expected: "(ObjectPartialAndRequired | null)",
                      value: input.object,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".object",
                    expected: "(ObjectPartialAndRequired | null)",
                    value: input.object,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.array) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  },
                  errorFactory,
                )) &&
                input.array.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".array[" + _index1 + "]",
                        expected: "number",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectPartialAndRequired",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectPartialAndRequired",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ObjectPartialAndRequired,
      ): import("typia").Resolved<ObjectPartialAndRequired> => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem);
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
          string: input.string as any,
          number: input.number as any,
          boolean: input.boolean as any,
          object:
            "object" === typeof input.object && null !== input.object
              ? $co0(input.object)
              : (input.object as any),
          array: Array.isArray(input.array)
            ? $cp0(input.array)
            : (input.array as any),
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input, (p) => new CustomGuardError(p)),
  );
