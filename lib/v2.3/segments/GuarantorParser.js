const TypeParser = require("./TypeParser");

class GuarantorParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedGT1 = {};

    switch (fields.length) {
      case 56:
        parsedGT1["GT1.55"] = this.parseGT1_55(fields[55]);

      case 55:
        parsedGT1["GT1.54"] = this.parseGT1_54(fields[54]);

      case 54:
        parsedGT1["GT1.53"] = this.parseGT1_53(fields[53]);

      case 53:
        parsedGT1["GT1.52"] = this.parseGT1_52(fields[52]);

      case 52:
        parsedGT1["GT1.51"] = this.parseGT1_51(fields[51]);

      case 51:
        parsedGT1["GT1.50"] = this.parseGT1_50(fields[50]);

      case 50:
        parsedGT1["GT1.49"] = this.parseGT1_49(fields[49]);

      case 49:
        parsedGT1["GT1.48"] = this.parseGT1_48(fields[48]);

      case 48:
        parsedGT1["GT1.47"] = this.parseGT1_47(fields[47]);

      case 47:
        parsedGT1["GT1.46"] = this.parseGT1_46(fields[46]);

      case 46:
        parsedGT1["GT1.45"] = this.parseGT1_45(fields[45]);

      case 45:
        parsedGT1["GT1.44"] = this.parseGT1_44(fields[44]);

      case 44:
        parsedGT1["GT1.43"] = this.parseGT1_43(fields[43]);

      case 43:
        parsedGT1["GT1.42"] = this.parseGT1_42(fields[42]);

      case 42:
        parsedGT1["GT1.41"] = this.parseGT1_41(fields[41]);

      case 41:
        parsedGT1["GT1.40"] = this.parseGT1_40(fields[40]);

      case 40:
        parsedGT1["GT1.39"] = this.parseGT1_39(fields[39]);

      case 39:
        parsedGT1["GT1.38"] = this.parseGT1_38(fields[38]);

      case 38:
        parsedGT1["GT1.37"] = this.parseGT1_37(fields[37]);

      case 37:
        parsedGT1["GT1.36"] = this.parseGT1_36(fields[36]);

      case 36:
        parsedGT1["GT1.35"] = this.parseGT1_35(fields[35]);

      case 35:
        parsedGT1["GT1.34"] = this.parseGT1_34(fields[34]);

      case 34:
        parsedGT1["GT1.33"] = this.parseGT1_33(fields[33]);

      case 33:
        parsedGT1["GT1.32"] = this.parseGT1_32(fields[32]);

      case 32:
        parsedGT1["GT1.31"] = this.parseGT1_31(fields[31]);

      case 31:
        parsedGT1["GT1.30"] = this.parseGT1_30(fields[30]);

      case 30:
        parsedGT1["GT1.29"] = this.parseGT1_29(fields[29]);

      case 29:
        parsedGT1["GT1.28"] = this.parseGT1_28(fields[28]);

      case 28:
        parsedGT1["GT1.27"] = this.parseGT1_27(fields[27]);

      case 27:
        parsedGT1["GT1.26"] = this.parseGT1_26(fields[26]);

      case 26:
        parsedGT1["GT1.25"] = this.parseGT1_25(fields[25]);

      case 25:
        parsedGT1["GT1.24"] = this.parseGT1_24(fields[24]);

      case 24:
        parsedGT1["GT1.23"] = this.parseGT1_23(fields[23]);

      case 23:
        parsedGT1["GT1.22"] = this.parseGT1_22(fields[22]);

      case 22:
        parsedGT1["GT1.21"] = this.parseGT1_21(fields[21]);

      case 21:
        parsedGT1["GT1.20"] = this.parseGT1_20(fields[20]);

      case 20:
        parsedGT1["GT1.19"] = this.parseGT1_19(fields[19]);

      case 19:
        parsedGT1["GT1.18"] = this.parseGT1_18(fields[18]);

      case 18:
        parsedGT1["GT1.17"] = this.parseGT1_17(fields[17]);

      case 17:
        parsedGT1["GT1.16"] = this.parseGT1_16(fields[16]);

      case 16:
        parsedGT1["GT1.15"] = this.parseGT1_15(fields[15]);

      case 15:
        parsedGT1["GT1.14"] = this.parseGT1_14(fields[14]);

      case 14:
        parsedGT1["GT1.13"] = this.parseGT1_13(fields[13]);

      case 13:
        parsedGT1["GT1.12"] = this.parseGT1_12(fields[12]);

      case 12:
        parsedGT1["GT1.11"] = this.parseGT1_11(fields[11]);

      case 11:
        parsedGT1["GT1.10"] = this.parseGT1_10(fields[10]);

      case 10:
        parsedGT1["GT1.9"] = this.parseGT1_9(fields[9]);

      case 9:
        parsedGT1["GT1.8"] = this.parseGT1_8(fields[8]);

      case 8:
        parsedGT1["GT1.7"] = this.parseGT1_7(fields[7]);

      case 7:
        parsedGT1["GT1.6"] = this.parseGT1_6(fields[6]);

      case 6:
        parsedGT1["GT1.5"] = this.parseGT1_5(fields[5]);

      case 5:
        parsedGT1["GT1.4"] = this.parseGT1_4(fields[4]);

      case 4:
        parsedGT1["GT1.3"] = this.parseGT1_3(fields[3]);

      case 3:
        parsedGT1["GT1.2"] = this.parseGT1_2(fields[2]);

      case 2:
        parsedGT1["GT1.1"] = this.parseGT1_1(fields[1]);
    }

    return parsedGT1;
  }

  parseGT1_1(siValue) {
    return this.parseTypeSI(siValue, "GT1.1");
  }

  parseGT1_2(cxValue) {
    return this.parseTypeCX(cxValue, "GT1.2");
  }

  parseGT1_3(xpnValue) {
    return this.parseTypeXPN(xpnValue, "GT1.3");
  }

  parseGT1_4(xpnValue) {
    return this.parseTypeXPN(xpnValue, "GT1.4");
  }

  parseGT1_5(xadValue) {
    return this.parseTypeXAD(xadValue, "GT1.5");
  }

  parseGT1_6(xtnValue) {
    return this.parseTypeXTN(xtnValue, "GT1.6");
  }

  parseGT1_7(xtnValue) {
    return this.parseTypeXTN(xtnValue, "GT1.7");
  }

  parseGT1_8(tsValue) {
    return this.parseTypeTS(tsValue, "GT1.8");
  }

  parseGT1_9(isValue) {
    return this.parseTypeIS(isValue, "GT1.9");
  }

  parseGT1_10(isValue) {
    return this.parseTypeIS(isValue, "GT1.10");
  }

  parseGT1_11(isValue) {
    return this.parseTypeIS(isValue, "GT1.11");
  }

  parseGT1_12(stValue) {
    return this.parseTypeST(stValue, "GT1.12");
  }

  parseGT1_13(dtValue) {
    return this.parseTypeDT(dtValue, "GT1.13");
  }

  parseGT1_14(dtValue) {
    return this.parseTypeDT(dtValue, "GT1.14");
  }

  parseGT1_15(nmValue) {
    return this.parseTypeNM(nmValue, "GT1.15");
  }

  parseGT1_16(xpnValue) {
    return this.parseTypeXPN(xpnValue, "GT1.16");
  }

  parseGT1_17(xadValue) {
    return this.parseTypeXAD(xadValue, "GT1.17");
  }

  parseGT1_18(xtnValue) {
    return this.parseTypeXTN(xtnValue, "GT1.18");
  }

  parseGT1_19(cxValue) {
    return this.parseTypeCX(cxValue, "GT1.19");
  }

  parseGT1_20(isValue) {
    return this.parseTypeIS(isValue, "GT1.20");
  }

  parseGT1_21(xonValue) {
    return this.parseTypeXON(xonValue, "GT1.21");
  }

  parseGT1_22(idValue) {
    return this.parseTypeID(idValue, "GT1.22");
  }

  parseGT1_23(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.23");
  }

  parseGT1_24(tsValue) {
    return this.parseTypeTS(tsValue, "GT1.24");
  }

  parseGT1_25(idValue) {
    return this.parseTypeID(idValue, "GT1.25");
  }

  parseGT1_26(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.26");
  }

  parseGT1_27(cpValue) {
    return this.parseTypeCP(cpValue, "GT1.27");
  }

  parseGT1_28(nmValue) {
    return this.parseTypeNM(nmValue, "GT1.28");
  }

  parseGT1_29(cxValue) {
    return this.parseTypeCX(cxValue, "GT1.29");
  }

  parseGT1_30(isValue) {
    return this.parseTypeIS(isValue, "GT1.30");
  }

  parseGT1_31(dtValue) {
    return this.parseTypeDT(dtValue, "GT1.31");
  }

  parseGT1_32(dtValue) {
    return this.parseTypeDT(dtValue, "GT1.32");
  }

  parseGT1_33(isValue) {
    return this.parseTypeIS(isValue, "GT1.33");
  }

  parseGT1_34(isValue) {
    return this.parseTypeIS(isValue, "GT1.34");
  }

  parseGT1_35(isValue) {
    return this.parseTypeIS(isValue, "GT1.35");
  }

  parseGT1_36(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.36");
  }

  parseGT1_37(isValue) {
    return this.parseTypeIS(isValue, "GT1.37");
  }

  parseGT1_38(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.38");
  }

  parseGT1_39(idValue) {
    return this.parseTypeID(idValue, "GT1.39");
  }

  parseGT1_40(isValue) {
    return this.parseTypeIS(isValue, "GT1.40");
  }

  parseGT1_41(isValue) {
    return this.parseTypeIS(isValue, "GT1.41");
  }

  parseGT1_42(xpnValue) {
    return this.parseTypeXPN(xpnValue, "GT1.42");
  }

  parseGT1_43(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.43");
  }

  parseGT1_44(isValue) {
    return this.parseTypeIS(isValue, "GT1.44");
  }

  parseGT1_45(xpnValue) {
    return this.parseTypeXPN(xpnValue, "GT1.45");
  }

  parseGT1_46(xtnValue) {
    return this.parseTypeXTN(xtnValue, "GT1.46");
  }

  parseGT1_47(ceValue) {
    return this.parseTypeCE(ceValue, "GT1.47");
  }

  parseGT1_48(isValue) {
    return this.parseTypeIS(isValue, "GT1.48");
  }

  parseGT1_49(stValue) {
    return this.parseTypeST(stValue, "GT1.49");
  }

  parseGT1_50(jccValue) {
    return this.parseTypeJCC(jccValue, "GT1.50");
  }

  parseGT1_51(xonValue) {
    return this.parseTypeXON(xonValue, "GT1.51");
  }

  parseGT1_52(isValue) {
    return this.parseTypeIS(isValue, "GT1.52");
  }

  parseGT1_53(isValue) {
    return this.parseTypeIS(isValue, "GT1.53");
  }

  parseGT1_54(fcValue) {
    return this.parseTypeFC(fcValue, "GT1.54");
  }

  parseGT1_55(isValue) {
    return this.parseTypeIS(isValue, "GT1.55");
  }
}

module.exports = GuarantorParser;
