import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_FunctionalProperty =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)(
    typia.createAssertGuardEquals<FunctionalProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
