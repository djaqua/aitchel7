const TypeParser = require("./TypeParser");

class PatientDemographicParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedPD1 = {};

    switch (fields.length) {
      case 13:
        parsedPD1["PD1.12"] = this.parsePD1_12(fields[12]);

      case 12:
        parsedPD1["PD1.11"] = this.parsePD1_11(fields[11]);

      case 11:
        parsedPD1["PD1.10"] = this.parsePD1_10(fields[10]);

      case 10:
        parsedPD1["PD1.9"] = this.parsePD1_9(fields[9]);

      case 9:
        parsedPD1["PD1.8"] = this.parsePD1_8(fields[8]);

      case 8:
        parsedPD1["PD1.7"] = this.parsePD1_7(fields[7]);

      case 7:
        parsedPD1["PD1.6"] = this.parsePD1_6(fields[6]);

      case 6:
        parsedPD1["PD1.5"] = this.parsePD1_5(fields[5]);

      case 5:
        parsedPD1["PD1.4"] = this.parsePD1_4(fields[4]);

      case 4:
        parsedPD1["PD1.3"] = this.parsePD1_3(fields[3]);

      case 3:
        parsedPD1["PD1.2"] = this.parsePD1_2(fields[2]);

      case 2:
        parsedPD1["PD1.1"] = this.parsePD1_1(fields[1]);
    }

    return parsedPD1;
  }

  parsePD1_1(isValue) {
    return this.parseTypeIS(isValue, "PD1.1");
  }

  parsePD1_2(isValue) {
    return this.parseTypeIS(isValue, "PD1.2");
  }

  parsePD1_3(xonValue) {
    return this.parseTypeXON(xonValue, "PD1.3");
  }

  parsePD1_4(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PD1.4");
  }

  parsePD1_5(isValue) {
    return this.parseTypeIS(isValue, "PD1.5");
  }

  parsePD1_6(isValue) {
    return this.parseTypeIS(isValue, "PD1.6");
  }

  parsePD1_7(isValue) {
    return this.parseTypeIS(isValue, "PD1.7");
  }

  parsePD1_8(isValue) {
    return this.parseTypeIS(isValue, "PD1.8");
  }

  parsePD1_9(idValue) {
    return this.parseTypeID(idValue, "PD1.9");
  }

  parsePD1_10(cxValue) {
    return this.parseTypeCX(cxValue, "PD1.10");
  }

  parsePD1_11(ceValue) {
    return this.parseTypeCE(ceValue, "PD1.11");
  }

  parsePD1_12(idValue) {
    return this.parseTypeID(idValue, "PD1.12");
  }
}

module.exports = PatientDemographicParser;
