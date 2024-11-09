import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectNullable = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectNullable", 
  })(typia.json.schemas<[ObjectNullable], "3.0">());