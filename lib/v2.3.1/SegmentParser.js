const TypeParser = require("./TypeParser");
const segmentDescriptors = require("./segmentDescriptors");

class SegmentParser {
  constructor(context) {
    this.context = context;
    this.typeParser = new TypeParser(context);
  }

  parseSegment(line) {
    const fieldValues = line.split(this.context.fieldSeparator);
    const segmentId = fieldValues.splice(0, 1);

    const fieldDescriptors = segmentDescriptors[segmentId];

    return fieldDescriptors.reduce((result, current, index) => {
      const value = fieldValues[index];
      const { id, type } = current;

      result[id] = this.typeParser.parseType(type, id, value);

      return result;
    }, {});
  }
}

module.exports = SegmentParser;
