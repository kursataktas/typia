import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectUndefined = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectUndefined",
  })(typia.llm.schema<ObjectUndefined, "3.0">());