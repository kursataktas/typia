import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { TypeTagType } from "../../../structures/TypeTagType";
import { TypeGuardError } from "typia";
export const test_functional_assertReturn_TypeTagType =
  _test_functional_assertReturn(TypeGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      (input: TypeTagType): TypeTagType => {
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
        ): TypeTagType => {
          const __is = (input: any): input is TypeTagType => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "number" === typeof input.int &&
              Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647 &&
              "number" === typeof input.uint &&
              Math.floor(input.uint) === input.uint &&
              0 <= input.uint &&
              input.uint <= 4294967295 &&
              "number" === typeof input.int32 &&
              Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647 &&
              "number" === typeof input.uint32 &&
              Math.floor(input.uint32) === input.uint32 &&
              0 <= input.uint32 &&
              input.uint32 <= 4294967295 &&
              "number" === typeof input.int64 &&
              Math.floor(input.int64) === input.int64 &&
              -9223372036854776000 <= input.int64 &&
              input.int64 <= 9223372036854776000 &&
              "number" === typeof input.uint64 &&
              Math.floor(input.uint64) === input.uint64 &&
              0 <= input.uint64 &&
              input.uint64 <= 18446744073709552000 &&
              "number" === typeof input.float &&
              -1.175494351e38 <= input.float &&
              input.float <= 3.4028235e38;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagType => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagType.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagType.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagType.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TypeTagType.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.int &&
                  ((Math.floor(input.int) === input.int &&
                    -2147483648 <= input.int &&
                    input.int <= 2147483647) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int",
                        expected: 'number & Type<"int32">',
                        value: input.int,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int",
                      expected: '(number & Type<"int32">)',
                      value: input.int,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.uint &&
                  ((Math.floor(input.uint) === input.uint &&
                    0 <= input.uint &&
                    input.uint <= 4294967295) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".uint",
                        expected: 'number & Type<"uint32">',
                        value: input.uint,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint",
                      expected: '(number & Type<"uint32">)',
                      value: input.uint,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.int32 &&
                  ((Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int32",
                        expected: 'number & Type<"int32">',
                        value: input.int32,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: '(number & Type<"int32">)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.uint32 &&
                  ((Math.floor(input.uint32) === input.uint32 &&
                    0 <= input.uint32 &&
                    input.uint32 <= 4294967295) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".uint32",
                        expected: 'number & Type<"uint32">',
                        value: input.uint32,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: '(number & Type<"uint32">)',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.int64 &&
                  ((Math.floor(input.int64) === input.int64 &&
                    -9223372036854776000 <= input.int64 &&
                    input.int64 <= 9223372036854776000) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int64",
                        expected: 'number & Type<"int64">',
                        value: input.int64,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: '(number & Type<"int64">)',
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.uint64 &&
                  ((Math.floor(input.uint64) === input.uint64 &&
                    0 <= input.uint64 &&
                    input.uint64 <= 18446744073709552000) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".uint64",
                        expected: 'number & Type<"uint64">',
                        value: input.uint64,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '(number & Type<"uint64">)',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.float &&
                  ((-1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".float",
                        expected: 'number & Type<"float">',
                        value: input.float,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: '(number & Type<"float">)',
                      value: input.float,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagType",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagType",
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
