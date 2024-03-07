import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_NativeSimple =
  _test_functional_assertParameters(CustomGuardError)("NativeSimple")(
    NativeSimple,
  )((p: (input: NativeSimple) => NativeSimple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
