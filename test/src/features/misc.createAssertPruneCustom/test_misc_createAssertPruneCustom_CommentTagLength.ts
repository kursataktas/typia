import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagLength =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.misc.createAssertPrune<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
