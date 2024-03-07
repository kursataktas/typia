import typia from "typia";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_protobuf_decode_CommentTagTypeBigInt = _test_protobuf_decode(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
  decode: (input) =>
    ((input: Uint8Array): import("typia").Resolved<CommentTagTypeBigInt> => {
      const $Reader = (typia.protobuf.decode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          in64: undefined as any,
          uint64: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.in64 = reader.int64();
              break;
            case 2:
              // uint64;
              output.uint64 = reader.uint64();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $Reader(input);
      return $pdo0(reader);
    })(input),
  encode: (input: CommentTagTypeBigInt): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "in64";
        writer.uint32(8);
        writer.int64(input.in64);
        // property "uint64";
        writer.uint32(16);
        writer.uint64(input.uint64);
      };
      //CommentTagTypeBigInt;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
