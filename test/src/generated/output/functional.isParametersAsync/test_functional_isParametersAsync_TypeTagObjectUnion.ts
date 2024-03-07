import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
export const test_functional_isParametersAsync_TypeTagObjectUnion =
  _test_functional_isParametersAsync("TypeTagObjectUnion")(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      async (input: TypeTagObjectUnion): Promise<TypeTagObjectUnion | null> => {
        if (
          false ===
          ((input: any): input is TypeTagObjectUnion => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.value &&
              Number.isFinite(input.value) &&
              3 <= input.value;
            const $io1 = (input: any): boolean =>
              "string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7;
            const $iu0 = (input: any): any =>
              (() => {
                if (
                  "string" === typeof input.value &&
                  3 <= input.value.length &&
                  input.value.length <= 7
                )
                  return $io1(input);
                else if (
                  "number" === typeof input.value &&
                  Number.isFinite(input.value) &&
                  3 <= input.value
                )
                  return $io0(input);
                else return false;
              })();
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $iu0(elem),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
