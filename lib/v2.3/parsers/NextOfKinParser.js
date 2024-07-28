const TypeParser = require("./TypeParser");

class NextOfKinParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedNK1 = {};

    switch (fields.length) {
      case 38:
        parsedNK1["NK1.37"] = this.parseNK1_37(fields[37]);

      case 37:
        parsedNK1["NK1.36"] = this.parseNK1_36(fields[36]);

      case 36:
        parsedNK1["NK1.35"] = this.parseNK1_35(fields[35]);

      case 35:
        parsedNK1["NK1.34"] = this.parseNK1_34(fields[34]);

      case 34:
        parsedNK1["NK1.33"] = this.parseNK1_33(fields[33]);

      case 33:
        parsedNK1["NK1.32"] = this.parseNK1_32(fields[32]);

      case 32:
        parsedNK1["NK1.31"] = this.parseNK1_31(fields[31]);

      case 31:
        parsedNK1["NK1.30"] = this.parseNK1_30(fields[30]);

      case 30:
        parsedNK1["NK1.29"] = this.parseNK1_29(fields[29]);

      case 29:
        parsedNK1["NK1.28"] = this.parseNK1_28(fields[28]);

      case 28:
        parsedNK1["NK1.27"] = this.parseNK1_27(fields[27]);

      case 27:
        parsedNK1["NK1.26"] = this.parseNK1_26(fields[26]);

      case 26:
        parsedNK1["NK1.25"] = this.parseNK1_25(fields[25]);

      case 25:
        parsedNK1["NK1.24"] = this.parseNK1_24(fields[24]);

      case 24:
        parsedNK1["NK1.23"] = this.parseNK1_23(fields[23]);

      case 23:
        parsedNK1["NK1.22"] = this.parseNK1_22(fields[22]);

      case 2:
        parsedNK1["NK1.21"] = this.parseNK1_21(fields[21]);

      case 21:
        parsedNK1["NK1.20"] = this.parseNK1_20(fields[20]);

      case 20:
        parsedNK1["NK1.19"] = this.parseNK1_19(fields[19]);

      case 19:
        parsedNK1["NK1.18"] = this.parseNK1_18(fields[18]);

      case 18:
        parsedNK1["NK1.17"] = this.parseNK1_17(fields[17]);

      case 17:
        parsedNK1["NK1.16"] = this.parseNK1_16(fields[16]);

      case 16:
        parsedNK1["NK1.15"] = this.parseNK1_15(fields[15]);

      case 15:
        parsedNK1["NK1.14"] = this.parseNK1_14(fields[14]);

      case 14:
        parsedNK1["NK1.13"] = this.parseNK1_13(fields[13]);

      case 13:
        parsedNK1["NK1.12"] = this.parseNK1_12(fields[12]);

      case 12:
        parsedNK1["NK1.11"] = this.parseNK1_11(fields[11]);

      case 11:
        parsedNK1["NK1.10"] = this.parseNK1_10(fields[10]);

      case 10:
        parsedNK1["NK1.9"] = this.parseNK1_9(fields[9]);

      case 9:
        parsedNK1["NK1.8"] = this.parseNK1_8(fields[8]);

      case 8:
        parsedNK1["NK1.7"] = this.parseNK1_7(fields[7]);

      case 7:
        parsedNK1["NK1.6"] = this.parseNK1_6(fields[6]);

      case 6:
        parsedNK1["NK1.5"] = this.parseNK1_5(fields[5]);

      case 5:
        parsedNK1["NK1.4"] = this.parseNK1_4(fields[4]);

      case 4:
        parsedNK1["NK1.3"] = this.parseNK1_3(fields[3]);

      case 3:
        parsedNK1["NK1.2"] = this.parseNK1_2(fields[2]);

      case 2:
        parsedNK1["NK1.1"] = this.parseNK1_1(fields[1]);
    }

    return parsedNK1;
  }

  parseNK1_1(siValue) {
    return this.parseTypeSI(siValue, "NK1.1");
  }

  parseNK1_2(xpnValue) {
    return this.parseTypeXPN(xpnValue, "NK1.2");
  }

  parseNK1_3(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.3");
  }

  parseNK1_4(xadValue) {
    return this.parseTypeXAD(xadValue, "NK1.4");
  }

  parseNK1_5(xtnValue) {
    return this.parseTypeXTN(xtnValue, "NK1.5");
  }

  parseNK1_6(xtnValue) {
    return this.parseTypeXTN(xtnValue, "NK1.6");
  }

  parseNK1_7(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.7");
  }

  parseNK1_8(dtValue) {
    return this.parseTypeDT(dtValue, "NK1.8");
  }

  parseNK1_9(dtValue) {
    return this.parseTypeDT(dtValue, "NK1.9");
  }

  parseNK1_10(stValue) {
    return this.parseTypeST(stValue, "NK1.10");
  }

  parseNK1_11(jccValue) {
    return this.parseTypeJCC(jccValue, "NK1.11");
  }

  parseNK1_12(cxValue) {
    return this.parseTypeCX(cxValue, "NK1.12");
  }

  parseNK1_13(xonValue) {
    return this.parseTypeXON(xonValue, "NK1.13");
  }

  parseNK1_14(isValue) {
    return this.parseTypeIS(isValue, "NK1.14");
  }

  parseNK1_15(isValue) {
    return this.parseTypeIS(isValue, "NK1.15");
  }

  parseNK1_16(tsValue) {
    return this.parseTypeTS(tsValue, "NK1.16");
  }

  parseNK1_17(isValue) {
    return this.parseTypeIS(isValue, "NK1.17");
  }

  parseNK1_18(isValue) {
    return this.parseTypeIS(isValue, "NK1.18");
  }

  parseNK1_19(isValue) {
    return this.parseTypeIS(isValue, "NK1.19");
  }

  parseNK1_20(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.20");
  }

  parseNK1_21(isValue) {
    return this.parseTypeIS(isValue, "NK1.21");
  }

  parseNK1_22(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.22");
  }

  parseNK1_23(idValue) {
    return this.parseTypeID(idValue, "NK1.23");
  }

  parseNK1_24(isValue) {
    return this.parseTypeIS(isValue, "NK1.24");
  }

  parseNK1_25(isValue) {
    return this.parseTypeIS(isValue, "NK1.25");
  }

  parseNK1_26(xpnValue) {
    return this.parseTypeXPN(xpnValue, "NK1.26");
  }

  parseNK1_27(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.27");
  }

  parseNK1_28(isValue) {
    return this.parseTypeIS(isValue, "NK1.28");
  }

  parseNK1_29(ceValue) {
    return this.parseTypeCE(ceValue, "NK1.29");
  }

  parseNK1_30(xpnValue) {
    return this.parseTypeXPN(xpnValue, "NK1.30");
  }

  parseNK1_31(xtnValue) {
    return this.parseTypeXTN(xtnValue, "NK1.31");
  }

  parseNK1_32(xadValue) {
    return this.parseTypeXAD(xadValue, "NK1.32");
  }

  parseNK1_33(cxValue) {
    return this.parseTypeCX(cxValue, "NK1.33");
  }

  parseNK1_34(isValue) {
    return this.parseTypeIS(isValue, "NK1.34");
  }

  parseNK1_35(isValue) {
    return this.parseTypeIS(isValue, "NK1.35");
  }

  parseNK1_36(isValue) {
    return this.parseTypeIS(isValue, "NK1.36");
  }

  parseNK1_37(stValue) {
    return this.parseTypeST(stValue, "NK1.37");
  }
}

module.exports = NextOfKinParser;
