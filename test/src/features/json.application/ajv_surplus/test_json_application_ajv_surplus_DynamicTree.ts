import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicTree =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicTree",
  })(typia.json.application<[DynamicTree], "ajv", true>());
