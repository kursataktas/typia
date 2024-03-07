import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectOptional =
  _test_assertGuardEquals(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(typia.createAssertGuardEquals<ObjectOptional>());
