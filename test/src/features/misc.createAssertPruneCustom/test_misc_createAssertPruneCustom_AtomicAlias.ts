import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_AtomicAlias =
  _test_misc_assertPrune(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )(typia.misc.createAssertPrune<AtomicAlias>((p) => new CustomGuardError(p)));
