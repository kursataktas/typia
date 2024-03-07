import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectIntersection = _test_json_assertParse(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.json.assertParse<ObjectIntersection>(input),
);
