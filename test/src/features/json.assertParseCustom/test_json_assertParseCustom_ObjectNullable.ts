import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectNullable =
  _test_json_assertParse(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    typia.json.assertParse<ObjectNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
