import typia from "typia";
import { ObjectSimple } from "../../../../structures/ObjectSimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectSimple.IBox3D",
      },
    ],
    components: {
      schemas: {
        "ObjectSimple.IBox3D": {
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            position: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
          },
          nullable: false,
          required: ["scale", "position", "rotate", "pivot"],
        },
        "ObjectSimple.IPoint3D": {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          nullable: false,
          required: ["x", "y", "z"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
