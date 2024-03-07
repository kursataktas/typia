import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_TypeTagLength =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagLength>(),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
  });
