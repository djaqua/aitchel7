const TypeParser = require("./TypeParser");

class Insurance1Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedIN1 = {};

    switch (fields.length) {
      case 50:
        parsedIN1["IN1.49"] = this.parseIN1_49(fields[49]);

      case 49:
        parsedIN1["IN1.48"] = this.parseIN1_48(fields[48]);

      case 48:
        parsedIN1["IN1.47"] = this.parseIN1_47(fields[47]);

      case 47:
        parsedIN1["IN1.46"] = this.parseIN1_46(fields[46]);

      case 46:
        parsedIN1["IN1.45"] = this.parseIN1_45(fields[45]);

      case 45:
        parsedIN1["IN1.44"] = this.parseIN1_44(fields[44]);

      case 44:
        parsedIN1["IN1.43"] = this.parseIN1_43(fields[43]);

      case 43:
        parsedIN1["IN1.42"] = this.parseIN1_42(fields[42]);

      case 42:
        parsedIN1["IN1.41"] = this.parseIN1_41(fields[41]);

      case 41:
        parsedIN1["IN1.40"] = this.parseIN1_40(fields[40]);

      case 40:
        parsedIN1["IN1.39"] = this.parseIN1_39(fields[39]);

      case 39:
        parsedIN1["IN1.38"] = this.parseIN1_38(fields[38]);

      case 38:
        parsedIN1["IN1.37"] = this.parseIN1_37(fields[37]);

      case 37:
        parsedIN1["IN1.36"] = this.parseIN1_36(fields[36]);

      case 36:
        parsedIN1["IN1.35"] = this.parseIN1_35(fields[35]);

      case 35:
        parsedIN1["IN1.34"] = this.parseIN1_34(fields[34]);

      case 34:
        parsedIN1["IN1.33"] = this.parseIN1_33(fields[33]);

      case 33:
        parsedIN1["IN1.32"] = this.parseIN1_32(fields[32]);

      case 32:
        parsedIN1["IN1.31"] = this.parseIN1_31(fields[31]);

      case 31:
        parsedIN1["IN1.30"] = this.parseIN1_30(fields[30]);

      case 30:
        parsedIN1["IN1.29"] = this.parseIN1_29(fields[29]);

      case 29:
        parsedIN1["IN1.28"] = this.parseIN1_28(fields[28]);

      case 28:
        parsedIN1["IN1.27"] = this.parseIN1_27(fields[27]);

      case 27:
        parsedIN1["IN1.26"] = this.parseIN1_26(fields[26]);

      case 26:
        parsedIN1["IN1.25"] = this.parseIN1_25(fields[25]);

      case 25:
        parsedIN1["IN1.24"] = this.parseIN1_24(fields[24]);

      case 24:
        parsedIN1["IN1.23"] = this.parseIN1_23(fields[23]);

      case 23:
        parsedIN1["IN1.22"] = this.parseIN1_22(fields[22]);

      case 22:
        parsedIN1["IN1.21"] = this.parseIN1_21(fields[21]);

      case 21:
        parsedIN1["IN1.20"] = this.parseIN1_20(fields[20]);

      case 20:
        parsedIN1["IN1.19"] = this.parseIN1_19(fields[19]);

      case 19:
        parsedIN1["IN1.18"] = this.parseIN1_18(fields[18]);

      case 18:
        parsedIN1["IN1.17"] = this.parseIN1_17(fields[17]);

      case 17:
        parsedIN1["IN1.16"] = this.parseIN1_16(fields[16]);

      case 16:
        parsedIN1["IN1.15"] = this.parseIN1_15(fields[15]);

      case 15:
        parsedIN1["IN1.14"] = this.parseIN1_14(fields[14]);

      case 14:
        parsedIN1["IN1.13"] = this.parseIN1_13(fields[13]);

      case 13:
        parsedIN1["IN1.12"] = this.parseIN1_12(fields[12]);

      case 12:
        parsedIN1["IN1.11"] = this.parseIN1_11(fields[11]);

      case 11:
        parsedIN1["IN1.10"] = this.parseIN1_10(fields[10]);

      case 10:
        parsedIN1["IN1.9"] = this.parseIN1_9(fields[9]);

      case 9:
        parsedIN1["IN1.8"] = this.parseIN1_8(fields[8]);

      case 8:
        parsedIN1["IN1.7"] = this.parseIN1_7(fields[7]);

      case 7:
        parsedIN1["IN1.6"] = this.parseIN1_6(fields[6]);

      case 6:
        parsedIN1["IN1.5"] = this.parseIN1_5(fields[5]);

      case 5:
        parsedIN1["IN1.4"] = this.parseIN1_4(fields[4]);

      case 4:
        parsedIN1["IN1.3"] = this.parseIN1_3(fields[3]);

      case 3:
        parsedIN1["IN1.2"] = this.parseIN1_2(fields[2]);

      case 2:
        parsedIN1["IN1.1"] = this.parseIN1_1(fields[1]);
    }

    return parsedIN1;
  }

  parseIN1_1(siValue) {
    return this.parseTypeSI(siValue, "IN1.1");
  }

  parseIN1_2(ceValue) {
    return this.parseTypeCE(ceValue, "IN1.2");
  }

  parseIN1_3CparseTypeCX(cxValue) {
    return this.parseTypeCX(cxValue, "IN1.3");
  }

  parseIN1_4(xonValue) {
    return this.parseTypeXON(xonValue, "IN1.4");
  }

  parseIN1_5(xadValue) {
    return this.parseTypeXAD(xadValue, "IN1.5");
  }

  parseIN1_6(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN1.6");
  }

  parseIN1_7(xtnValue) {
    return this.parseTypeXTN(xtnValue, "IN1.7");
  }

  parseIN1_8(stValue) {
    return this.parseTypeST(stValue, "IN1.8");
  }

  parseIN1_9(xonValue) {
    return this.parseTypeXON(xonValue, "IN1.9");
  }

  parseIN1_10CparseTypeCX(cxValue) {
    return this.parseTypeCX(cxValue, "IN1.10");
  }

  parseIN1_11(xonValue) {
    return this.parseTypeXON(xonValue, "IN1.11");
  }

  parseIN1_12(dtValue) {
    return this.parseTypeDT(dtValue, "IN1.12");
  }

  parseIN1_13(dtValue) {
    return this.parseTypeDT(dtValue, "IN1.13");
  }

  parseIN1_14(cm_auiValue) {
    return this.parseTypeCM_AUI(cm_auiValue, "IN1.14");
  }

  parseIN1_15(isValue) {
    return this.parseTypeIS(isValue, "IN1.15");
  }

  parseIN1_16(xpnValue) {
    return this.parseTypeXPN(xpnValue, "IN1.16");
  }

  parseIN1_17(isValue) {
    return this.parseTypeIS(isValue, "IN1.17");
  }

  parseIN1_18(tsValue) {
    return this.parseTypeTS(tsValue, "IN1.18");
  }

  parseIN1_19(xadValue) {
    return this.parseTypeXAD(xadValue, "IN1.19");
  }

  parseIN1_20(isValue) {
    return this.parseTypeIS(isValue, "IN1.20");
  }

  parseIN1_21(isValue) {
    return this.parseTypeIS(isValue, "IN1.21");
  }

  parseIN1_22(stValue) {
    return this.parseTypeST(stValue, "IN1.22");
  }

  parseIN1_23(idValue) {
    return this.parseTypeID(idValue, "IN1.23");
  }

  parseIN1_24(dtValue) {
    return this.parseTypeDT(dtValue, "IN1.24");
  }

  parseIN1_25(idValue) {
    return this.parseTypeID(idValue, "IN1.25");
  }

  parseIN1_26(dtValue) {
    return this.parseTypeDT(dtValue, "IN1.26");
  }

  parseIN1_27(isValue) {
    return this.parseTypeIS(isValue, "IN1.27");
  }

  parseIN1_28(stValue) {
    return this.parseTypeST(stValue, "IN1.28");
  }

  parseIN1_29(tsValue) {
    return this.parseTypeTS(tsValue, "IN1.29");
  }

  parseIN1_30(xcnValue) {
    return this.parseTypeXCN(xcnValue, "IN1.30");
  }

  parseIN1_31(isValue) {
    return this.parseTypeIS(isValue, "IN1.31");
  }

  parseIN1_32(isValue) {
    return this.parseTypeIS(isValue, "IN1.32");
  }

  parseIN1_33(nmValue) {
    return this.parseTypeNM(nmValue, "IN1.33");
  }

  parseIN1_34(nmValue) {
    return this.parseTypeNM(nmValue, "IN1.34");
  }

  parseIN1_35(isValue) {
    return this.parseTypeIS(isValue, "IN1.35");
  }

  parseIN1_36(stValue) {
    return this.parseTypeST(stValue, "IN1.36");
  }

  parseIN1_37(cpValue) {
    return this.parseTypeCP(cpValue, "IN1.37");
  }

  parseIN1_38(cpValue) {
    return this.parseTypeCP(cpValue, "IN1.38");
  }

  parseIN1_39(nmValue) {
    return this.parseTypeNM(nmValue, "IN1.39");
  }

  parseIN1_40(cpValue) {
    return this.parseTypeCP(cpValue, "IN1.40");
  }

  parseIN1_41(cpValue) {
    return this.parseTypeCP(cpValue, "IN1.41");
  }

  parseIN1_42(ceValue) {
    return this.parseTypeCE(ceValue, "IN1.42");
  }

  parseIN1_43(isValue) {
    return this.parseTypeIS(isValue, "IN1.43");
  }

  parseIN1_44(xadValue) {
    return this.parseTypeXAD(xadValue, "IN1.44");
  }

  parseIN1_45(stValue) {
    return this.parseTypeST(stValue, "IN1.45");
  }

  parseIN1_46(isValue) {
    return this.parseTypeIS(isValue, "IN1.46");
  }

  parseIN1_47(isValue) {
    return this.parseTypeIS(isValue, "IN1.47");
  }

  parseIN1_48(isValue) {
    return this.parseTypeIS(isValue, "IN1.48");
  }

  parseIN1_49CparseTypeCX(cxValue) {
    return this.parseTypeCX(cxValue, "IN1.49");
  }
}

module.exports = Insurance1Parser;
