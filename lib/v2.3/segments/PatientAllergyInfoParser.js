const TypeParser = require("./TypeParser");

class PatientAllergyInfoParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedAL1 = {};

    switch (fields.length) {
      case 7:
        parsedAL1["AL1.6"] = this.parseAL1_6(fields[6]);

      case 6:
        parsedAL1["AL1.5"] = this.parseAL1_5(fields[5]);

      case 5:
        parsedAL1["AL1.4"] = this.parseAL1_4(fields[4]);

      case 4:
        parsedAL1["AL1.3"] = this.parseAL1_3(fields[3]);

      case 3:
        parsedAL1["AL1.2"] = this.parseAL1_2(fields[2]);

      case 2:
        parsedAL1["AL1.1"] = this.parseAL1_1(fields[1]);
    }

    return parsedAL1;
  }

  parseAL1_1(siValue) {
    return this.parseTypeSI(siValue, "AL1.1");
  }

  parseAL1_2(isValue) {
    return this.parseTypeIS(isValue, "AL1.2");
  }

  parseAL1_3(ceValue) {
    return this.parseTypeCE(ceValue, "AL1.3");
  }

  parseAL1_4(isValue) {
    return this.parseTypeIS(isValue, "AL1.4");
  }

  parseAL1_5(stValue) {
    return this.parseTypeST(stValue, "AL1.5");
  }

  parseAL1_6(dtValue) {
    return this.parseTypeDT(dtValue, "AL1.6");
  }
}

module.exports = PatientAllergyInfoParser;
