import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ClassPropertyAssignment =
  _test_json_assertStringify(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.json.createAssertStringify<ClassPropertyAssignment>(),
  );
