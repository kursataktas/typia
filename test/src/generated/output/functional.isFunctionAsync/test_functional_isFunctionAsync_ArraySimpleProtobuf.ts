import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";
export const test_functional_isFunctionAsync_ArraySimpleProtobuf =
  _test_functional_isFunctionAsync("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      async (
        input: ArraySimpleProtobuf,
      ): Promise<ArraySimpleProtobuf | null> => {
        if (
          false ===
          ((input: any): input is ArraySimpleProtobuf => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.boolean) &&
              input.boolean.every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input.int32) &&
              input.int32.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  -2147483648 <= elem &&
                  elem <= 2147483647,
              ) &&
              Array.isArray(input.uint32) &&
              input.uint32.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  0 <= elem &&
                  elem <= 4294967295,
              ) &&
              Array.isArray(input.int64) &&
              input.int64.every(
                (elem: any) => "bigint" === typeof elem && true,
              ) &&
              Array.isArray(input.uint64) &&
              input.uint64.every(
                (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
              ) &&
              Array.isArray(input.float) &&
              input.float.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  -1.175494351e38 <= elem &&
                  elem <= 3.4028235e38,
              ) &&
              Array.isArray(input.double) &&
              input.double.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem) && true,
              ) &&
              Array.isArray(input.string) &&
              input.string.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.bytes) &&
              input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
              Array.isArray(input.object) &&
              input.object.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ArraySimpleProtobuf => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.boolean) &&
            input.boolean.every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input.int32) &&
            input.int32.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                -2147483648 <= elem &&
                elem <= 2147483647,
            ) &&
            Array.isArray(input.uint32) &&
            input.uint32.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                0 <= elem &&
                elem <= 4294967295,
            ) &&
            Array.isArray(input.int64) &&
            input.int64.every(
              (elem: any) => "bigint" === typeof elem && true,
            ) &&
            Array.isArray(input.uint64) &&
            input.uint64.every(
              (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
            ) &&
            Array.isArray(input.float) &&
            input.float.every(
              (elem: any) =>
                "number" === typeof elem &&
                -1.175494351e38 <= elem &&
                elem <= 3.4028235e38,
            ) &&
            Array.isArray(input.double) &&
            input.double.every(
              (elem: any) =>
                "number" === typeof elem && Number.isFinite(elem) && true,
            ) &&
            Array.isArray(input.string) &&
            input.string.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.bytes) &&
            input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
            Array.isArray(input.object) &&
            input.object.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
