const TypeParser = require("./TypeParser");

class UB2Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedUB2 = {};

    switch (fields.length) {
      case 18:
        parsedUB2["UB2.17"] = this.parseUB2_17(fields[17]);

      case 17:
        parsedUB2["UB2.16"] = this.parseUB2_16(fields[16]);

      case 16:
        parsedUB2["UB2.15"] = this.parseUB2_15(fields[15]);

      case 15:
        parsedUB2["UB2.14"] = this.parseUB2_14(fields[14]);

      case 14:
        parsedUB2["UB2.13"] = this.parseUB2_13(fields[13]);

      case 13:
        parsedUB2["UB2.12"] = this.parseUB2_12(fields[12]);

      case 12:
        parsedUB2["UB2.11"] = this.parseUB2_11(fields[11]);

      case 11:
        parsedUB2["UB2.10"] = this.parseUB2_10(fields[10]);

      case 10:
        parsedUB2["UB2.9"] = this.parseUB2_9(fields[9]);

      case 9:
        parsedUB2["UB2.8"] = this.parseUB2_8(fields[8]);

      case 8:
        parsedUB2["UB2.7"] = this.parseUB2_7(fields[7]);

      case 7:
        parsedUB2["UB2.6"] = this.parseUB2_6(fields[6]);

      case 6:
        parsedUB2["UB2.5"] = this.parseUB2_5(fields[5]);

      case 5:
        parsedUB2["UB2.4"] = this.parseUB2_4(fields[4]);

      case 4:
        parsedUB2["UB2.3"] = this.parseUB2_3(fields[3]);

      case 3:
        parsedUB2["UB2.2"] = this.parseUB2_2(fields[2]);

      case 2:
        parsedUB2["UB2.1"] = this.parseUB2_1(fields[1]);
    }

    return parsedUB2;
  }

  parseUB2_1(siValue) {
    return this.parseTypeSI(siValue, "UB2.1");
  }

  parseUB2_2(stValue) {
    return this.parseTypeST(stValue, "UB2.2");
  }

  parseUB2_3(isValue) {
    return this.parseTypeIS(isValue, "UB2.3");
  }

  parseUB2_4(stValue) {
    return this.parseTypeST(stValue, "UB2.4");
  }

  parseUB2_5(stValue) {
    return this.parseTypeST(stValue, "UB2.5");
  }

  parseUB2_6(cm_uvc) {
    return this.parseType(cm_uvc, "UB2.6");
  }

  parseUB2_7(cm_ocdValue) {
    return this.parseType(cm_ocdValue, "UB2.7");
  }

  parseUB2_8(cm_ospValue) {
    return this.parseType(cm_ospValue, "UB2.8");
  }

  parseUB2_9(stValue) {
    return this.parseTypeST(stValue, "UB2.9");
  }

  parseUB2_10(stValue) {
    return this.parseTypeST(stValue, "UB2.10");
  }

  parseUB2_11(stValue) {
    return this.parseTypeST(stValue, "UB2.11");
  }

  parseUB2_12(stValue) {
    return this.parseTypeST(stValue, "UB2.12");
  }

  parseUB2_13(stValue) {
    return this.parseTypeST(stValue, "UB2.13");
  }

  parseUB2_14(stValue) {
    return this.parseTypeST(stValue, "UB2.14");
  }

  parseUB2_15(stValue) {
    return this.parseTypeST(stValue, "UB2.15");
  }

  parseUB2_16(stValue) {
    return this.parseTypeST(stValue, "UB2.16");
  }

  parseUB2_17(nmValue) {
    return this.parseTypeNM(nmValue, "UB2.17");
  }
}

module.exports = UB2Parser;
