import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ToJsonAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonAtomicUnion",
  })(typia.json.application<[ToJsonAtomicUnion], "swagger", false>());
