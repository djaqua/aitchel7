const { describe, it } = require("mocha");
const SegmentParser = require("../lib/SegmentParser");

class TestTypeParser {
  parseType(type, id, value) {
    if (value === undefined || value === null) {
      return undefined;
    }

    switch (type) {
      case "num":
        return this.parseNum(value, id);
      case "str":
        return this.parseStr(value, id);
    }
  }

  parseStr(str) {
    return `${str}`;
  }

  parseNum(num) {
    return parseInt(num);
  }
}

const CONTEXT = {
  fieldSeparator: "|",
};

const TYPE_PARSER = new TestTypeParser();

const SEGMENT_DESCRIPTORS = {
  FOO: [
    {
      id: "FOO.1",
      type: "str",
    },
    {
      id: "FOO.2",
      type: "str",
    },
    {
      id: "FOO.3",
      type: "str",
    },
  ],
  BAR: [
    {
      id: "bar a",
      type: "num",
    },
    {
      id: "bar b",
      type: "str",
    },
    {
      id: "bar c",
      type: "num",
    },
  ],
};

describe("lib/SegmentParser", () => {
  describe("parseLine", () => {
    let parser;

    beforeEach(() => {
      parser = new SegmentParser(CONTEXT, TYPE_PARSER, SEGMENT_DESCRIPTORS);
    });

    describe("when lines argument is undefined, null, or an empty string", () => {
      it("should return undefined", () => {
        expect(parser.parseSegment(undefined)).to.equal(undefined);
        expect(parser.parseSegment(null)).to.equal(undefined);
        expect(parser.parseSegment("")).to.equal(undefined);
      });
    });

    describe("when segment ID is NOT a supported segment type", () => {
      describe("when the line contains only an unsupported segment ID", () => {
        it("should throw an error", () => {
          const line = "BAZ";
          expect(() => {
            parser.parseSegment(line);
          }).to.throw(`unsupported segment ID 'BAZ' in '${line}'`);
        });
      });

      describe("when the line contains an unsupported segment ID and additional fields", () => {
        it("should throw an error", () => {
          const line = "BAZ|baz value 1|baz value 2|baz value 3";
          expect(() => {
            parser.parseSegment(line);
          }).to.throw(`unsupported segment ID 'BAZ' in '${line}'`);
        });
      });

      describe("when the segment ID is a substring of a supported segment type", () => {
        it("should throw an error", () => {
          // aka "no pattern matching pt. 1"
          const line = "F|foo value 1|foo value 2|foo value 3";
          expect(() => {
            parser.parseSegment(line);
          }).to.throw(`unsupported segment ID 'F' in '${line}'`);
        });
      });

      describe("when a supported segment type is a substring of the segment ID", () => {
        it("should throw an error", () => {
          // aka "no pattern matching pt. 2"
          const line = "FOOBAR|A|10|C";
          expect(() => {
            parser.parseSegment(line);
          }).to.throw(`unsupported segment ID 'FOOBAR' in '${line}'`);
        });
      });

      describe("when using a custom field separator", () => {
        beforeEach(() => {
          parser = new SegmentParser(
            { fieldSeparator: "$" },
            TYPE_PARSER,
            SEGMENT_DESCRIPTORS
          );
        });

        it("should throw an error", () => {
          const line = "BAZ$baz value 1$baz value 2$baz value 3";

          expect(() => {
            parser.parseSegment(line);
          }).to.throw(`unsupported segment ID 'BAZ' in '${line}'`);
        });
      });
    });

    describe("when segment ID is a supported segment type", () => {
      describe("when the line only contains a segment ID", () => {
        it("should return the expected result", () => {
          const line = "FOO";
          const expectedResult = {
            "FOO.1": undefined,
            "FOO.2": undefined,
            "FOO.3": undefined,
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });

      describe("when the last field is undefined", () => {
        it("parses all supported fields", () => {
          const line = "FOO|foo value 1|foo value 2";
          const expectedResult = {
            "FOO.1": "foo value 1",
            "FOO.2": "foo value 2",
            "FOO.3": undefined,
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });

      describe("when the last field is an empty string", () => {
        it("parses all supported fields", () => {
          // a value for FOO.3 is specified in the input line (as an empty string after the field delimiter)
          const line = "FOO|foo value 1|foo value 2|";
          const expectedResult = {
            "FOO.1": "foo value 1",
            "FOO.2": "foo value 2",
            "FOO.3": "",
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });

      describe("when there is exactly one value for each field", () => {
        it("parses all supported fields", () => {
          const line = "FOO|foo value 1|foo value 2|foo value 3";
          const expectedResult = {
            "FOO.1": "foo value 1",
            "FOO.2": "foo value 2",
            "FOO.3": "foo value 3",
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });

      describe("when there are more values than fields", () => {
        it("only parses supported fields", () => {
          // 'foo value 4' does not correspond to a supported field
          const line = "FOO|foo value 1|foo value 2|foo value 3|foo value 4";
          const expectedResult = {
            "FOO.1": "foo value 1",
            "FOO.2": "foo value 2",
            "FOO.3": "foo value 3",
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });

      describe("when using a custom field separator", () => {
        beforeEach(() => {
          parser = new SegmentParser(
            { fieldSeparator: "$" },
            TYPE_PARSER,
            SEGMENT_DESCRIPTORS
          );
        });
        it("should not throw an error", () => {
          const line = "FOO$foo value 1$foo value 2$foo value 3";

          expect(() => {
            parser.parseSegment(line);
          }).to.not.throw();
        });

        it("parses all supported fields", () => {
          const line = "FOO$foo value 1$foo value 2$foo value 3";
          const expectedResult = {
            "FOO.1": "foo value 1",
            "FOO.2": "foo value 2",
            "FOO.3": "foo value 3",
          };
          expect(parser.parseSegment(line)).to.deep.equal(expectedResult);
        });
      });
    });

    describe("handling different segment types", () => {
      it("should throw an error for each of two distinct unsupported types", () => {
        const fozLine = "FOZ|foz value a|foz value b|foz value c";
        expect(() => {
          parser.parseSegment(fozLine);
        }).to.throw();

        const bazLine = "BAZ|baz value 1|baz value 2|baz value 3";
        expect(() => {
          parser.parseSegment(bazLine);
        }).to.throw();
      });

      it("should parse a supported type after throwing an error for an unsupported type", () => {
        const bazLine = "BAZ|baz value 1|baz value 2|baz value 3";
        expect(() => {
          parser.parseSegment(bazLine);
        }).to.throw();

        const barLine = "BAR|1|10|100";
        const expectedBar = {
          "bar a": 1,
          "bar b": "10",
          "bar c": 100,
        };

        expect(parser.parseSegment(barLine)).to.deep.equal(expectedBar);
      });

      it("should throw an for an parsing an unsupported type after parsing a supported type", () => {
        const barLine = "BAR|1|10|100";
        const expectedBar = {
          "bar a": 1,
          "bar b": "10",
          "bar c": 100,
        };
        expect(parser.parseSegment(barLine)).to.deep.equal(expectedBar);

        const bazLine = "BAZ|baz value 1|baz value 2|baz value 3";
        expect(() => {
          parser.parseSegment(bazLine);
        }).to.throw();
      });

      it("should parse two distinct supported types", () => {
        const line = "FOO|foo value 1|foo value 2|foo value 3";
        const expectedResult = {
          "FOO.1": "foo value 1",
          "FOO.2": "foo value 2",
          "FOO.3": "foo value 3",
        };
        expect(parser.parseSegment(line)).to.deep.equal(expectedResult);

        const barLine = "BAR|1|10|100";
        const expectedBar = {
          "bar a": 1,
          "bar b": "10",
          "bar c": 100,
        };

        expect(parser.parseSegment(barLine)).to.deep.equal(expectedBar);
      });
    });
  });
});
