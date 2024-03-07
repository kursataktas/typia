import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectUnionComposite =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionComposite",
  })(typia.json.application<[ObjectUnionComposite], "swagger", false>());
