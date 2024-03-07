import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectNullable =
  _test_json_assertStringify(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.json.createAssertStringify<ObjectNullable>());
