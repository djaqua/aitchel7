const TypeParser = require("./TypeParser");

class PatientIdentificationParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);
    const parsedValue = {};

    switch (fields.length) {
      case 31:
        parsedValue["PID.30"] = this.parsePID30(fields[30]);

      case 30:
        parsedValue["PID.29"] = this.parsePID29(fields[29]);

      case 29:
        parsedValue["PID.28"] = this.parsePID28(fields[28]);

      case 28:
        parsedValue["PID.27"] = this.parsePID27(fields[27]);

      case 27:
        parsedValue["PID.26"] = this.parsePID26(fields[26]);

      case 26:
        parsedValue["PID.25"] = this.parsePID25(fields[25]);

      case 25:
        parsedValue["PID.24"] = this.parsePID24(fields[24]);

      case 24:
        parsedValue["PID.23"] = this.parsePID23(fields[23]);

      case 23:
        parsedValue["PID.22"] = this.parsePID22(fields[22]);

      case 22:
        parsedValue["PID.21"] = this.parsePID21(fields[21]);

      case 21:
        parsedValue["PID.20"] = this.parsePID20(fields[20]);

      case 20:
        parsedValue["PID.19"] = this.parsePID19(fields[19]);

      case 19:
        parsedValue["PID.18"] = this.parsePID18(fields[18]);

      case 18:
        parsedValue["PID.17"] = this.parsePID17(fields[17]);

      case 17:
        parsedValue["PID.16"] = this.parsePID16(fields[16]);

      case 16:
        parsedValue["PID.15"] = this.parsePID15(fields[15]);

      case 15:
        parsedValue["PID.14"] = this.parsePID14(fields[14]);

      case 14:
        parsedValue["PID.13"] = this.parsePID13(fields[13]);

      case 13:
        parsedValue["PID.12"] = this.parsePID12(fields[12]);

      case 12:
        parsedValue["PID.11"] = this.parsePID11(fields[11]);

      case 11:
        parsedValue["PID.10"] = this.parsePID10(fields[10]);

      case 10:
        parsedValue["PID.9"] = this.parsePID9(fields[9]);

      case 9:
        parsedValue["PID.8"] = this.parsePID8(fields[8]);

      case 8:
        parsedValue["PID.7"] = this.parsePID7(fields[7]);

      case 7:
        parsedValue["PID.6"] = this.parsePID6(fields[6]);

      case 6:
        parsedValue["PID.5"] = this.parsePID5(fields[5]);

      case 5:
        parsedValue["PID.4"] = this.parsePID4(fields[4]);

      case 4:
        parsedValue["PID.3"] = this.parsePID3(fields[3]);

      case 3:
        parsedValue["PID.2"] = this.parsePID2(fields[2]);

      case 2:
        parsedValue["PID.1"] = this.parsePID1(fields[1]);
    }

    return parsedValue;
  }

  parsePID1(siValue) {
    return this.parseTypeSI(siValue, "PID.1");
  }

  parsePID2(cxValue) {
    return this.parseTypeCX(cxValue, "PID.2");
  }

  parsePID3(cxValue) {
    return this.parseTypeCX(cxValue, "PID.3");
  }

  parsePID4(cxValue) {
    return this.parseTypeCX(cxValue, "PID.4");
  }

  parsePID5(xpnValue) {
    return this.parseTypeXPN(xpnValue, "PID.5");
  }

  parsePID6(xpnValue) {
    return this.parseTypeXPN(xpnValue, "PID.6");
  }

  parsePID7(tsValue) {
    return this.parseTypeTS(tsValue, "PID.7");
  }

  parsePID8(isValue) {
    return this.parseTypeIS(isValue, "PID.8");
  }

  parsePID9(xpnValue) {
    return this.parseTypeXPN(xpnValue, "PID.9");
  }

  parsePID10(isValue) {
    return this.parseTypeIS(isValue, "PID.10");
  }

  parsePID11(xadValue) {
    return this.parseTypeXAD(xadValue, "PID.11");
  }

  parsePID12(isValue) {
    return this.parseTypeIS(isValue, "PID.12");
  }

  parsePID13(xtnValue) {
    return this.parseTypeXTN(xtnValue, "PID.13");
  }

  parsePID14(xtnValue) {
    return this.parseTypeXTN(xtnValue, "PID.14");
  }

  parsePID15(ceValue) {
    return this.parseTypeCE(ceValue, "PID.15");
  }

  parsePID16(isValue) {
    return this.parseTypeIS(isValue, "PID.16");
  }

  parsePID17(isValue) {
    return this.parseTypeIS(isValue, "PID.17");
  }

  parsePID18(cxValue) {
    return this.parseTypeCX(cxValue, "PID.18");
  }

  parsePID19(stValue) {
    return this.parseTypeST(stValue, "PID.19");
  }

  parsePID20(dlnValue) {
    return this.parseTypeDLN(dlnValue, "PID.20");
  }

  parsePID21(cxValue) {
    return this.parseTypeCX(cxValue, "PID.21");
  }

  parsePID22(isValue) {
    return this.parseTypeIS(isValue, "PID.22");
  }

  parsePID23(stValue) {
    return this.parseTypeST(stValue, "PID.23");
  }

  parsePID24(idValue) {
    return this.parseTypeID(idValue, "PID.24");
  }

  parsePID25(nmValue) {
    return this.parseTypeNM(nmValue, "PID.25");
  }

  parsePID26(isValue) {
    return this.parseTypeIS(isValue, "PID.26");
  }

  parsePID27(ceValue) {
    return this.parseTypeCE(ceValue, "PID.27");
  }

  parsePID28(ceValue) {
    return this.parseTypeCE(ceValue, "PID.28");
  }

  parsePID29(tsValue) {
    return this.parseTypeTS(tsValue, "PID.29");
  }

  parsePID30(idValue) {
    return this.parseTypeID(idValue, "PID.30");
  }
}

module.exports = PatientIdentificationParser;
