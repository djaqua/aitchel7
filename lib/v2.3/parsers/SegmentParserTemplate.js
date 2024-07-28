const TypeParser = require("./TypeParser");

class SegmentParserTemplate extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const parsedSEGMENT = {
      "SEGMENT.1": this.parseSEGMENT1(fields[1]),
      "SEGMENT.2": this.parseSEGMENT2(fields[2]),
      "SEGMENT.3": this.parseSEGMENT3(fields[3]),
      "SEGMENT.4": this.parseSEGMENT4(fields[4]),
      "SEGMENT.5": this.parseSEGMENT5(fields[5]),
      "SEGMENT.6": this.parseSEGMENT6(fields[6]),
      "SEGMENT.7": this.parseSEGMENT7(fields[7]),
      "SEGMENT.8": this.parseSEGMENT8(fields[8]),
      "SEGMENT.9": this.parseSEGMENT9(fields[9]),
      "SEGMENT.10": this.parseSEGMENT10(fields[10]),
    };

    return parsedSEGMENT;
  }

  parseSEGMENT1(Value) {
    return this.parseType(Value, "SEGMENT.1");
  }

  parseSEGMENT2(Value) {
    return this.parseType(Value, "SEGMENT.2");
  }

  parseSEGMENT3(Value) {
    return this.parseType(Value, "SEGMENT.3");
  }

  parseSEGMENT4(Value) {
    return this.parseType(Value, "SEGMENT.4");
  }

  parseSEGMENT5(Value) {
    return this.parseType(Value, "SEGMENT.5");
  }

  parseSEGMENT6(Value) {
    return this.parseType(Value, "SEGMENT.6");
  }

  parseSEGMENT7(Value) {
    return this.parseType(Value, "SEGMENT.7");
  }

  parseSEGMENT8(Value) {
    return this.parseType(Value, "SEGMENT.8");
  }

  parseSEGMENT9(Value) {
    return this.parseType(Value, "SEGMENT.9");
  }

  parseSEGMENT10(Value) {
    return this.parseType(Value, "SEGMENT.10");
  }
}

module.exports = SegmentParserTemplate;
