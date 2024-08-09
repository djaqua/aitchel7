const getSegmentID = (line) => {
  return line.substring(0, 3);
};

class SegmentIterator {
  #lines;
  #currentLineIndex;

  constructor(message, segmentParser) {
    this.#lines = message.split("\n");
    this.#currentLineIndex = 0;
    this.segmentParser = segmentParser;
  }

  get #currentLine() {
    return this.#lines[this.#currentLineIndex];
  }

  loop(segmentId, fn) {
    while (getSegmentID(this.#currentLine) === segmentId) {
      const result = this.segmentParser.parseSegment(this.#currentLine);

      // TODO this has to happen before fn(), otherwise any nested iterator
      // calls (within fn) won't have access to the next line. its awkward
      // to prevent a glitch by splitting one line into two, so investigate
      // other approaches
      this.#currentLineIndex++;
      fn(result);
    }
  }

  optional(segmentId, fn) {
    if (getSegmentID(this.#currentLine) === segmentId) {
      fn(this.segmentParser.parseSegment(this.#currentLine));
      this.#currentLineIndex++;
    }
  }

  required(segmentId, fn) {
    const actualId = getSegmentID(this.#currentLine);
    if (actualId !== segmentId) {
      throw new Error(`expected '${segmentId}', but received '${actualId}'`);
    }
    fn(this.segmentParser.parseSegment(this.#currentLine));
    this.#currentLineIndex++;
  }
}

module.exports = SegmentIterator;
