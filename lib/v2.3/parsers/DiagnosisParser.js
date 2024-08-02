const TypeParser = require("./TypeParser");

class DiagnosisParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedDG1 = {};

    switch (fields.length) {
      case 20:
        parsedDG1["DG1.19"] = this.parseDG1_19(fields[19]);

      case 19:
        parsedDG1["DG1.18"] = this.parseDG1_18(fields[18]);

      case 18:
        parsedDG1["DG1.17"] = this.parseDG1_17(fields[17]);

      case 17:
        parsedDG1["DG1.16"] = this.parseDG1_16(fields[16]);

      case 16:
        parsedDG1["DG1.15"] = this.parseDG1_15(fields[15]);

      case 15:
        parsedDG1["DG1.14"] = this.parseDG1_14(fields[14]);

      case 14:
        parsedDG1["DG1.13"] = this.parseDG1_13(fields[13]);

      case 13:
        parsedDG1["DG1.12"] = this.parseDG1_12(fields[12]);

      case 12:
        parsedDG1["DG1.11"] = this.parseDG1_11(fields[11]);

      case 11:
        parsedDG1["DG1.10"] = this.parseDG1_10(fields[10]);

      case 10:
        parsedDG1["DG1.9"] = this.parseDG1_9(fields[9]);

      case 9:
        parsedDG1["DG1.8"] = this.parseDG1_8(fields[8]);

      case 8:
        parsedDG1["DG1.7"] = this.parseDG1_7(fields[7]);

      case 7:
        parsedDG1["DG1.6"] = this.parseDG1_6(fields[6]);

      case 6:
        parsedDG1["DG1.5"] = this.parseDG1_5(fields[5]);

      case 5:
        parsedDG1["DG1.4"] = this.parseDG1_4(fields[4]);

      case 4:
        parsedDG1["DG1.3"] = this.parseDG1_3(fields[3]);

      case 3:
        parsedDG1["DG1.2"] = this.parseDG1_2(fields[2]);

      case 2:
        parsedDG1["DG1.1"] = this.parseDG1_1(fields[1]);
    }

    return parsedDG1;
  }

  parseDG1_1(siValue) {
    return this.parseTypeSI(siValue, "DG1.1");
  }

  parseDG1_2(idValue) {
    return this.parseTypeID(idValue, "DG1.2");
  }

  parseDG1_3(ceValue) {
    return this.parseTypeCE(ceValue, "DG1.3");
  }

  parseDG1_4(stValue) {
    return this.parseTypeST(stValue, "DG1.4");
  }

  parseDG1_5(tsValue) {
    return this.parseTypeTS(tsValue, "DG1.5");
  }

  parseDG1_6(isValue) {
    return this.parseTypeIS(isValue, "DG1.6");
  }

  parseDG1_7(ceValue) {
    return this.parseTypeCE(ceValue, "DG1.7");
  }

  parseDG1_8(ceValue) {
    return this.parseTypeCE(ceValue, "DG1.8");
  }

  parseDG1_9(idValue) {
    return this.parseTypeID(idValue, "DG1.9");
  }

  parseDG1_10(isValue) {
    return this.parseTypeIS(isValue, "DG1.10");
  }

  parseDG1_11(ceValue) {
    return this.parseTypeCE(ceValue, "DG1.11");
  }

  parseDG1_12(nmValue) {
    return this.parseTypeNM(nmValue, "DG1.12");
  }

  parseDG1_13(cpValue) {
    return this.parseTypeCP(cpValue, "DG1.13");
  }

  parseDG1_14(stValue) {
    return this.parseTypeST(stValue, "DG1.14");
  }

  parseDG1_15(nmValue) {
    return this.parseTypeNM(nmValue, "DG1.15");
  }

  parseDG1_16(xcnValue) {
    return this.parseTypeXCN(xcnValue, "DG1.16");
  }

  parseDG1_17(isValue) {
    return this.parseTypeIS(isValue, "DG1.17");
  }

  parseDG1_18(idValue) {
    return this.parseTypeID(idValue, "DG1.18");
  }

  parseDG1_19(tsValue) {
    return this.parseTypeTS(tsValue, "DG1.19");
  }
}

module.exports = DiagnosisParser;
