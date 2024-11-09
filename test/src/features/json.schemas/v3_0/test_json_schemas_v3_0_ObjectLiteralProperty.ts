import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectLiteralProperty = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectLiteralProperty", 
  })(typia.json.schemas<[ObjectLiteralProperty], "3.0">());