import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayAtomicAlias = _test_misc_assertClone(
  TypeGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.misc.assertClone<ArrayAtomicAlias>(input),
);
