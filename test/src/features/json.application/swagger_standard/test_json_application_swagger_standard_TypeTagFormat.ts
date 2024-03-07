import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TypeTagFormat =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagFormat",
  })(typia.json.application<[TypeTagFormat], "swagger", false>());
