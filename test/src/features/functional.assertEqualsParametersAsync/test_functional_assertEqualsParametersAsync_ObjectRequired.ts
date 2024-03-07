import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectRequired =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectRequired",
  )(ObjectRequired)((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertEqualsParameters(p),
  );
