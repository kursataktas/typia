import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagDefault = _test_assert(CustomGuardError)(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.assert<TypeTagDefault>(input, (p) => new CustomGuardError(p)),
);
