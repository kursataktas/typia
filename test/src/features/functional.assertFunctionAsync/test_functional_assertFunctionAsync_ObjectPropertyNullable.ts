import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectPropertyNullable =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ObjectPropertyNullable",
  )(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.assertFunction(p),
  );
