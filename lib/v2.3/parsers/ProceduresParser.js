const TypeParser = require("./TypeParser");

class ProceduresParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedPR1 = {};

    switch (fields.length) {
      case 11:
        parsedPR1["PR1.0"] = this.parsePR1_0(fields[0]);

      case 10:
        parsedPR1["PR1.9"] = this.parsePR1_9(fields[9]);

      case 9:
        parsedPR1["PR1.8"] = this.parsePR1_8(fields[8]);

      case 8:
        parsedPR1["PR1.7"] = this.parsePR1_7(fields[7]);

      case 7:
        parsedPR1["PR1.6"] = this.parsePR1_6(fields[6]);

      case 6:
        parsedPR1["PR1.5"] = this.parsePR1_5(fields[5]);

      case 5:
        parsedPR1["PR1.4"] = this.parsePR1_4(fields[4]);

      case 4:
        parsedPR1["PR1.3"] = this.parsePR1_3(fields[3]);

      case 3:
        parsedPR1["PR1.2"] = this.parsePR1_2(fields[2]);

      case 2:
        parsedPR1["PR1.1"] = this.parsePR1_1(fields[1]);
    }

    return parsedPR1;
  }

  parsePR1_1(siValue) {
    return this.parseTypeSI(siValue, "PR1.1");
  }

  parsePR1_2(isValue) {
    return this.parseTypeIS(isValue, "PR1.2");
  }

  parsePR1_3(ceValue) {
    return this.parseTypeCE(ceValue, "PR1.3");
  }

  parsePR1_4(stValue) {
    return this.parseTypeST(stValue, "PR1.4");
  }

  parsePR1_5(tsValue) {
    return this.parseTypeTS(tsValue, "PR1.5");
  }

  parsePR1_6(isValue) {
    return this.parseTypeIS(isValue, "PR1.6");
  }

  parsePR1_7(nmValue) {
    return this.parseTypeNM(nmValue, "PR1.7");
  }

  parsePR1_8(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PR1.8");
  }

  parsePR1_9(isValue) {
    return this.parseTypeIS(isValue, "PR1.9");
  }

  parsePR1_10(nmValue) {
    return this.parseTypeNM(nmValue, "PR1.10");
  }

  parsePR1_11(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PR1.11");
  }

  parsePR1_12(xcnValue) {
    return this.parseTypeXCN(xcnValue, "PR1.12");
  }

  parsePR1_13(ceValue) {
    return this.parseTypeCE(ceValue, "PR1.13");
  }

  parsePR1_14(nmValue) {
    return this.parseTypeNM(nmValue, "PR1.14");
  }

  parsePR1_15(ceValue) {
    return this.parseTypeCE(ceValue, "PR1.15");
  }
}

module.exports = ProceduresParser;
