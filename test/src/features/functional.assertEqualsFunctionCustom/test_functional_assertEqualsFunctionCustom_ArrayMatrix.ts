import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ArrayMatrix =
  _test_functional_assertEqualsFunction(CustomGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => ArrayMatrix) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
