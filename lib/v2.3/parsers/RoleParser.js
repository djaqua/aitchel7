const TypeParser = require("./TypeParser");

class RoleParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedROL = {};

    switch (fields.length) {
      case 9:
        parsedROL["ROL.8"] = this.parseROL8(fields[8]);

      case 8:
        parsedROL["ROL.7"] = this.parseROL7(fields[7]);

      case 7:
        parsedROL["ROL.6"] = this.parseROL6(fields[6]);

      case 6:
        parsedROL["ROL.5"] = this.parseROL5(fields[5]);

      case 5:
        parsedROL["ROL.4"] = this.parseROL4(fields[4]);

      case 4:
        parsedROL["ROL.3"] = this.parseROL3(fields[3]);

      case 3:
        parsedROL["ROL.2"] = this.parseROL2(fields[2]);

      case 2:
        parsedROL["ROL.1"] = this.parseROL1(fields[1]);
    }

    return parsedROL;
  }

  parseROL1(eiValue) {
    return this.parseTypeEI(eiValue, "ROL.1");
  }

  parseROL2(idValue) {
    return this.parseTypeID(idValue, "ROL.2");
  }

  parseROL3(ceValue) {
    return this.parseTypeCE(ceValue, "ROL.3");
  }

  parseROL4(xcnValue) {
    return this.parseTypeXCN(xcnValue, "ROL.4");
  }

  parseROL5(tsValue) {
    return this.parseTypeTS(tsValue, "ROL.5");
  }

  parseROL6(tsValue) {
    return this.parseTypeTS(tsValue, "ROL.6");
  }

  parseROL7(ceValue) {
    return this.parseTypeCE(ceValue, "ROL.7");
  }

  parseROL8(ceValue) {
    return this.parseTypeCE(ceValue, "ROL.8");
  }
}

module.exports = RoleParser;
