const getSegmentID = require("../../getSegmentID");
const EventTypeParser = require("./EventTypeParser");
const MessageHeaderParser = require("./MessageHeaderParser");
const NextOfKinParser = require("./NextOfKinParser");
const PatientIdentificationParser = require("./PatientIdentificationParser");
const PatientVisitParser = require("./PatientVisitParser");
const ProceduresParser = require("./ProceduresParser");
const RoleParser = require("./RoleParser");

class AdtA01Parser {
  constructor(context) {
    this.context = context;
    this.messageHeaderParser = new MessageHeaderParser(context);
    this.eventTypeParser = new EventTypeParser(context);
    this.patientIdentificationParser = new PatientIdentificationParser(context);
    this.nextOfKinParser = new NextOfKinParser(context);
    this.patientVisitParser = new PatientVisitParser(context);
    this.procedureParser = new ProceduresParser(context);
    this.roleParser = new RoleParser(context);
  }

  handleMessageHeader(messageHeader) {
    // noop
  }

  handleEventType(eventType) {
    // noop
  }

  handlePatientIdentification(patientIdentification) {
    // noop
  }

  handleNextOfKinLoopStart() {
    // noop
  }

  handleNextOfKinLoopFinish() {}

  handleNextOfKin(nextOfKin) {
    // noop
  }

  handlePatientVisit(patientVisit) {
    // noop
  }

  handleProceduresLoopStart() {
    // noop
  }

  handleProceduresLoopFinish() {
    // noop
  }

  handleProcedures(procedures) {
    // noop
  }

  handleRole(role) {
    // noop
  }

  /**
   *
   * @returns the finished product of the parse
   */
  handleParsingFinished() {}

  parseMessage(adtA01message) {
    const lines = adtA01message.split("\n");

    let currentLine = 0;

    //
    // Message Header
    //
    if (getSegmentID(lines[currentLine], this.context) === "MSH") {
      this.handleMessageHeader(
        this.messageHeaderParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error("expected an MSH (Message Header) segment");
    }

    //
    // Event Type
    //
    if (getSegmentID(lines[currentLine], this.context) === "EVN") {
      this.handleEventType(
        this.eventTypeParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error("expected an EVN (Event Type) segment");
    }

    //
    // Patient Identification
    //
    if (getSegmentID(lines[currentLine], this.context) === "PID") {
      this.handlePatientIdentification(
        this.patientIdentificationParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error("expected a PID (Patient Identification) segment");
    }

    if (getSegmentID(lines[currentLine], this.context) === "PD1") {
      // console.log("\n\n\t << skipping PD1 segment >> ");
      // noop
    }

    //
    // Next of Kin loop
    //
    if (getSegmentID(lines[currentLine], this.context) === "NK1") {
      this.handleNextOfKinLoopStart();
      do {
        this.handleNextOfKin(
          this.nextOfKinParser.parseSegment(lines[currentLine++])
        );
      } while (getSegmentID(lines[currentLine], this.context) === "NK1");
      this.handleNextOfKinLoopFinish();
    }

    //
    // Patient Visit
    //
    if (getSegmentID(lines[currentLine], this.context) === "PV1") {
      this.handlePatientVisit(
        this.patientVisitParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error("expected a PV1 (Patient Visit) segment");
    }

    //
    // Procedures loop
    //
    if (getSegmentID(lines[currentLine], this.context) === "PR1") {
      this.handleProceduresLoopStart();
      do {
        this.handleProcedures(
          this.procedureParser.parseSegment(lines[currentLine++])
        );
        if (getSegmentID(lines[currentLine]) === "ROL") {
          this.handleRole(this.roleParser.parseSegment(lines[currentLine++]));
        }
      } while (getSegmentID(lines[currentLine], this.context) === "PR1");
      this.handleProceduresLoopFinish();
    }

    return this.handleParsingFinished();
  }
}

module.exports = AdtA01Parser;
