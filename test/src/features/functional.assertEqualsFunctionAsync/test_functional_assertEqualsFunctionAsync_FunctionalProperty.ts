import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_FunctionalProperty =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "FunctionalProperty",
  )(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.assertEqualsFunction(p),
  );
