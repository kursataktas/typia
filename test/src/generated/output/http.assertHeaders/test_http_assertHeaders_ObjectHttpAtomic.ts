import typia from "typia";
import { _test_http_assertHeaders } from "../../../internal/_test_http_assertHeaders";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";
import { TypeGuardError } from "typia";
export const test_http_assertHeaders_ObjectHttpAtomic =
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    ((
      input: Record<string, string | string[] | undefined>,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ObjectHttpAtomic> => {
      const decode = (
        input: Record<string, string | string[] | undefined>,
      ): import("typia").Resolved<ObjectHttpAtomic> => {
        const $boolean = (typia.http.assertHeaders as any).boolean;
        const $bigint = (typia.http.assertHeaders as any).bigint;
        const $number = (typia.http.assertHeaders as any).number;
        const output = {
          boolean: $boolean(input.boolean),
          bigint: $bigint(input.bigint),
          number: $number(input.number),
          string: input.string,
        };
        return output as any;
      };
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpAtomic => {
        const __is = (input: any): input is ObjectHttpAtomic => {
          return (
            "object" === typeof input &&
            null !== input &&
            "boolean" === typeof (input as any).boolean &&
            "bigint" === typeof (input as any).bigint &&
            "number" === typeof (input as any).number &&
            Number.isFinite((input as any).number) &&
            "string" === typeof (input as any).string
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpAtomic => {
            const $guard = (typia.http.assertHeaders as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "boolean",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              ("bigint" === typeof input.bigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".bigint",
                    expected: "bigint",
                    value: input.bigint,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpAtomic",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpAtomic",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    })(input),
  );
