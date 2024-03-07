import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagLength =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)({
    encode: typia.protobuf.createAssertEncode<CommentTagLength>(),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
    message: typia.protobuf.message<CommentTagLength>(),
  });
