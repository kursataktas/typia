import typia from "typia";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectTuple = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectTuple", 
  })(typia.json.schemas<[ObjectTuple], "3.1">());