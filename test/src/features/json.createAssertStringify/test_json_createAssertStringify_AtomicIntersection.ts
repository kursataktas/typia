import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_AtomicIntersection =
  _test_json_assertStringify(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.json.createAssertStringify<AtomicIntersection>(),
  );
