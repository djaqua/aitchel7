const TypeParser = require("./TypeParser");

class DiagnosisRelatedGroupParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedDRG = {};

    switch (fields.length) {
      case 11:
        parsedDRG["DRG.10"] = this.parseDRG0(fields[10]);

      case 10:
        parsedDRG["DRG.9"] = this.parseDRG9(fields[9]);

      case 9:
        parsedDRG["DRG.8"] = this.parseDRG8(fields[8]);

      case 8:
        parsedDRG["DRG.7"] = this.parseDRG7(fields[7]);

      case 7:
        parsedDRG["DRG.6"] = this.parseDRG6(fields[6]);

      case 6:
        parsedDRG["DRG.5"] = this.parseDRG5(fields[5]);

      case 5:
        parsedDRG["DRG.4"] = this.parseDRG4(fields[4]);

      case 4:
        parsedDRG["DRG.3"] = this.parseDRG3(fields[3]);

      case 3:
        parsedDRG["DRG.2"] = this.parseDRG2(fields[2]);

      case 2:
        parsedDRG["DRG.1"] = this.parseDRG1(fields[1]);
    }

    return parsedDRG;
  }

  parseDRG1(ceValue) {
    return this.parseTypeCE(ceValue, "DRG.1");
  }

  parseDRG2(tsValue) {
    return this.parseTypeTS(tsValue, "DRG.2");
  }

  parseDRG3(idValue) {
    return this.parseTypeID(idValue, "DRG.3");
  }

  parseDRG4(isValue) {
    return this.parseTypeIS(isValue, "DRG.4");
  }

  parseDRG5(ceValue) {
    return this.parseTypeCE(ceValue, "DRG.5");
  }

  parseDRG6(nmValue) {
    return this.parseTypeNM(nmValue, "DRG.6");
  }

  parseDRG7(cpValue) {
    return this.parseTypeCP(cpValue, "DRG.7");
  }

  parseDRG8(isValue) {
    return this.parseTypeIS(isValue, "DRG.8");
  }

  parseDRG9(cpValue) {
    return this.parseTypeCP(cpValue, "DRG.9");
  }

  parseDRG10(idValue) {
    return this.parseTypeID(idValue, "DRG.10");
  }
}

module.exports = DiagnosisRelatedGroupParser;
