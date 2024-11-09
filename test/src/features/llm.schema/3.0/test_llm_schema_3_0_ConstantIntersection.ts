import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ConstantIntersection = 
  _test_llm_schema({
    model: "3.0",
    name: "ConstantIntersection",
  })(typia.llm.schema<ConstantIntersection, "3.0">());