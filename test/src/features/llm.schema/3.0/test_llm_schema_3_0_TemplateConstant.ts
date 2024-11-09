import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TemplateConstant = 
  _test_llm_schema({
    model: "3.0",
    name: "TemplateConstant",
  })(typia.llm.schema<TemplateConstant, "3.0">());