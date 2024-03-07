import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectDate =
  _test_json_assertStringify(TypeGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )(typia.json.createAssertStringify<ObjectDate>());
