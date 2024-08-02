const TypeParser = require("./TypeParser");

class UB1Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedUB1 = {};

    switch (fields.length) {
      case 1:
        parsedUB1["UB1.0"] = this.parseUB1_0(fields[0]);

      case 0:
        parsedUB1["UB1.29"] = this.parseUB1_29(fields[29]);

      case 29:
        parsedUB1["UB1.28"] = this.parseUB1_28(fields[28]);

      case 28:
        parsedUB1["UB1.27"] = this.parseUB1_27(fields[27]);

      case 27:
        parsedUB1["UB1.26"] = this.parseUB1_26(fields[26]);

      case 26:
        parsedUB1["UB1.25"] = this.parseUB1_25(fields[25]);

      case 25:
        parsedUB1["UB1.24"] = this.parseUB1_24(fields[24]);

      case 24:
        parsedUB1["UB1.23"] = this.parseUB1_23(fields[23]);

      case 23:
        parsedUB1["UB1.22"] = this.parseUB1_22(fields[22]);

      case 22:
        parsedUB1["UB1.21"] = this.parseUB1_21(fields[21]);

      case 21:
        parsedUB1["UB1.20"] = this.parseUB1_20(fields[20]);

      case 20:
        parsedUB1["UB1.19"] = this.parseUB1_19(fields[19]);

      case 19:
        parsedUB1["UB1.18"] = this.parseUB1_18(fields[18]);

      case 18:
        parsedUB1["UB1.17"] = this.parseUB1_17(fields[17]);

      case 17:
        parsedUB1["UB1.16"] = this.parseUB1_16(fields[16]);

      case 16:
        parsedUB1["UB1.15"] = this.parseUB1_15(fields[15]);

      case 15:
        parsedUB1["UB1.14"] = this.parseUB1_14(fields[14]);

      case 14:
        parsedUB1["UB1.13"] = this.parseUB1_13(fields[13]);

      case 13:
        parsedUB1["UB1.12"] = this.parseUB1_12(fields[12]);

      case 12:
        parsedUB1["UB1.11"] = this.parseUB1_11(fields[11]);

      case 11:
        parsedUB1["UB1.10"] = this.parseUB1_10(fields[10]);

      case 10:
        parsedUB1["UB1.9"] = this.parseUB1_9(fields[9]);

      case 9:
        parsedUB1["UB1.8"] = this.parseUB1_8(fields[8]);

      case 8:
        parsedUB1["UB1.7"] = this.parseUB1_7(fields[7]);

      case 7:
        parsedUB1["UB1.6"] = this.parseUB1_6(fields[6]);

      case 6:
        parsedUB1["UB1.5"] = this.parseUB1_5(fields[5]);

      case 5:
        parsedUB1["UB1.4"] = this.parseUB1_4(fields[4]);

      case 4:
        parsedUB1["UB1.3"] = this.parseUB1_3(fields[3]);

      case 3:
        parsedUB1["UB1.2"] = this.parseUB1_2(fields[2]);

      case 2:
        parsedUB1["UB1.1"] = this.parseUB1_1(fields[1]);
    }

    return parsedUB1;
  }

  parseUB1_1(siValue) {
    return this.parseTypeSI(siValue, "UB1.1");
  }

  parseUB1_2(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.2");
  }

  parseUB1_3(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.3");
  }

  parseUB1_4(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.4");
  }

  parseUB1_5(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.5");
  }

  parseUB1_6(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.6");
  }

  parseUB1_7(isValue) {
    return this.parseTypeIS(isValue, "UB1.7");
  }

  parseUB1_8(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.8");
  }

  parseUB1_9(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.9");
  }

  parseUB1_10(cm_uvcValue) {
    return this.parseTypeCM_UVC(cm_uvcValue, "UB1.10");
  }

  parseUB1_11(nmValue) {
    return this.parseTypeNM(nmValue, "UB1.11");
  }

  parseUB1_12(ceValue) {
    return this.parseTypeCE(ceValue, "UB1.12");
  }

  parseUB1_13(ceValue) {
    return this.parseTypeCE(ceValue, "UB1.13");
  }

  parseUB1_14(dtValue) {
    return this.parseTypeDT(dtValue, "UB1.14");
  }

  parseUB1_15(dtValue) {
    return this.parseTypeDT(dtValue, "UB1.15");
  }

  parseUB1_16(cm_ocdValue) {
    return this.parseTypeCM_OCD(cm_ocdValue, "UB1.16");
  }

  parseUB1_17(ceValue) {
    return this.parseTypeCE(ceValue, "UB1.17");
  }

  parseUB1_18(dtValue) {
    return this.parseTypeDT(dtValue, "UB1.18");
  }

  parseUB1_19(dtValue) {
    return this.parseTypeDT(dtValue, "UB1.19");
  }

  parseUB1_20(stValue) {
    return this.parseTypeST(stValue, "UB1.20");
  }

  parseUB1_21(stValue) {
    return this.parseTypeST(stValue, "UB1.21");
  }

  parseUB1_22(stValue) {
    return this.parseTypeST(stValue, "UB1.22");
  }

  parseUB1_23(stValue) {
    return this.parseTypeST(stValue, "UB1.23");
  }
}

module.exports = UB1Parser;
