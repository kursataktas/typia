import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_assert_ObjectPartialAndRequired = _test_assert(
  TypeGuardError,
)("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
  ObjectPartialAndRequired,
)((input) => typia.assert<ObjectPartialAndRequired>(input));
