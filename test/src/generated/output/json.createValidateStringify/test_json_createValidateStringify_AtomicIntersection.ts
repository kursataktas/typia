import typia from "typia";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
export const test_json_createValidateStringify_AtomicIntersection =
  _test_json_validateStringify("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input: AtomicIntersection): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<AtomicIntersection> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = (typia.json.createValidateStringify as any).report(
          errors,
        );
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is AtomicIntersection => {
          return (
            ((Array.isArray(input) ||
              $report(true, {
                path: _path + "",
                expected: "AtomicIntersection",
                value: input,
              })) &&
              (input.length === 3 ||
                $report(true, {
                  path: _path + "",
                  expected: "[boolean, number, string]",
                  value: input,
                })) &&
              [
                "boolean" === typeof input[0] ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0],
                  }),
                ("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1],
                  }),
                "string" === typeof input[2] ||
                  $report(true, {
                    path: _path + "[2]",
                    expected: "string",
                    value: input[2],
                  }),
              ].every((flag: boolean) => flag)) ||
            $report(true, {
              path: _path + "",
              expected: "AtomicIntersection",
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
    };
    const stringify = (input: AtomicIntersection): string => {
      const $number = (typia.json.createValidateStringify as any).number;
      const $string = (typia.json.createValidateStringify as any).string;
      return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
