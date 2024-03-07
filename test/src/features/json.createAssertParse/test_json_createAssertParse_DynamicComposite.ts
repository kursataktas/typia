import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicComposite =
  _test_json_assertParse(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.json.createAssertParse<DynamicComposite>());
