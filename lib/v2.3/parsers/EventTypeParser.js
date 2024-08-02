const TypeParser = require("./TypeParser");

class EventTypeParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segment) {
    const fields = segment.split(this.context.fieldSeparator);

    const parsedValue = {};

    switch (fields.length) {
      case 7:
        parsedValue["EVN.6"] = this.parseEVN6(fields[6]);

      case 6:
        parsedValue["EVN.5"] = this.parseEVN5(fields[5]);

      case 5:
        parsedValue["EVN.4"] = this.parseEVN4(fields[4]);

      case 4:
        parsedValue["EVN.3"] = this.parseEVN3(fields[3]);

      case 3:
        parsedValue["EVN.2"] = this.parseEVN2(fields[2]);

      case 2:
        parsedValue["EVN.1"] = this.parseEVN1(fields[1]);
    }

    return parsedValue;
  }

  parseEVN1(idValue) {
    return this.parseTypeID(idValue, "EVN.1");
  }
  parseEVN2(tsValue) {
    return this.parseTypeTS(tsValue, "EVN.2");
  }
  parseEVN3(tsValue) {
    return this.parseTypeTS(tsValue, "EVN.3");
  }
  parseEVN4(isValue) {
    return this.parseTypeIS(isValue, "EVN.4");
  }
  parseEVN5(xcnValue) {
    return this.parseTypeXCN(xcnValue, "EVN.5");
  }
  parseEVN6(tsValue) {
    return this.parseTypeTS(tsValue, "EVN.6");
  }
}

module.exports = EventTypeParser;
