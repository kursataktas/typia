import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_json_assertParse_CommentTagArray = _test_json_assertParse(
  TypeGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.json.assertParse<CommentTagArray>(input),
);
