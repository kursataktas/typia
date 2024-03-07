import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ArraySimpleProtobufNullable =
  _test_functional_assertFunction(TypeGuardError)(
    "ArraySimpleProtobufNullable",
  )(ArraySimpleProtobufNullable)(
    (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
      typia.functional.assertFunction(p),
  );
