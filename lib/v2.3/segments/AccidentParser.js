const TypeParser = require("./TypeParser");

class AccidentParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedACC = {};

    switch (fields.length) {
      case 7:
        parsedACC["ACC.6"] = this.parseACC6(fields[6]);

      case 6:
        parsedACC["ACC.5"] = this.parseACC5(fields[5]);

      case 5:
        parsedACC["ACC.4"] = this.parseACC4(fields[4]);

      case 4:
        parsedACC["ACC.3"] = this.parseACC3(fields[3]);

      case 3:
        parsedACC["ACC.2"] = this.parseACC2(fields[2]);

      case 2:
        parsedACC["ACC.1"] = this.parseACC1(fields[1]);
    }

    return parsedACC;
  }

  parseACC1(tsValue) {
    return this.parseTypeTS(tsValue, "ACC.1");
  }

  parseACC2(ceValue) {
    return this.parseTypeCE(ceValue, "ACC.2");
  }

  parseACC3(stValue) {
    return this.parseTypeST(stValue, "ACC.3");
  }

  parseACC4(ceValue) {
    return this.parseTypeCE(ceValue, "ACC.4");
  }

  parseACC5(idValue) {
    return this.parseTypeID(idValue, "ACC.5");
  }

  parseACC6(idValue) {
    return this.parseTypeID(idValue, "ACC.6");
  }
}

module.exports = AccidentParser;
