import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ClassNonPublic =
  _test_protobuf_assertDecode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: (input) => typia.protobuf.assertDecode<ClassNonPublic>(input),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
