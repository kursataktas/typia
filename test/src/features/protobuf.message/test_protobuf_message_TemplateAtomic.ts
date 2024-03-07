import typia from "typia";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TemplateAtomic = _test_protobuf_message(
  "TemplateAtomic",
)(typia.protobuf.message<TemplateAtomic>());
