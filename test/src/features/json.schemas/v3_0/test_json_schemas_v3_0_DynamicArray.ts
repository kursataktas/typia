import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_DynamicArray = 
  _test_json_schemas({
    version: "3.0",
    name: "DynamicArray", 
  })(typia.json.schemas<[DynamicArray], "3.0">());