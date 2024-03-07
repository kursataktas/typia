import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssert_ConstantAtomicSimple = _test_assert(
  TypeGuardError,
)("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)(
  typia.createAssert<ConstantAtomicSimple>(),
);
