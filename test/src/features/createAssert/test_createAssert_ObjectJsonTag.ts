import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectJsonTag = _test_assert(TypeGuardError)(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.createAssert<ObjectJsonTag>());
