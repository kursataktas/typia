import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectGenericAlias =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectGenericAlias",
  )(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
