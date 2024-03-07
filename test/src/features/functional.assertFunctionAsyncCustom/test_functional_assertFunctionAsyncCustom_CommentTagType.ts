import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagType =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
