import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectRecursive =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "swagger", true>());
