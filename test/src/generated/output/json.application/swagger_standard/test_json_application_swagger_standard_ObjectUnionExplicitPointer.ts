import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../../structures/ObjectUnionExplicitPointer";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectUnionExplicitPointer =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionExplicitPointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicitPointer",
      },
    ],
    components: {
      schemas: {
        ObjectUnionExplicitPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerObjectUnionExplicitPointer.Shape",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "IPointerObjectUnionExplicitPointer.Shape": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.Shape",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectUnionExplicitPointer.Shape": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle",
            },
          ],
        },
        "ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint":
          {
            type: "object",
            properties: {
              x: {
                type: "number",
              },
              y: {
                type: "number",
              },
              type: {
                type: "string",
                enum: ["point"],
              },
            },
            nullable: false,
            required: ["x", "y", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                type: "string",
                enum: ["line"],
              },
            },
            nullable: false,
            required: ["p1", "p2", "type"],
          },
        "ObjectUnionExplicitPointer.IPoint": {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          nullable: false,
          required: ["x", "y"],
        },
        "ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                type: "string",
                enum: ["triangle"],
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                type: "string",
                enum: ["rectangle"],
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "p4", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline":
          {
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                },
              },
              type: {
                type: "string",
                enum: ["polyline"],
              },
            },
            nullable: false,
            required: ["points", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon":
          {
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
                },
              },
              type: {
                type: "string",
                enum: ["polygon"],
              },
            },
            nullable: false,
            required: ["outer", "inner", "type"],
          },
        "ObjectUnionExplicitPointer.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
            },
          },
          nullable: false,
          required: ["points"],
        },
        "ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle":
          {
            type: "object",
            properties: {
              centroid: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              radius: {
                type: "number",
              },
              type: {
                type: "string",
                enum: ["circle"],
              },
            },
            nullable: false,
            required: ["centroid", "radius", "type"],
          },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
