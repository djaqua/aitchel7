const TypeParser = require("./TypeParser");

class PatientVisitParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedPV1 = {};

    switch (fields.length) {
      case 53:
        parsedPV1["PV1.52"] = this.parsePV1_50(fields[52]);

      case 52:
        parsedPV1["PV1.51"] = this.parsePV1_50(fields[51]);

      case 51:
        parsedPV1["PV1.50"] = this.parsePV1_50(fields[50]);

      case 50:
        parsedPV1["PV1.49"] = this.parsePV1_49(fields[49]);

      case 49:
        parsedPV1["PV1.48"] = this.parsePV1_48(fields[48]);

      case 48:
        parsedPV1["PV1.47"] = this.parsePV1_47(fields[47]);

      case 47:
        parsedPV1["PV1.46"] = this.parsePV1_46(fields[46]);

      case 46:
        parsedPV1["PV1.45"] = this.parsePV1_45(fields[45]);

      case 45:
        parsedPV1["PV1.44"] = this.parsePV1_44(fields[44]);

      case 44:
        parsedPV1["PV1.43"] = this.parsePV1_43(fields[43]);

      case 43:
        parsedPV1["PV1.42"] = this.parsePV1_42(fields[42]);

      case 42:
        parsedPV1["PV1.41"] = this.parsePV1_41(fields[41]);

      case 41:
        parsedPV1["PV1.40"] = this.parsePV1_40(fields[40]);

      case 40:
        parsedPV1["PV1.39"] = this.parsePV1_39(fields[39]);

      case 39:
        parsedPV1["PV1.38"] = this.parsePV1_38(fields[38]);

      case 38:
        parsedPV1["PV1.37"] = this.parsePV1_37(fields[37]);

      case 37:
        parsedPV1["PV1.36"] = this.parsePV1_36(fields[36]);

      case 36:
        parsedPV1["PV1.35"] = this.parsePV1_35(fields[35]);

      case 35:
        parsedPV1["PV1.34"] = this.parsePV1_34(fields[34]);

      case 34:
        parsedPV1["PV1.33"] = this.parsePV1_33(fields[33]);

      case 33:
        parsedPV1["PV1.32"] = this.parsePV1_32(fields[32]);

      case 32:
        parsedPV1["PV1.31"] = this.parsePV1_31(fields[31]);

      case 31:
        parsedPV1["PV1.30"] = this.parsePV1_30(fields[30]);

      case 30:
        parsedPV1["PV1.29"] = this.parsePV1_29(fields[29]);

      case 29:
        parsedPV1["PV1.28"] = this.parsePV1_28(fields[28]);

      case 28:
        parsedPV1["PV1.27"] = this.parsePV1_27(fields[27]);

      case 27:
        parsedPV1["PV1.26"] = this.parsePV1_26(fields[26]);

      case 26:
        parsedPV1["PV1.25"] = this.parsePV1_25(fields[25]);

      case 25:
        parsedPV1["PV1.24"] = this.parsePV1_24(fields[24]);

      case 24:
        parsedPV1["PV1.23"] = this.parsePV1_23(fields[23]);

      case 23:
        parsedPV1["PV1.22"] = this.parsePV1_22(fields[22]);

      case 22:
        parsedPV1["PV1.21"] = this.parsePV1_21(fields[21]);

      case 21:
        parsedPV1["PV1.20"] = this.parsePV1_20(fields[20]);

      case 20:
        parsedPV1["PV1.19"] = this.parsePV1_19(fields[19]);

      case 19:
        parsedPV1["PV1.18"] = this.parsePV1_18(fields[18]);

      case 18:
        parsedPV1["PV1.17"] = this.parsePV1_17(fields[17]);

      case 17:
        parsedPV1["PV1.16"] = this.parsePV1_16(fields[16]);

      case 16:
        parsedPV1["PV1.15"] = this.parsePV1_15(fields[15]);

      case 15:
        parsedPV1["PV1.14"] = this.parsePV1_14(fields[14]);

      case 14:
        parsedPV1["PV1.13"] = this.parsePV1_13(fields[13]);

      case 13:
        parsedPV1["PV1.12"] = this.parsePV1_12(fields[12]);

      case 12:
        parsedPV1["PV1.11"] = this.parsePV1_11(fields[11]);

      case 11:
        parsedPV1["PV1.10"] = this.parsePV1_10(fields[10]);

      case 10:
        parsedPV1["PV1.9"] = this.parsePV1_9(fields[9]);

      case 9:
        parsedPV1["PV1.8"] = this.parsePV1_8(fields[8]);

      case 8:
        parsedPV1["PV1.7"] = this.parsePV1_7(fields[7]);

      case 7:
        parsedPV1["PV1.6"] = this.parsePV1_6(fields[6]);

      case 6:
        parsedPV1["PV1.5"] = this.parsePV1_5(fields[5]);

      case 5:
        parsedPV1["PV1.4"] = this.parsePV1_4(fields[4]);

      case 4:
        parsedPV1["PV1.3"] = this.parsePV1_3(fields[3]);

      case 3:
        parsedPV1["PV1.2"] = this.parsePV1_2(fields[2]);

      case 2:
        parsedPV1["PV1.1"] = this.parsePV1_1(fields[1]);
    }

    return parsedPV1;
  }

  parsePV1_1(siValue) {
    return this.parseTypeSI(siValue, "PV1.1");
  }

  parsePV1_2(idValue) {
    return this.parseTypeID(idValue, "PV1.2");
  }

  parsePV1_3(plValue) {
    return this.parseTypePL(plValue, "PV1.3");
  }

  parsePV1_4(idValue) {
    return this.parseTypeID(idValue, "PV1.4");
  }

  parsePV1_5(cxValue) {
    return this.parseTypeCX(cxValue, "PV1.5");
  }

  parsePV1_6(plValue) {
    return this.parseTypePL(plValue, "PV1.6");
  }

  parsePV1_7(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV1.7");
  }

  parsePV1_8(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV1.8");
  }

  parsePV1_9(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV1.9");
  }

  parsePV1_10(isValue) {
    return this.parseTypeIS(isValue, "PV1.10");
  }

  parsePV1_11(plValue) {
    return this.parseTypePL(plValue, "PV1.11");
  }

  parsePV1_12(isValue) {
    return this.parseTypeIS(isValue, "PV1.12");
  }

  parsePV1_13(isValue) {
    return this.parseTypeIS(isValue, "PV1.13");
  }

  parsePV1_14(isValue) {
    return this.parseTypeIS(isValue, "PV1.14");
  }

  parsePV1_15(isValue) {
    return this.parseTypeIS(isValue, "PV1.15");
  }

  parsePV1_16(isValue) {
    return this.parseTypeIS(isValue, "PV1.16");
  }

  parsePV1_17(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV1.17");
  }

  parsePV1_18(isValue) {
    return this.parseTypeIS(isValue, "PV1.18");
  }

  parsePV1_19(cxValue) {
    return this.parseTypeCX(cxValue, "PV1.19");
  }

  parsePV1_20(fcValue) {
    return this.parseTypeFC(fcValue, "PV1.20");
  }

  parsePV1_21(isValue) {
    return this.parseTypeIS(isValue, "PV1.21");
  }

  parsePV1_22(isValue) {
    return this.parseTypeIS(isValue, "PV1.22");
  }

  parsePV1_23(isValue) {
    return this.parseTypeIS(isValue, "PV1.23");
  }

  parsePV1_24(isValue) {
    return this.parseTypeIS(isValue, "PV1.24");
  }

  parsePV1_25(dtValue) {
    return this.parseTypeDT(dtValue, "PV1.25");
  }

  parsePV1_26(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.26");
  }

  parsePV1_27(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.27");
  }

  parsePV1_28(isValue) {
    return this.parseTypeIS(isValue, "PV1.28");
  }

  parsePV1_29(isValue) {
    return this.parseTypeIS(isValue, "PV1.29");
  }

  parsePV1_30(dtValue) {
    return this.parseTypeDT(dtValue, "PV1.30");
  }

  parsePV1_31(isValue) {
    return this.parseTypeIS(isValue, "PV1.31");
  }

  parsePV1_32(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.32");
  }

  parsePV1_33(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.33");
  }

  parsePV1_34(isValue) {
    return this.parseTypeIS(isValue, "PV1.34");
  }

  parsePV1_35(dtValue) {
    return this.parseTypeDT(dtValue, "PV1.35");
  }

  parsePV1_36(isValue) {
    return this.parseTypeIS(isValue, "PV1.36");
  }

  parsePV1_37(cm_dldValue) {
    return this.parseTypeCM_DLD(cm_dldValue, "PV1.37");
  }

  parsePV1_38(isValue) {
    return this.parseTypeIS(isValue, "PV1.38");
  }

  parsePV1_39(isValue) {
    return this.parseTypeIS(isValue, "PV1.39");
  }

  parsePV1_40(isValue) {
    return this.parseTypeIS(isValue, "PV1.40");
  }

  parsePV1_41(isValue) {
    return this.parseTypeIS(isValue, "PV1.41");
  }

  parsePV1_42(plValue) {
    return this.parseTypePL(plValue, "PV1.42");
  }

  parsePV1_43(plValue) {
    return this.parseTypePL(plValue, "PV1.43");
  }

  parsePV1_44(tsValue) {
    return this.parseTypeTS(tsValue, "PV1.44");
  }

  parsePV1_45(tsValue) {
    return this.parseTypeTS(tsValue, "PV1.45");
  }

  parsePV1_46(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.46");
  }

  parsePV1_47(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.47");
  }

  parsePV1_48(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.48");
  }

  parsePV1_49(nmValue) {
    return this.parseTypeNM(nmValue, "PV1.49");
  }

  parsePV1_50(cxValue) {
    return this.parseTypeCX(cxValue, "PV1.50");
  }

  parsePV1_51(isValue) {
    return this.parseTypeIS(isValue, "PV1.51");
  }

  parsePV1_52(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV1.52");
  }
}

module.exports = PatientVisitParser;
