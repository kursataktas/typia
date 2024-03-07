import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_ArrayRepeatedNullable =
  _test_reflect_metadata("ArrayRepeatedNullable")({
    metadatas: [
      {
        any: false,
        required: true,
        optional: false,
        nullable: true,
        functional: false,
        atomics: [
          {
            type: "string",
            tags: [],
          },
          {
            type: "number",
            tags: [],
          },
        ],
        constants: [],
        templates: [],
        escaped: null,
        rest: null,
        arrays: [
          {
            name: "Array<ArrayRepeatedNullable>",
            tags: [],
          },
        ],
        tuples: [],
        objects: [],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [],
      aliases: [],
      arrays: [
        {
          name: "Array<ArrayRepeatedNullable>",
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: true,
            functional: false,
            atomics: [
              {
                type: "string",
                tags: [],
              },
              {
                type: "number",
                tags: [],
              },
            ],
            constants: [],
            templates: [],
            escaped: null,
            rest: null,
            arrays: [
              {
                name: "Array<ArrayRepeatedNullable>",
                tags: [],
              },
            ],
            tuples: [],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          nullables: [true],
          recursive: true,
          index: 0,
        },
      ],
      tuples: [],
    },
  });
