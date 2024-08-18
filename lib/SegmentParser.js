/**
 *
 */
class SegmentParser {
  #context;
  #typeParser;
  #segmentDescriptors;

  constructor(context, typeParser, segmentDescriptors) {
    this.#context = context;
    this.#typeParser = typeParser;
    this.#segmentDescriptors = segmentDescriptors;
  }

  parseSegment(line) {
    const fieldValues = line.split(this.#context.fieldSeparator);
    const segmentId = fieldValues.splice(0, 1);

    const fieldDescriptors = this.#segmentDescriptors[segmentId];

    // field-by-descriptor causes all fields to be parsed, while
    // descriptor-by-field would cause only fields with values to be parsed
    // TBD if one approach is better than the other; going with the
    // field-by-descriptor approach for now
    return fieldDescriptors.reduce((result, current, index) => {
      const value = fieldValues[index]; // field is determined by index of descriptor
      const { id, type } = current;

      result[id] = this.#typeParser.parseType(type, id, value);

      return result;
    }, {});
  }
}

module.exports = SegmentParser;
