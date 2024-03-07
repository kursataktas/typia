import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagNaN =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
