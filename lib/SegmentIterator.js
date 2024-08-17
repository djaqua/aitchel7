const noop = () => {};

/**
 * Iterates over segments parsed from an input message.
 */
class SegmentIterator {
  #lines;
  #currentLineIndex;

  /**
   * Creates a new instance of SegmentIterator for a given HL7 message.
   *
   * @param {string} message an HL7 message
   * @param {{parseSegment:()=>undefined}} segmentParser parser implementation responsible for converting HL7 input message lines into segments
   */
  constructor(message, segmentParser) {
    this.#lines = message.split(/[\n]+/);
    this.#currentLineIndex = 0;
    this.segmentParser = segmentParser;
  }

  /**
   * Parses an optionally present segment loop identified by the given segment ID.
   *
   * @param {string} segmentId the expected ID of the current segment
   * @param {(result:string)=>undefined} fn (optional) the result handler
   */
  loop(segmentId, fn = noop) {
    if (this.#currentSegmentId === segmentId) {
      if (segmentId === "EOF") {
        // imagine what it would be like to loop on EOF lol
        fn(this.#parseCurrentSegment());
      } else {
        do {
          fn(this.#parseCurrentSegment());
        } while (this.#currentSegmentId === segmentId);
      }
    }
  }

  /**
   * Parses an optionally present segment identified by the given segment ID.
   *
   * @param {string} segmentId the expected ID of the current segment
   * @param {(result:string)=>undefined} fn (optional) the result handler
   */
  optional(segmentId, fn = noop) {
    if (this.#currentSegmentId === segmentId) {
      fn(this.#parseCurrentSegment());
    }
  }

  /**
   * Parses the current line as a required segment, or throws an error if the
   * given segment ID does not match the segment ID of the current line.
   *
   * @param {string} segmentId the expected ID of the current segment
   * @param {(result:string)=>undefined} fn (optional) the result handler
   */
  required(segmentId, fn = noop) {
    const actualId = this.#currentSegmentId;

    if (actualId !== segmentId) {
      throw new Error(`expected '${segmentId}', but received '${actualId}'`);
    }

    fn(this.#parseCurrentSegment());
  }

  get #currentLine() {
    return this.#lines[this.#currentLineIndex];
  }

  get #currentSegmentId() {
    try {
      return this.#currentLine.substring(0, 3) || "EOF"; // regular segments || empty strings
    } catch (e) {
      return "EOF";
    }
  }

  #parseCurrentSegment() {
    if (this.#currentSegmentId === "EOF") {
      return undefined;
    }
    const result = this.segmentParser.parseSegment(this.#currentLine);
    this.#currentLineIndex++;
    return result;
  }
}

module.exports = SegmentIterator;
