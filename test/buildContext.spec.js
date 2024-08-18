const buildContext = require("../lib/buildContext");

describe("buildContext", () => {
  describe.skip("// TODO remove when finished", () => {});

  it("should should return undefined when message is undefined, null, or an empty string", () => {
    expect(buildContext()).to.deep.equal(undefined);
    expect(buildContext(null)).to.deep.equal(undefined);
    expect(buildContext("")).to.deep.equal(undefined);
  });

  describe("improperly formatted message headers", () => {
    it("should return undefined on a field separator mismatch (1)", () => {
      const message = `MSH|^~\\&$MSH.3$MSH.4$MSH.5$MSH.6$MSH.7$MSH.8$MSH.9$MSH.10$MSH.11$MSH.12`;
      expect(buildContext(message)).to.equal(undefined);
    });

    it("should return undefined on a field separator mismatch (2)", () => {
      const message = `MSH$^~\\&|MSH.3|MSH.4|MSH.5|MSH.6|MSH.7|MSH.8|MSH.9|MSH.10|MSH.11|MSH.12`;
      expect(buildContext(message)).to.equal(undefined);
    });

    it("should return undefined on less than 12 fields using default field separator", () => {
      const message = `MSH|^~\\&|MSH.3|MSH.4|MSH.5|MSH.6|MSH.7|MSH.8|MSH.9|MSH.10|MSH.11`;
      expect(buildContext(message)).to.equal(undefined);
    });

    it("should return undefined on less than 12 fields using custom field separator", () => {
      const message = `MSH$^~\\&$MSH.3$MSH.4$MSH.5$MSH.6$MSH.7$MSH.8$MSH.9$MSH.10$MSH.11`;
      expect(buildContext(message)).to.equal(undefined);
    });
  });

  describe("properly formatted message headers", () => {
    describe("message header segment supplies all information", () => {
      let partialExpectedContext;
      beforeEach(() => {
        partialExpectedContext = {
          componentSeparator: "^",
          repetitionSeparator: "~",
          escapeCharacter: "\\",
          subcomponentSeparator: "&",
          messageType: "MSH.9.1",
          triggerEvent: "MSH.9.2",
          hl7version: "MSH.12",
        };
      });

      it("should build a context with the expected values using default field separator", () => {
        const message = `MSH|^~\\&|MSH.3|MSH.4|MSH.5|MSH.6|MSH.7|MSH.8|MSH.9.1^MSH.9.2|MSH.10|MSH.11|MSH.12`;
        const expectedContext = {
          fieldSeparator: "|",
          ...partialExpectedContext,
        };
        expect(buildContext(message)).to.deep.equal(expectedContext);
      });

      it("should build a context with the expected values using custom field separator", () => {
        const message = `MSH$^~\\&$MSH.3$MSH.4$MSH.5$MSH.6$MSH.7$MSH.8$MSH.9.1^MSH.9.2$MSH.10$MSH.11$MSH.12`;
        const expectedContext = {
          fieldSeparator: "$",
          ...partialExpectedContext,
        };
        expect(buildContext(message)).to.deep.equal(expectedContext);
      });
    });
  });
});
