const TypeParser = require("./TypeParser");

class Insurance2Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedIN2 = {};

    switch (fields.length) {
      case 73:
        parsedIN2["IN2.72"] = this.parseIN2_72(fields[72]);

      case 72:
        parsedIN2["IN2.71"] = this.parseIN2_71(fields[71]);

      case 71:
        parsedIN2["IN2.70"] = this.parseIN2_70(fields[70]);

      case 70:
        parsedIN2["IN2.69"] = this.parseIN2_69(fields[69]);

      case 69:
        parsedIN2["IN2.68"] = this.parseIN2_68(fields[68]);

      case 68:
        parsedIN2["IN2.67"] = this.parseIN2_67(fields[67]);

      case 67:
        parsedIN2["IN2.66"] = this.parseIN2_66(fields[66]);

      case 66:
        parsedIN2["IN2.65"] = this.parseIN2_65(fields[65]);

      case 65:
        parsedIN2["IN2.64"] = this.parseIN2_64(fields[64]);

      case 64:
        parsedIN2["IN2.63"] = this.parseIN2_63(fields[63]);

      case 63:
        parsedIN2["IN2.62"] = this.parseIN2_62(fields[62]);

      case 62:
        parsedIN2["IN2.61"] = this.parseIN2_61(fields[61]);

      case 61:
        parsedIN2["IN2.60"] = this.parseIN2_60(fields[60]);

      case 60:
        parsedIN2["IN2.59"] = this.parseIN2_59(fields[59]);

      case 59:
        parsedIN2["IN2.58"] = this.parseIN2_58(fields[58]);

      case 58:
        parsedIN2["IN2.57"] = this.parseIN2_57(fields[57]);

      case 57:
        parsedIN2["IN2.56"] = this.parseIN2_56(fields[56]);

      case 56:
        parsedIN2["IN2.55"] = this.parseIN2_55(fields[55]);

      case 55:
        parsedIN2["IN2.54"] = this.parseIN2_54(fields[54]);

      case 54:
        parsedIN2["IN2.53"] = this.parseIN2_53(fields[53]);

      case 53:
        parsedIN2["IN2.52"] = this.parseIN2_52(fields[52]);

      case 52:
        parsedIN2["IN2.51"] = this.parseIN2_51(fields[51]);

      case 51:
        parsedIN2["IN2.50"] = this.parseIN2_50(fields[50]);

      case 50:
        parsedIN2["IN2.49"] = this.parseIN2_49(fields[49]);

      case 49:
        parsedIN2["IN2.48"] = this.parseIN2_48(fields[48]);

      case 48:
        parsedIN2["IN2.47"] = this.parseIN2_47(fields[47]);

      case 47:
        parsedIN2["IN2.46"] = this.parseIN2_46(fields[46]);

      case 46:
        parsedIN2["IN2.45"] = this.parseIN2_45(fields[45]);

      case 45:
        parsedIN2["IN2.44"] = this.parseIN2_44(fields[44]);

      case 44:
        parsedIN2["IN2.43"] = this.parseIN2_43(fields[43]);

      case 43:
        parsedIN2["IN2.42"] = this.parseIN2_42(fields[42]);

      case 42:
        parsedIN2["IN2.41"] = this.parseIN2_41(fields[41]);

      case 41:
        parsedIN2["IN2.40"] = this.parseIN2_40(fields[40]);

      case 40:
        parsedIN2["IN2.39"] = this.parseIN2_39(fields[39]);

      case 39:
        parsedIN2["IN2.38"] = this.parseIN2_38(fields[38]);

      case 38:
        parsedIN2["IN2.37"] = this.parseIN2_37(fields[37]);

      case 37:
        parsedIN2["IN2.36"] = this.parseIN2_36(fields[36]);

      case 36:
        parsedIN2["IN2.35"] = this.parseIN2_35(fields[35]);

      case 35:
        parsedIN2["IN2.34"] = this.parseIN2_34(fields[34]);

      case 34:
        parsedIN2["IN2.33"] = this.parseIN2_33(fields[33]);

      case 33:
        parsedIN2["IN2.32"] = this.parseIN2_32(fields[32]);

      case 32:
        parsedIN2["IN2.31"] = this.parseIN2_31(fields[31]);

      case 31:
        parsedIN2["IN2.30"] = this.parseIN2_30(fields[30]);

      case 30:
        parsedIN2["IN2.29"] = this.parseIN2_29(fields[29]);

      case 29:
        parsedIN2["IN2.28"] = this.parseIN2_28(fields[28]);

      case 28:
        parsedIN2["IN2.27"] = this.parseIN2_27(fields[27]);

      case 27:
        parsedIN2["IN2.26"] = this.parseIN2_26(fields[26]);

      case 26:
        parsedIN2["IN2.25"] = this.parseIN2_25(fields[25]);

      case 25:
        parsedIN2["IN2.24"] = this.parseIN2_24(fields[24]);

      case 24:
        parsedIN2["IN2.23"] = this.parseIN2_23(fields[23]);

      case 23:
        parsedIN2["IN2.22"] = this.parseIN2_22(fields[22]);

      case 22:
        parsedIN2["IN2.21"] = this.parseIN2_21(fields[21]);

      case 21:
        parsedIN2["IN2.20"] = this.parseIN2_20(fields[20]);

      case 20:
        parsedIN2["IN2.19"] = this.parseIN2_19(fields[19]);

      case 19:
        parsedIN2["IN2.18"] = this.parseIN2_18(fields[18]);

      case 18:
        parsedIN2["IN2.17"] = this.parseIN2_17(fields[17]);

      case 17:
        parsedIN2["IN2.16"] = this.parseIN2_16(fields[16]);

      case 16:
        parsedIN2["IN2.15"] = this.parseIN2_15(fields[15]);

      case 15:
        parsedIN2["IN2.14"] = this.parseIN2_14(fields[14]);

      case 14:
        parsedIN2["IN2.13"] = this.parseIN2_13(fields[13]);

      case 13:
        parsedIN2["IN2.12"] = this.parseIN2_12(fields[12]);

      case 12:
        parsedIN2["IN2.11"] = this.parseIN2_11(fields[11]);

      case 11:
        parsedIN2["IN2.10"] = this.parseIN2_10(fields[10]);

      case 10:
        parsedIN2["IN2.9"] = this.parseIN2_9(fields[9]);

      case 9:
        parsedIN2["IN2.8"] = this.parseIN2_8(fields[8]);

      case 8:
        parsedIN2["IN2.7"] = this.parseIN2_7(fields[7]);

      case 7:
        parsedIN2["IN2.6"] = this.parseIN2_6(fields[6]);

      case 6:
        parsedIN2["IN2.5"] = this.parseIN2_5(fields[5]);

      case 5:
        parsedIN2["IN2.4"] = this.parseIN2_4(fields[4]);

      case 4:
        parsedIN2["IN2.3"] = this.parseIN2_3(fields[3]);

      case 3:
        parsedIN2["IN2.2"] = this.parseIN2_2(fields[2]);

      case 2:
        parsedIN2["IN2.1"] = this.parseIN2_1(fields[1]);
    }

    return parsedIN2;
  }

  parseIN2_1(cxValue) {
    return this.parseTypeCX(cxValue, "IN2.1");
  }

  parseIN2_2(stValue) {
    return this.parseTypeST(stValue, "IN2.2");
  }

  parseIN2_3(xcnValue) {
    return this.parseTypeXCN(xcnValue, "IN2.3");
  }

  parseIN2_4(isValue) {
    return this.parseTypeIS(isValue, "IN2.4");
  }

  parseIN2_5(isValue) {
    return this.parseTypeIS(isValue, "IN2.5");
  }

  parseIN2_6(stValue) {
    return this.parseTypeST(stValue, "IN2.6");
  }

  parseIN2_7(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.7");
  }

  parseIN2_8(stValue) {
    return this.parseTypeST(stValue, "IN2.8");
  }

  parseIN2_9(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.9");
  }

  parseIN2_10(stValue) {
    return this.parseTypeST(stValue, "IN2.10");
  }

  parseIN2_11(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.11");
  }

  parseIN2_12(stValue) {
    return this.parseTypeST(stValue, "IN2.12");
  }

  parseIN2_13(stValue) {
    return this.parseTypeST(stValue, "IN2.13");
  }

  parseIN2_14(isValue) {
    return this.parseTypeIS(isValue, "IN2.14");
  }

  parseIN2_15(isValue) {
    return this.parseTypeIS(isValue, "IN2.15");
  }

  parseIN2_16(isValue) {
    return this.parseTypeIS(isValue, "IN2.16");
  }

  parseIN2_17(dtValue) {
    return this.parseTypeDT(dtValue, "IN2.17");
  }

  parseIN2_18(idValue) {
    return this.parseTypeID(idValue, "IN2.18");
  }

  parseIN2_19(idValue) {
    return this.parseTypeID(idValue, "IN2.19");
  }

  parseIN2_20(idValue) {
    return this.parseTypeID(idValue, "IN2.20");
  }

  parseIN2_21(stValue) {
    return this.parseTypeST(stValue, "IN2.21");
  }

  parseIN2_22(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.22");
  }

  parseIN2_23(stValue) {
    return this.parseTypeST(stValue, "IN2.23");
  }

  parseIN2_24(isValue) {
    return this.parseTypeIS(isValue, "IN2.24");
  }

  parseIN2_25(cxValue) {
    return this.parseTypeCX(cxValue, "IN2.25");
  }

  parseIN2_26(cxValue) {
    return this.parseTypeCX(cxValue, "IN2.26");
  }

  parseIN2_27(isValue) {
    return this.parseTypeIS(isValue, "IN2.27");
  }

  parseIN2_28(cm_rmcValue) {
    return this.parseTypeCM_RMC(cm_rmcValue, "IN2.28");
  }

  parseIN2_29(cm_ptaValue) {
    return this.parseTypeCM_PTA(cm_ptaValue, "IN2.29");
  }

  parseIN2_30(cm_ddiValue) {
    return this.parseTypeCM_DDI(cm_ddiValue, "IN2.30");
  }

  parseIN2_31(isValue) {
    return this.parseTypeIS(isValue, "IN2.31");
  }

  parseIN2_32(isValue) {
    return this.parseTypeIS(isValue, "IN2.32");
  }

  parseIN2_33(isValue) {
    return this.parseTypeIS(isValue, "IN2.33");
  }

  parseIN2_34(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.34");
  }

  parseIN2_35(isValue) {
    return this.parseTypeIS(isValue, "IN2.35");
  }

  parseIN2_36(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.36");
  }

  parseIN2_37(idValue) {
    return this.parseTypeID(idValue, "IN2.37");
  }

  parseIN2_38(isValue) {
    return this.parseTypeIS(isValue, "IN2.38");
  }

  parseIN2_39(isValue) {
    return this.parseTypeIS(isValue, "IN2.39");
  }

  parseIN2_40(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.40");
  }

  parseIN2_41(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.41");
  }

  parseIN2_42(isValue) {
    return this.parseTypeIS(isValue, "IN2.42");
  }

  parseIN2_43(isValue) {
    return this.parseTypeIS(isValue, "IN2.43");
  }

  parseIN2_44(dtValue) {
    return this.parseTypeDT(dtValue, "IN2.44");
  }

  parseIN2_45(dtValue) {
    return this.parseTypeDT(dtValue, "IN2.45");
  }

  parseIN2_46(stValue) {
    return this.parseTypeST(stValue, "IN2.46");
  }

  parseIN2_47(jccValue) {
    return this.parseTypeJCC(jccValue, "IN2.47");
  }

  parseIN2_48(isValue) {
    return this.parseTypeIS(isValue, "IN2.48");
  }

  parseIN2_49(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.49");
  }

  parseIN2_50(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN2.50");
  }

  parseIN2_51(isValue) {
    return this.parseTypeIS(isValue, "IN2.51");
  }

  parseIN2_52(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN2.52");
  }

  parseIN2_53(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN2.53");
  }

  parseIN2_54(isValue) {
    return this.parseTypeIS(isValue, "IN2.54");
  }

  parseIN2_55(dtValue) {
    return this.parseTypeDT(dtValue, "IN2.55");
  }

  parseIN2_56(dtValue) {
    return this.parseTypeDT(dtValue, "IN2.56");
  }

  parseIN2_57(isValue) {
    return this.parseTypeIS(isValue, "IN2.57");
  }

  parseIN2_58(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN2.58");
  }

  parseIN2_59(isValue) {
    return this.parseTypeIS(isValue, "IN2.59");
  }

  parseIN2_60(isValue) {
    return this.parseTypeIS(isValue, "IN2.60");
  }

  parseIN2_61(cxValue) {
    return this.parseTypeCX(cxValue, "IN2.61");
  }

  parseIN2_62(isValue) {
    return this.parseTypeIS(isValue, "IN2.62");
  }

  parseIN2_63(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN2.63");
  }

  parseIN2_64(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN2.64");
  }

  parseIN2_65(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.65");
  }

  parseIN2_66(idValue) {
    return this.parseTypeID(idValue, "IN2.66");
  }

  parseIN2_67(idValue) {
    return this.parseTypeID(idValue, "IN2.67");
  }

  parseIN2_68(idValue) {
    return this.parseTypeID(idValue, "IN2.68");
  }

  parseIN2_69(xonValue) {
    return this.parseType(xonValue, "IN2.69");
  }

  parseIN2_70(xonValue) {
    return this.parseType(xonValue, "IN2.70");
  }

  parseIN2_71(isValue) {
    return this.parseTypeIS(isValue, "IN2.71");
  }

  parseIN2_72(ceValue) {
    return this.parseTypeCE(ceValue, "IN2.72");
  }
}

module.exports = Insurance2Parser;
