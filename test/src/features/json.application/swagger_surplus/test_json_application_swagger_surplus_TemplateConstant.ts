import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TemplateConstant =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TemplateConstant",
  })(typia.json.application<[TemplateConstant], "swagger", true>());
