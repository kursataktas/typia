import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_CommentTagTypeBigInt =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagTypeBigInt>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
  });
