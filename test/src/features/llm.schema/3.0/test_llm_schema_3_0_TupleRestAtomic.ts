import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TupleRestAtomic = 
  _test_llm_schema({
    model: "3.0",
    name: "TupleRestAtomic",
  })(typia.llm.schema<TupleRestAtomic, "3.0">());