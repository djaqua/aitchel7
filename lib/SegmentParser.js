/**
 * SegmentParser parses segments from lines of input in a given context.
 */
class SegmentParser {
  #context;
  #typeParser;
  #segmentDescriptors;

  /**
   * Creates a new SegmentParser for the given context using the supplied
   * type-parser and segment descriptors.
   *
   * @param {object} context
   * @param {string} context.fieldSeparator the character used to delimit the fields in this context
   * @param {{parseType:(type:string, id:string, value:string)=>string|number|Date|object}} typeParser
   * @param {object} segmentDescriptors an object keyed by segment ID containing arrays of field descriptors
   */
  constructor(context, typeParser, segmentDescriptors) {
    this.#context = context;
    this.#typeParser = typeParser;
    this.#segmentDescriptors = segmentDescriptors;
  }

  /**
   * Parses the specified line of input according to the segment descriptor matching the segment ID.
   *
   * @param {string} line a line of input from an HL7 message
   * @returns an object with field values keyed by field ID
   */
  parseSegment(line) {
    if (!line) {
      return undefined;
    }

    const fieldValues = line.split(this.#context.fieldSeparator);

    const segmentId = fieldValues.splice(0, 1)[0];

    const fieldDescriptors = this.#segmentDescriptors[segmentId];
    if (!fieldDescriptors) {
      // parsing a line with an unsupported segment ID is
      // the kind of problem that should fail very loudly
      throw new Error(`unsupported segment ID '${segmentId}' in '${line}'`);
    }

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
