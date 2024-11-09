import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagArray = 
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagArray", 
  })(typia.json.schemas<[TypeTagArray], "3.1">());