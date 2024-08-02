const TypeParser = require("./TypeParser");

class PatientVisit2Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedPV2 = {};

    switch (fields.length) {
      case 38:
        parsedPV2["PV2.37"] = this.parsePV2_37(fields[37]);

      case 37:
        parsedPV2["PV2.36"] = this.parsePV2_36(fields[36]);

      case 36:
        parsedPV2["PV2.35"] = this.parsePV2_35(fields[35]);

      case 35:
        parsedPV2["PV2.34"] = this.parsePV2_34(fields[34]);

      case 34:
        parsedPV2["PV2.33"] = this.parsePV2_33(fields[33]);

      case 33:
        parsedPV2["PV2.32"] = this.parsePV2_32(fields[32]);

      case 32:
        parsedPV2["PV2.31"] = this.parsePV2_31(fields[31]);

      case 31:
        parsedPV2["PV2.30"] = this.parsePV2_30(fields[30]);

      case 30:
        parsedPV2["PV2.29"] = this.parsePV2_29(fields[29]);

      case 29:
        parsedPV2["PV2.28"] = this.parsePV2_28(fields[28]);

      case 28:
        parsedPV2["PV2.27"] = this.parsePV2_27(fields[27]);

      case 27:
        parsedPV2["PV2.26"] = this.parsePV2_26(fields[26]);

      case 26:
        parsedPV2["PV2.25"] = this.parsePV2_25(fields[25]);

      case 25:
        parsedPV2["PV2.24"] = this.parsePV2_24(fields[24]);

      case 24:
        parsedPV2["PV2.23"] = this.parsePV2_23(fields[23]);

      case 23:
        parsedPV2["PV2.22"] = this.parsePV2_22(fields[22]);

      case 22:
        parsedPV2["PV2.21"] = this.parsePV2_21(fields[21]);

      case 21:
        parsedPV2["PV2.20"] = this.parsePV2_20(fields[20]);

      case 20:
        parsedPV2["PV2.19"] = this.parsePV2_19(fields[19]);

      case 19:
        parsedPV2["PV2.18"] = this.parsePV2_18(fields[18]);

      case 18:
        parsedPV2["PV2.17"] = this.parsePV2_17(fields1[17]);

      case 17:
        parsedPV2["PV2.16"] = this.parsePV2_16(fields1[16]);

      case 16:
        parsedPV2["PV2.15"] = this.parsePV2_15(fields1[15]);

      case 15:
        parsedPV2["PV2.14"] = this.parsePV2_14(fields1[14]);

      case 14:
        parsedPV2["PV2.13"] = this.parsePV2_13(fields1[13]);

      case 13:
        parsedPV2["PV2.12"] = this.parsePV2_12(fields1[12]);

      case 12:
        parsedPV2["PV2.11"] = this.parsePV2_11(fields1[11]);

      case 11:
        parsedPV2["PV2.10"] = this.parsePV2_10(fields1[10]);

      case 10:
        parsedPV2["PV2.9"] = this.parsePV2_9(fields[9]);

      case 9:
        parsedPV2["PV2.8"] = this.parsePV2_8(fields[8]);

      case 8:
        parsedPV2["PV2.7"] = this.parsePV2_7(fields[7]);

      case 7:
        parsedPV2["PV2.6"] = this.parsePV2_6(fields[6]);

      case 6:
        parsedPV2["PV2.5"] = this.parsePV2_5(fields[5]);

      case 5:
        parsedPV2["PV2.4"] = this.parsePV2_4(fields[4]);

      case 4:
        parsedPV2["PV2.3"] = this.parsePV2_3(fields[3]);

      case 3:
        parsedPV2["PV2.2"] = this.parsePV2_2(fields[2]);

      case 2:
        parsedPV2["PV2.1"] = this.parsePV2_1(fields[1]);
    }

    return parsedPV2;
  }

  parsePV2_1(plValue) {
    return this.parseTypePL(plValue, "PV2.1");
  }

  parsePV2_2(ceValue) {
    return this.parseTypeCE(ceValue, "PV2.2");
  }

  parsePV2_3(ceValue) {
    return this.parseTypeCE(ceValue, "PV2.3");
  }

  parsePV2_4(ceValue) {
    return this.parseTypeCE(ceValue, "PV2.4");
  }

  parsePV2_5(stValue) {
    return this.parseTypeST(stValue, "PV2.5");
  }

  parsePV2_6(stValue) {
    return this.parseTypeST(stValue, "PV2.6");
  }

  parsePV2_7(isValue) {
    return this.parseTypeIS(isValue, "PV2.7");
  }

  parsePV2_8(tsValue) {
    return this.parseTypeTS(tsValue, "PV2.8");
  }

  parsePV2_9(tsValue) {
    return this.parseTypeTS(tsValue, "PV2.9");
  }

  parsePV2_10(nmValue) {
    return this.parseTypeNM(nmValue, "PV2.10");
  }

  parsePV2_11(nmValue) {
    return this.parseTypeNM(nmValue, "PV2.11");
  }

  parsePV2_12(stValue) {
    return this.parseTypeST(stValue, "PV2.12");
  }

  parsePV2_13(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PV2.13");
  }

  parsePV2_14(dtValue) {
    return this.parseTypeDT(dtValue, "PV2.14");
  }

  parsePV2_15(idValue) {
    return this.parseTypeID(idValue, "PV2.15");
  }

  parsePV2_16(isValue) {
    return this.parseTypeIS(isValue, "PV2.16");
  }

  parsePV2_17(dtValue) {
    return this.parseTypeDT(dtValue, "PV2.17");
  }

  parsePV2_18(isValue) {
    return this.parseTypeIS(isValue, "PV2.18");
  }

  parsePV2_19(idValue) {
    return this.parseTypeID(idValue, "PV2.19");
  }

  parsePV2_20(nmValue) {
    return this.parseTypeNM(nmValue, "PV2.20");
  }

  parsePV2_21(isValue) {
    return this.parseTypeIS(isValue, "PV2.21");
  }

  parsePV2_22(idValue) {
    return this.parseTypeID(idValue, "PV2.22");
  }

  parsePV2_23(xonValue) {
    return this.parseTypeXON(xonValue, "PV2.23");
  }

  parsePV2_24(isValue) {
    return this.parseTypeIS(isValue, "PV2.24");
  }

  parsePV2_25(isValue) {
    return this.parseTypeIS(isValue, "PV2.25");
  }

  parsePV2_26(dtValue) {
    return this.parseTypeDT(dtValue, "PV2.26");
  }

  parsePV2_27(isValue) {
    return this.parseTypeIS(isValue, "PV2.27");
  }

  parsePV2_28(dtValue) {
    return this.parseTypeDT(dtValue, "PV2.28");
  }

  parsePV2_29(dtValue) {
    return this.parseTypeDT(dtValue, "PV2.29");
  }

  parsePV2_30(isValue) {
    return this.parseTypeIS(isValue, "PV2.30");
  }

  parsePV2_31(isValue) {
    return this.parseTypeIS(isValue, "PV2.31");
  }

  parsePV2_32(idValue) {
    return this.parseTypeID(idValue, "PV2.32");
  }

  parsePV2_33(tsValue) {
    return this.parseTypeTS(tsValue, "PV2.33");
  }

  parsePV2_34(idValue) {
    return this.parseTypeID(idValue, "PV2.34");
  }

  parsePV2_35(idValue) {
    return this.parseTypeID(idValue, "PV2.35");
  }

  parsePV2_36(idValue) {
    return this.parseTypeID(idValue, "PV2.36");
  }

  parsePV2_37(idValue) {
    return this.parseTypeID(idValue, "PV2.37");
  }
}

module.exports = PatientVisit2Parser;
