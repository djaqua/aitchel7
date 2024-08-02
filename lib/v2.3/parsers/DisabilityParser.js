const TypeParser = require("./TypeParser");

class DisabilityParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedDB1 = {};

    switch (fields.length) {
      case 9:
        parsedDB1["DB1.8"] = this.parseDB1_8(fields[8]);

      case 8:
        parsedDB1["DB1.7"] = this.parseDB1_7(fields[7]);

      case 7:
        parsedDB1["DB1.6"] = this.parseDB1_6(fields[6]);

      case 6:
        parsedDB1["DB1.5"] = this.parseDB1_5(fields[5]);

      case 5:
        parsedDB1["DB1.4"] = this.parseDB1_4(fields[4]);

      case 4:
        parsedDB1["DB1.3"] = this.parseDB1_3(fields[3]);

      case 3:
        parsedDB1["DB1.2"] = this.parseDB1_2(fields[2]);

      case 2:
        parsedDB1["DB1.1"] = this.parseDB1_1(fields[1]);
    }

    return parsedDB1;
  }

  parseDB1_1(siValue) {
    return this.parseTypeSI(siValue, "DB1.1");
  }

  parseDB1_2(isValue) {
    return this.parseTypeIS(isValue, "DB1.2");
  }

  parseDB1_3(cxValue) {
    return this.parseTypeCX(cxValue, "DB1.3");
  }

  parseDB1_4(idValue) {
    return this.parseTypeID(idValue, "DB1.4");
  }

  parseDB1_5(dtValue) {
    return this.parseTypeDT(dtValue, "DB1.5");
  }

  parseDB1_6(dtValue) {
    return this.parseTypeDT(dtValue, "DB1.6");
  }

  parseDB1_7(dtValue) {
    return this.parseTypeDT(dtValue, "DB1.7");
  }

  parseDB1_8(dtValue) {
    return this.parseTypeDT(dtValue, "DB1.8");
  }
}

module.exports = DisabilityParser;
