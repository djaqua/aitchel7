const TypeParser = require("./TypeParser");

class ObservationParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedOBX = {};

    switch (fields.length) {
      case 18:
        parsedOBX["OBX.17"] = this.parseOBX17(fields[17]);

      case 17:
        parsedOBX["OBX.16"] = this.parseOBX16(fields[16]);

      case 16:
        parsedOBX["OBX.15"] = this.parseOBX15(fields[15]);

      case 15:
        parsedOBX["OBX.14"] = this.parseOBX14(fields[14]);

      case 14:
        parsedOBX["OBX.13"] = this.parseOBX13(fields[13]);

      case 13:
        parsedOBX["OBX.12"] = this.parseOBX12(fields[12]);

      case 12:
        parsedOBX["OBX.11"] = this.parseOBX11(fields[11]);

      case 11:
        parsedOBX["OBX.10"] = this.parseOBX0(fields[10]);

      case 10:
        parsedOBX["OBX.9"] = this.parseOBX9(fields[9]);

      case 9:
        parsedOBX["OBX.8"] = this.parseOBX8(fields[8]);

      case 8:
        parsedOBX["OBX.7"] = this.parseOBX7(fields[7]);

      case 7:
        parsedOBX["OBX.6"] = this.parseOBX6(fields[6]);

      case 6:
        parsedOBX["OBX.5"] = this.parseOBX5(fields[5]);

      case 5:
        parsedOBX["OBX.4"] = this.parseOBX4(fields[4]);

      case 4:
        parsedOBX["OBX.3"] = this.parseOBX3(fields[3]);

      case 3:
        parsedOBX["OBX.2"] = this.parseOBX2(fields[2]);

      case 2:
        parsedOBX["OBX.1"] = this.parseOBX1(fields[1]);
    }

    return parsedOBX;
  }

  parseOBX1(siValue) {
    return this.parseTypeSI(siValue, "OBX.1");
  }

  parseOBX2(idValue) {
    return this.parseTypeID(idValue, "OBX.2");
  }

  parseOBX3(ceValue) {
    return this.parseTypeCE(ceValue, "OBX.3");
  }

  parseOBX4(stValue) {
    return this.parseTypeST(stValue, "OBX.4");
  }

  parseOBX5(Value) {
    // TODO "varies" according to documentation
    // return this.parseType(Value, "OBX.5");
  }

  parseOBX6(ceValue) {
    return this.parseTypeCE(ceValue, "OBX.6");
  }

  parseOBX7(stValue) {
    return this.parseTypeST(stValue, "OBX.7");
  }

  parseOBX8(idValue) {
    return this.parseTypeID(idValue, "OBX.8");
  }

  parseOBX9(nmValue) {
    return this.parseTypeNM(nmValue, "OBX.9");
  }

  parseOBX10(idValue) {
    return this.parseTypeID(idValue, "OBX.10");
  }

  parseOBX11(idValue) {
    return this.parseTypeID(idValue, "OBX.11");
  }

  parseOBX12(tsValue) {
    return this.parseTypeTS(tsValue, "OBX.12");
  }

  parseOBX13(stValue) {
    return this.parseTypeST(stValue, "OBX.13");
  }

  parseOBX14(tsValue) {
    return this.parseTypeTS(tsValue, "OBX.14");
  }

  parseOBX15(ceValue) {
    return this.parseTypeCE(ceValue, "OBX.15");
  }

  parseOBX16(xcnValue) {
    return this.parseTypeXCN(xcnValue, "OBX.16");
  }

  parseOBX17(ceValue) {
    return this.parseTypeCE(ceValue, "OBX.17");
  }
}

module.exports = ObservationParser;
