import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_CommentTagDefault = 
  _test_json_schemas({
    version: "3.0",
    name: "CommentTagDefault", 
  })(typia.json.schemas<[CommentTagDefault], "3.0">());