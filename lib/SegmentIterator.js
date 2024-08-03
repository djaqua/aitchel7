const getSegmentID = require("./getSegmentID");

class SegmentIterator {
  constructor(message) {
    this.lines = message.split("\n");
    this.currentLineIndex = 0;
  }

  loop(segmentId, parser, fn) {
    if (getSegmentID(this.lines[this.currentLineIndex]) === segmentId) {
      do {
        fn(parser.parseSegment(this.lines[this.currentLineIndex++]));
      } while (getSegmentID(this.lines[this.currentLineIndex]) === segmentId);
    }
  }

  optional(segmentId, parser, fn) {
    if (getSegmentID(this.lines[this.currentLineIndex]) === segmentId) {
      return fn(parser.parseSegment(this.lines[this.currentLineIndex++]));
    }
  }

  required(segmentId, parser, fn) {
    const actualId = getSegmentID(this.lines[this.currentLineIndex]);
    if (actualId === segmentId) {
      return fn(parser.parseSegment(this.lines[this.currentLineIndex++]));
    }
    throw new Error(`expected '${segmentId}', but received '${actualId}'`);
  }
}

module.exports = SegmentIterator;
