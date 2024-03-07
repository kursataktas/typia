import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ClassPropertyAssignment =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ClassPropertyAssignment",
  })(typia.json.application<[ClassPropertyAssignment], "swagger", false>());
