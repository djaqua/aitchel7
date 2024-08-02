const TypeParser = require("./TypeParser");

class Insurance3Parser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedIN3 = {};

    switch (fields.length) {
      case 26:
        parsedIN3["IN3.25"] = this.parseIN3_25(fields[25]);

      case 25:
        parsedIN3["IN3.24"] = this.parseIN3_24(fields[24]);

      case 24:
        parsedIN3["IN3.23"] = this.parseIN3_23(fields[23]);

      case 23:
        parsedIN3["IN3.22"] = this.parseIN3_22(fields[22]);

      case 22:
        parsedIN3["IN3.21"] = this.parseIN3_21(fields[21]);

      case 21:
        parsedIN3["IN3.20"] = this.parseIN3_20(fields[20]);

      case 20:
        parsedIN3["IN3.19"] = this.parseIN3_19(fields[19]);

      case 19:
        parsedIN3["IN3.18"] = this.parseIN3_18(fields[18]);

      case 18:
        parsedIN3["IN3.17"] = this.parseIN3_17(fields[17]);

      case 17:
        parsedIN3["IN3.16"] = this.parseIN3_16(fields[16]);

      case 16:
        parsedIN3["IN3.15"] = this.parseIN3_15(fields[15]);

      case 15:
        parsedIN3["IN3.14"] = this.parseIN3_14(fields[14]);

      case 14:
        parsedIN3["IN3.13"] = this.parseIN3_13(fields[13]);

      case 13:
        parsedIN3["IN3.12"] = this.parseIN3_12(fields[12]);

      case 12:
        parsedIN3["IN3.11"] = this.parseIN3_11(fields[11]);

      case 11:
        parsedIN3["IN3.10"] = this.parseIN3_10(fields[10]);

      case 10:
        parsedIN3["IN3.9"] = this.parseIN3_9(fields[9]);

      case 9:
        parsedIN3["IN3.8"] = this.parseIN3_8(fields[8]);

      case 8:
        parsedIN3["IN3.7"] = this.parseIN3_7(fields[7]);

      case 7:
        parsedIN3["IN3.6"] = this.parseIN3_6(fields[6]);

      case 6:
        parsedIN3["IN3.5"] = this.parseIN3_5(fields[5]);

      case 5:
        parsedIN3["IN3.4"] = this.parseIN3_4(fields[4]);

      case 4:
        parsedIN3["IN3.3"] = this.parseIN3_3(fields[3]);

      case 3:
        parsedIN3["IN3.2"] = this.parseIN3_2(fields[2]);

      case 2:
        parsedIN3["IN3.1"] = this.parseIN3_1(fields[1]);
    }

    return parsedIN3;
  }

  parseIN3_1(siValue) {
    return this.parseType(siValue, "IN3.1");
  }

  parseIN3_2(cxValue) {
    return this.parseType(cxValue, "IN3.2");
  }

  parseIN3_3(xcnValue) {
    return this.parseType(xcnValue, "IN3.3");
  }

  parseIN3_4(idValue) {
    return this.parseType(idValue, "IN3.4");
  }

  parseIN3_5(cm_penValue) {
    return this.parseTypeCM_PEN(cm_penValue, "IN3.5");
  }

  parseIN3_6(tsValue) {
    return this.parseType(tsValue, "IN3.6");
  }

  parseIN3_7(tsValue) {
    return this.parseType(tsValue, "IN3.7");
  }

  parseIN3_8(xcnValue) {
    return this.parseType(xcnValue, "IN3.8");
  }

  parseIN3_9(dtValue) {
    return this.parseType(dtValue, "IN3.9");
  }

  parseIN3_10(dtValue) {
    return this.parseType(dtValue, "IN3.10");
  }

  parseIN3_11(cm_dtnValue) {
    return this.parseTypeCM_DTN(cm_dtnValue, "IN3.11");
  }

  parseIN3_12(ceValue) {
    return this.parseType(ceValue, "IN3.12");
  }

  parseIN3_13(tsValue) {
    return this.parseType(tsValue, "IN3.13");
  }

  parseIN3_14(xcnValue) {
    return this.parseType(xcnValue, "IN3.14");
  }

  parseIN3_15(stValue) {
    return this.parseType(stValue, "IN3.15");
  }

  parseIN3_16(xtnValue) {
    return this.parseType(xtnValue, "IN3.16");
  }

  parseIN3_17(ceValue) {
    return this.parseType(ceValue, "IN3.17");
  }

  parseIN3_18(ceValue) {
    return this.parseType(ceValue, "IN3.18");
  }

  parseIN3_19(xtnValue) {
    return this.parseType(xtnValue, "IN3.19");
  }

  parseIN3_20(cm_pcfValue) {
    return this.parseTypeCM_PCF(cm_pcfValue, "IN3.20");
  }

  parseIN3_21(stValue) {
    return this.parseType(stValue, "IN3.21");
  }

  parseIN3_22(dtValue) {
    return this.parseType(dtValue, "IN3.22");
  }

  parseIN3_23(isValue) {
    return this.parseType(isValue, "IN3.23");
  }

  parseIN3_24(isValue) {
    return this.parseType(isValue, "IN3.24");
  }

  parseIN3_25(xcnValue) {
    return this.parseType(xcnValue, "IN3.25");
  }
}

module.exports = Insurance3Parser;
