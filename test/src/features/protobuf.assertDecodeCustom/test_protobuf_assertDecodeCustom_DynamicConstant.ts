import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_DynamicConstant =
  _test_protobuf_assertDecode(CustomGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)({
    decode: (input) =>
      typia.protobuf.assertDecode<DynamicConstant>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
  });
