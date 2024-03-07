import typia from "typia";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ConstantIntersection =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ConstantIntersection",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantIntersection",
      },
    ],
    components: {
      schemas: {
        ConstantIntersection: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrapperfalse",
              },
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrapper1",
              },
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrappertwo",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrapperfalse",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrapper1",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ConstantIntersection.Wrappertwo",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
        "ConstantIntersection.Wrapperfalse": {
          type: "boolean",
          enum: [false],
        },
        "ConstantIntersection.Wrapper1": {
          type: "number",
          enum: [1],
        },
        "ConstantIntersection.Wrappertwo": {
          type: "string",
          enum: ["two"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
