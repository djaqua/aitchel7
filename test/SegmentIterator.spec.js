const { describe, it, beforeEach } = require("mocha");
const SegmentIterator = require("../lib/SegmentIterator");

class NoopSegmentParser {
  parseSegment(line) {
    const fields = line.split("|");
    return {
      fieldA: fields[0],
      fieldB: fields[1],
    };
  }
}

const SEGMENT_PARSER = new NoopSegmentParser();

const FOO = `FOO|A HUMBLE FOO SEGMENT\n`;
const FOO_ALT = `FOO|A NIMBLE FOO SEGMENT\n`;

const BAR = `BAR|A HUMBLE BAR SEGMENT\n`;
const BAZ = `BAZ|A HUMBLE BAR SEGMENT\n`;

describe("lib/SegmentIterator", () => {
  describe("constructor(message, segmentParser)", () => {
    it("should throw an error when message is undefined", () => {
      expect(() => {
        new SegmentIterator(undefined, SEGMENT_PARSER);
      }).to.throw();
    });
    it("should throw an error when message is null", () => {
      expect(() => {
        new SegmentIterator(null, SEGMENT_PARSER);
      }).to.throw();
    });
    it("should NOT throw an error when message is empty", () => {
      expect(() => {
        new SegmentIterator("", SEGMENT_PARSER);
      }).to.not.throw();
    });
  });

  describe("optionalLoop(segmentId, resultHandler)", () => {
    describe("empty messages", () => {
      let iter;
      beforeEach(() => {
        const message = "";
        iter = new SegmentIterator(message, SEGMENT_PARSER);
      });

      it("should not throw an error", () => {
        expect(() => {
          iter.optionalLoop("FOO");
        }).to.not.throw();
      });

      it("should not call the result handler", () => {
        let resultCount = 0;
        iter.optionalLoop("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(0);
      });
    });

    describe("optionalLoop passes segment data to the result handler", () => {
      let actualResult;

      it("should parse one line of input", () => {
        const message = `${FOO}`;
        const expectedResult = [
          {
            fieldA: "FOO",
            fieldB: "A HUMBLE FOO SEGMENT",
          },
        ];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];
        iter.optionalLoop("FOO", (result) => {
          actualResult.push(result);
        });
        expect(actualResult).to.deep.equal(expectedResult);
      });

      it("should parse two lines of input", () => {
        const message = `${FOO}${FOO_ALT}`;
        const expectedResult = [
          {
            fieldA: "FOO",
            fieldB: "A HUMBLE FOO SEGMENT",
          },
          {
            fieldA: "FOO",
            fieldB: "A NIMBLE FOO SEGMENT",
          },
        ];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];
        iter.optionalLoop("FOO", (result) => {
          actualResult.push(result);
        });
        expect(actualResult).to.deep.equal(expectedResult);
      });

      it("should pass undefined to the result handler on EOF", () => {
        const message = ``;
        const expectedResult = [undefined];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];

        iter.optionalLoop("EOF", (result) => {
          actualResult.push(result);
        });

        expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    describe("optionalLoop terminates at first unexpected segment", () => {
      describe("zero cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${BAR}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly 0 times", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(0);
        });

        it("should not consume unexpected segments", () => {
          iter.optionalLoop("FOO");

          // prove that the optionalLoop did not consume the unexpected segment
          expect(() => {
            iter.required("BAR");
          }).to.not.throw();
        });
      });

      describe("one cycle", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${BAR}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly one time", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(1);
        });

        it("should not consume unexpected segments", () => {
          iter.optionalLoop("FOO");

          // prove that the optionalLoop did not consume the unexpected segment
          expect(() => {
            iter.required("BAR");
          }).to.not.throw();
        });
      });

      describe("two cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${FOO}${BAR}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly two times", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(2);
        });

        it("should not consume unexpected segments", () => {
          iter.optionalLoop("FOO");

          // prove that the optionalLoop did not consume the unexpected segment
          expect(() => {
            iter.required("BAR");
          }).to.not.throw();
        });
      });

      describe("three cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${FOO}${FOO}${BAR}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly 3 times", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(3);
        });

        it("should not consume unexpected segments", () => {
          iter.optionalLoop("FOO"); // consume the optionalLoop segments

          // prove that the optionalLoop did not consume the unexpected segment
          expect(() => {
            iter.required("BAR");
          }).to.not.throw();
        });
      });
    });

    describe("optionalLoop terminates at EOF", () => {
      describe("zero cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("BAR");
          }).to.not.throw();
        });

        it("should stop at unexpected segments", () => {
          let resultCount = 0;
          iter.optionalLoop("BAR", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(0);
        });
      });

      describe("one cycle", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly one time", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(1);
        });
      });

      describe("two cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly two times", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(2);
        });
      });

      describe("three cycles", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${FOO}${FOO}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optionalLoop("FOO");
          }).to.not.throw();
        });

        it("should call the result handler exactly 3 times", () => {
          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            resultCount++;
          });
          expect(resultCount).to.equal(3);
        });
      });
    });

    describe("nested functionality", () => {
      describe("optionalLoop(segmentId, resultHandler)", () => {
        it("should call the nested result handler exactly 3 times", () => {
          const message = `${FOO}${BAR}${BAR}${FOO}${FOO}${BAR}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            iter.optionalLoop("BAR", () => {
              resultCount++;
            });
          });
          expect(resultCount).to.equal(3);
        });
      });

      describe("required(segmentId, resultHandler)", () => {
        it("should throw an error when a required nested segment is not present", () => {
          const message = `${FOO}${BAR}${FOO}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          let resultCount = 0;
          expect(() => {
            iter.optionalLoop("FOO", () => {
              iter.required("BAR", () => {
                resultCount++;
              });
            });
          }).to.throw();

          expect(resultCount).to.equal(1);
        });

        it("should call the nested result handler exactly 2 times", () => {
          const message = `${FOO}${BAR}${FOO}${BAR}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            iter.required("BAR", () => {
              resultCount++;
            });
          });
          expect(resultCount).to.equal(2);
        });
      });

      describe("optional(segmentId, resultHandler)", () => {
        it("should NOT throw an error when an optional nested segment is not present", () => {
          const message = `${FOO}${BAR}${FOO}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          let resultCount = 0;
          expect(() => {
            iter.optionalLoop("FOO", () => {
              iter.optional("BAR", () => {
                resultCount++;
              });
            });
          }).to.not.throw();

          expect(resultCount).to.equal(1);
        });

        it("should call the nested result handler exactly 2 times", () => {
          const message = `${FOO}${BAR}${FOO}${BAR}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          let resultCount = 0;
          iter.optionalLoop("FOO", () => {
            iter.optional("BAR", () => {
              resultCount++;
            });
          });
          expect(resultCount).to.equal(2);
        });
      });
    });
  });

  describe("required(segmentId, resultHandler)", () => {
    describe("empty messages", () => {
      it("should throw an error", () => {
        const message = "";
        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let resultCount = 0;
        expect(() => {
          iter.required("FOO", () => {
            resultCount++;
          });
        }).to.throw("expected 'FOO', but received 'EOF'");
        expect(resultCount).to.equal(0);
      });
    });

    describe("optionalLoop passes segment data to the result handler", () => {
      let actualResult;

      it("should parse one line of input", () => {
        const message = `${FOO}`;
        const expectedResult = [
          {
            fieldA: "FOO",
            fieldB: "A HUMBLE FOO SEGMENT",
          },
        ];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];
        iter.required("FOO", (result) => {
          actualResult.push(result);
        });
        expect(actualResult).to.deep.equal(expectedResult);
      });

      it("should pass undefined to the result handler on EOF", () => {
        const message = ``;
        const expectedResult = [undefined];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];

        iter.required("EOF", (result) => {
          actualResult.push(result);
        });

        expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    describe("handling unexpected segments", () => {
      it("should throw an error", () => {
        const message = `${BAR}${FOO}`;
        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let resultCount = 0;
        expect(() => {
          iter.required("FOO", () => {
            resultCount++;
          });
        }).to.throw("expected 'FOO', but received 'BAR'");
        expect(resultCount).to.equal(0);
      });
    });

    describe("handling EOF", () => {
      it("should throw an error", () => {
        const message = `${BAR}`;
        const iter = new SegmentIterator(message, SEGMENT_PARSER);

        iter.required("BAR");

        let resultCount = 0;
        expect(() => {
          iter.required("FOO", () => {
            resultCount++;
          });
        }).to.throw("expected 'FOO', but received 'EOF'");
        expect(resultCount).to.equal(0);
      });
    });

    describe("handling expected segments", () => {
      it("should read exactly one required segment", () => {
        const message = `${FOO}${FOO}`;
        const iter = new SegmentIterator(message, SEGMENT_PARSER);

        let resultCount = 0;

        iter.required("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(1);
      });
    });

    describe("nested functionality", () => {
      /*
        To be clear, "nested iterator functionality" for required segments 
        is a supported, but discouraged and ineloquent approach. 

        Developers should prefer a sequential approach, e.g.: 
          iterator.required('FOO', () ==> {...})
          iterator.required('BAR', () ==> {...})
          iterator.required('BAZ', () ==> {...})
        
        to a nested approach
          iterator.required('FOO', () ==> {
            iterator.required('BAR', () ==> {
              iterator.required('BAZ', () ==> {...})
            })
          })

        using nested iterator functionality for an required segment is likely 
        to lead to confusing and inevitably undesirable results. 
      */

      describe("the nested required segment is unexpected", () => {
        it("should throw an error without calling the nested result handler on EOF", () => {
          const message = `${FOO}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);
          let barCount = 0;
          expect(() => {
            iter.required("FOO", () => {
              iter.required("BAR", () => {
                barCount++;
              });
            });
          }).to.throw("expected 'BAR', but received 'EOF'");

          expect(barCount).to.equal(0);
        });

        it("should throw an error without calling the nested result handler on BAZ", () => {
          const message = `${FOO}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);
          let barCount = 0;
          expect(() => {
            iter.required("FOO", () => {
              iter.required("BAR", () => {
                barCount++;
              });
            });
          }).to.throw("expected 'BAR', but received 'BAZ'");

          expect(barCount).to.equal(0);
        });
      });

      describe("the call the nested result handler without throwing an error", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${BAR}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.required("FOO", () => {
              iter.required("BAR");
            });
          }).to.not.throw();
        });

        it("should call the nested result handler exactly once", () => {
          let barCount = 0;

          iter.required("FOO", () => {
            iter.required("BAR", () => {
              barCount++;
            });
          });

          expect(barCount).to.equal(1);
        });
      });
    });
  });

  describe("optional(segmentId, resultHandler)", () => {
    describe("empty messages", () => {
      let iter;
      beforeEach(() => {
        const message = "";
        iter = new SegmentIterator(message, SEGMENT_PARSER);
      });

      it("should NOT throw an error", () => {
        expect(() => {
          iter.optional("FOO");
        }).to.not.throw();
      });

      it("should call the result handler exactly 0 times", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(0);
      });
    });

    describe("optionalLoop passes segment data to the result handler", () => {
      let actualResult;

      it("should parse one line of input", () => {
        const message = `${FOO}`;
        const expectedResult = [
          {
            fieldA: "FOO",
            fieldB: "A HUMBLE FOO SEGMENT",
          },
        ];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];
        iter.optional("FOO", (result) => {
          actualResult.push(result);
        });
        expect(actualResult).to.deep.equal(expectedResult);
      });

      it("should pass undefined to the result handler on EOF", () => {
        const message = ``;
        const expectedResult = [undefined];

        const iter = new SegmentIterator(message, SEGMENT_PARSER);
        let actualResult = [];

        iter.optional("EOF", (result) => {
          actualResult.push(result);
        });

        expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    describe("handling unexpected segments", () => {
      let iter;
      beforeEach(() => {
        const message = `${BAR}${FOO}`;

        iter = new SegmentIterator(message, SEGMENT_PARSER);
      });
      it("should NOT throw an error", () => {
        expect(() => {
          iter.optional("FOO");
        }).to.not.throw();
      });

      it("should call the result handler exactly 0 times", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(0);
      });

      it("should not consume unexpected segments", () => {
        let resultCount = 0;
        iter.optional("FOO"); // try (and fail) to parse a FOO segment
        iter.optional("BAR", () => {
          // proves that the previous attempt at 'FOO' did not consume the BAR segment
          resultCount++;
        });
        expect(resultCount).to.equal(1);
      });
    });

    describe("handling EOF", () => {
      // TODO: consider the validity of this scenario in the context of optionalLoop and required

      let iter;
      beforeEach(() => {
        const message = `${BAR}`;
        iter = new SegmentIterator(message, SEGMENT_PARSER);
        iter.optional("BAR"); // consume the segment
      });

      it("should NOT throw an error", () => {
        expect(() => {
          iter.optional("FOO");
        }).to.not.throw();
      });

      it("should call the FOO result handler exactly 0 times", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(0);
      });

      it("should call the EOF result handler exactly 1 time", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("EOF", (result) => {
          resultCount++;
        });
        expect(resultCount).to.equal(1);
      });
    });

    describe("handling expected segments", () => {
      let iter;
      beforeEach(() => {
        const message = `${FOO}${BAR}`;
        iter = new SegmentIterator(message, SEGMENT_PARSER);
      });

      it("should NOT throw an error", () => {
        expect(() => {
          iter.optional("FOO");
        }).to.not.throw();
      });

      it("should call the FOO result handler exactly 1 time", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("FOO", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(1);
      });

      it("should call the BAR result handler exactly 1 time ", () => {
        // TODO: make the equivalent of this for REQUIRED
        let resultCount = 0;
        iter.optional("FOO");
        iter.optional("BAR", () => {
          resultCount++;
        });
        expect(resultCount).to.equal(1);
      });
    });

    describe("nested functionality", () => {
      /*
        To be clear, "nested iterator functionality" for optional segments 
        is a supported, but discouraged and ineloquent approach. 

        Developers should prefer a sequential approach, e.g.: 
          iterator.optional('FOO', () ==> {...})
          iterator.optional('BAR', () ==> {...})
          iterator.optional('BAZ', () ==> {...})
        
        to a nested approach
          iterator.optional('FOO', () ==> {
            iterator.optional('BAR', () ==> {
              iterator.optional('BAZ', () ==> {...})
            })
          })

        using nested iterator functionality for an optional segment is likely 
        to lead to confusing and inevitably undesirable results. 
      */

      describe("the nested optional segment is not BAR", () => {
        it("should NEITHER throw an error nor call the nested result handler on EOF", () => {
          let barCount = 0;
          const message = `${FOO}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          expect(() => {
            iter.optional("FOO", () => {
              iter.optional("BAR", () => {
                barCount++;
              });
            });
          }).to.not.throw();

          expect(barCount).to.equal(0);
        });

        it("should NEITHER throw an error nor call the nested result handler on BAZ", () => {
          let barCount = 0;
          const message = `${FOO}${BAZ}`;
          const iter = new SegmentIterator(message, SEGMENT_PARSER);

          expect(() => {
            iter.optional("FOO", () => {
              iter.optional("BAR", () => {
                barCount++;
              });
            });
          }).to.not.throw();

          expect(barCount).to.equal(0);
        });
      });

      describe("the nested optional segment is BAR", () => {
        let iter;
        beforeEach(() => {
          const message = `${FOO}${BAR}`;
          iter = new SegmentIterator(message, SEGMENT_PARSER);
        });

        it("should NOT throw an error", () => {
          expect(() => {
            iter.optional("FOO", () => {
              iter.optional("BAR");
            });
          }).to.not.throw();
        });

        it("should call the nested result handler exactly once", () => {
          let barCount = 0;

          iter.optional("FOO", () => {
            iter.optional("BAR", () => {
              barCount++;
            });
          });

          expect(barCount).to.equal(1);
        });
      });
    });
  });
});
