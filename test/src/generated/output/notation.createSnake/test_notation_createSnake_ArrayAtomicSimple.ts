import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_notation_createValidateSnake_ArrayAtomicSimple =
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.SnakeCase<ArrayAtomicSimple>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ArrayAtomicSimple>> => {
      const validate = (input: any): typia.IValidation<ArrayAtomicSimple> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayAtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            Array.isArray(input[0]) &&
            input[0].every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input[1]) &&
            input[1].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every((elem: any) => "string" === typeof elem)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayAtomicSimple => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayAtomicSimple",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $report(true, {
                    path: _path + "",
                    expected: "[Array<boolean>, Array<number>, Array<string>]",
                    value: input,
                  })) &&
                [
                  ((Array.isArray(input[0]) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "Array<boolean>",
                      value: input[0],
                    })) &&
                    input[0]
                      .map(
                        (elem: any, _index1: number) =>
                          "boolean" === typeof elem ||
                          $report(true, {
                            path: _path + "[0][" + _index1 + "]",
                            expected: "boolean",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "Array<boolean>",
                      value: input[0],
                    }),
                  ((Array.isArray(input[1]) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "Array<number>",
                      value: input[1],
                    })) &&
                    input[1]
                      .map(
                        (elem: any, _index2: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(true, {
                            path: _path + "[1][" + _index2 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "Array<number>",
                      value: input[1],
                    }),
                  ((Array.isArray(input[2]) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "Array<string>",
                      value: input[2],
                    })) &&
                    input[2]
                      .map(
                        (elem: any, _index3: number) =>
                          "string" === typeof elem ||
                          $report(true, {
                            path: _path + "[2][" + _index3 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "Array<string>",
                      value: input[2],
                    }),
                ].every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ArrayAtomicSimple",
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
      const general = (
        input: ArrayAtomicSimple,
      ): typia.SnakeCase<ArrayAtomicSimple> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $cp2 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every((elem: any) => "number" === typeof elem) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
          ? ([
              Array.isArray(input[0]) ? $cp0(input[0]) : (input[0] as any),
              Array.isArray(input[1]) ? $cp1(input[1]) : (input[1] as any),
              Array.isArray(input[2]) ? $cp2(input[2]) : (input[2] as any),
            ] as any)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ArrayAtomicSimple> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ArrayAtomicSimple> => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArrayAtomicSimple> => {
          const $guard = (typia.createAssert as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayAtomicSimple",
                  value: input,
                },
                errorFactory,
              )) &&
              (input.length === 3 ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "[Array<boolean>, Array<number>, Array<string>]",
                    value: input,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[0]) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "Array<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
                input[0].every(
                  (elem: any, _index1: number) =>
                    "boolean" === typeof elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[0][" + _index1 + "]",
                        expected: "boolean",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "Array<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[1]) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "Array<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
                input[1].every(
                  (elem: any, _index2: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1][" + _index2 + "]",
                        expected: "number",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "Array<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[2]) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "Array<string>",
                    value: input[2],
                  },
                  errorFactory,
                )) &&
                input[2].every(
                  (elem: any, _index3: number) =>
                    "string" === typeof elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[2][" + _index3 + "]",
                        expected: "string",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "Array<string>",
                    value: input[2],
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayAtomicSimple",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
