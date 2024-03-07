import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_functional_equalsFunctionAsync_ArrayAtomicSimple =
  _test_functional_equalsFunctionAsync("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      async (input: ArrayAtomicSimple): Promise<ArrayAtomicSimple | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ArrayAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              Array.isArray(input[0]) &&
              input[0].every(
                (elem: any, _index1: number) => "boolean" === typeof elem,
              ) &&
              Array.isArray(input[1]) &&
              input[1].every(
                (elem: any, _index2: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input[2]) &&
              input[2].every(
                (elem: any, _index3: number) => "string" === typeof elem,
              )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ArrayAtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            Array.isArray(input[0]) &&
            input[0].every(
              (elem: any, _index1: number) => "boolean" === typeof elem,
            ) &&
            Array.isArray(input[1]) &&
            input[1].every(
              (elem: any, _index2: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every(
              (elem: any, _index3: number) => "string" === typeof elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
