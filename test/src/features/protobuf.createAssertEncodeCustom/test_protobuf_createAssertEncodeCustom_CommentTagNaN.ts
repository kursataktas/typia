import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_CommentTagNaN =
  _test_protobuf_assertEncode(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    encode: typia.protobuf.createAssertEncode<CommentTagNaN>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
  });
