import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ClassClosure = _test_assertGuard(
  TypeGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)(
  typia.createAssertGuard<ClassClosure>(),
);
