const getSegmentID = (line) => {
  return line.substring(0, 3);
};

class SegmentIterator {
  #lines;
  #currentLineIndex;

  constructor(message) {
    this.#lines = message.split("\n");
    this.#currentLineIndex = 0;
  }

  get #currentLine() {
    return this.#lines[this.#currentLineIndex];
  }

  loop(segmentId, parser, fn) {
    while (getSegmentID(this.#currentLine) === segmentId) {
      fn(parser.parseSegment(this.#currentLine));
      this.#currentLineIndex++;
    }
  }

  optional(segmentId, parser, fn) {
    if (getSegmentID(this.#currentLine) === segmentId) {
      fn(parser.parseSegment(this.#currentLine));
      this.#currentLineIndex++;
    }
  }

  required(segmentId, parser, fn) {
    const actualId = getSegmentID(this.#currentLine);
    if (actualId !== segmentId) {
      throw new Error(`expected '${segmentId}', but received '${actualId}'`);
    }
    fn(parser.parseSegment(this.#currentLine));
    this.#currentLineIndex++;
  }
}

module.exports = SegmentIterator;
