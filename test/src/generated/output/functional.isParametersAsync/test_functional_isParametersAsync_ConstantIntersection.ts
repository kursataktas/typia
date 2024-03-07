import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
export const test_functional_isParametersAsync_ConstantIntersection =
  _test_functional_isParametersAsync("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      async (
        input: ConstantIntersection,
      ): Promise<ConstantIntersection | null> => {
        if (
          false ===
          ((input: any): input is ConstantIntersection => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              false === input[0] &&
              1 === input[1] &&
              "two" === input[2]
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
