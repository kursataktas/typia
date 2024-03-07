import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectSimple =
  _test_protobuf_assertEncode(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectSimple>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
