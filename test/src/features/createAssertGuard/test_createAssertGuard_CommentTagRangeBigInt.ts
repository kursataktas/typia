import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagRangeBigInt = _test_assertGuard(
  TypeGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  typia.createAssertGuard<CommentTagRangeBigInt>(),
);
