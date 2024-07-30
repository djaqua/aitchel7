const getSegmentID = require("../../getSegmentID");
const EventTypeParser = require("./EventTypeParser");
const MessageHeaderParser = require("./MessageHeaderParser");
const NextOfKinParser = require("./NextOfKinParser");
const PatientDemographicParser = require("./PatientDemographicParser");
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
    this.patientDemographicParser = new PatientDemographicParser(context);
  }

  parseMessage(adtA01message, model = {}) {
    const lines = adtA01message.split("\n");

    let currentLine = 0;

    //
    // Message Header
    //
    if (getSegmentID(lines[currentLine], this.context) === "MSH") {
      this.handleMessageHeader(
        model,
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
        model,
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
        model,
        this.patientIdentificationParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error("expected a PID (Patient Identification) segment");
    }

    //
    // Patient Demographic
    //
    if (getSegmentID(lines[currentLine], this.context) === "PD1") {
      this.handlePatientDemographic(
        model,
        this.patientDemographicParser.parseSegment(lines[currentLine++])
      );
    }

    //
    // Next of Kin loop
    //
    if (getSegmentID(lines[currentLine], this.context) === "NK1") {
      do {
        this.handleNextOfKin(
          model,
          this.nextOfKinParser.parseSegment(lines[currentLine++])
        );
      } while (getSegmentID(lines[currentLine], this.context) === "NK1");
    }

    //
    // Patient Visit
    //
    if (getSegmentID(lines[currentLine], this.context) === "PV1") {
      this.handlePatientVisit(
        model,
        this.patientVisitParser.parseSegment(lines[currentLine++])
      );
    } else {
      throw new Error(
        `expected a PV1 (Patient Visit) segment, but received ${getSegmentID(
          lines[currentLine]
        )}`
      );
    }

    //
    // Patient Visit - additional information
    //
    if (getSegmentID(lines[currentLine], this.context) === "PV2") {
      currentLine++; // currently unsupported
    }

    //
    // Disability Segment
    //
    if (getSegmentID(lines[currentLine], this.context) === "DB1") {
      do {
        currentLine++;
      } while (getSegmentID(lines[currentLine], this.context) === "DB1");
    }

    //
    // Observation Segment
    //
    if (getSegmentID(lines[currentLine], this.context) === "OBX") {
      do {
        currentLine++;
      } while (getSegmentID(lines[currentLine], this.context) === "OBX");
    }

    //
    // Patient Allergy Information
    //
    if (getSegmentID(lines[currentLine], this.context) === "AL1") {
      do {
        currentLine++;
      } while (getSegmentID(lines[currentLine], this.context) === "AL1");
    }

    //
    // Diagnosis
    //
    if (getSegmentID(lines[currentLine], this.context) === "DG1") {
      do {
        currentLine++;
      } while (getSegmentID(lines[currentLine], this.context) === "DG1");
    }

    //
    // Diagnosis Related Group
    //
    if (getSegmentID(lines[currentLine], this.context) === "DRG") {
      currentLine++; // currently unsupported
    }

    //
    // Procedure loop
    //
    if (getSegmentID(lines[currentLine], this.context) === "PR1") {
      do {
        this.handleProcedures(
          model,
          this.procedureParser.parseSegment(lines[currentLine++])
        );
        if (getSegmentID(lines[currentLine]) === "ROL") {
          this.handleRole(
            model,
            this.roleParser.parseSegment(lines[currentLine++])
          );
        }
      } while (getSegmentID(lines[currentLine], this.context) === "PR1");
    }

    //
    // Guarantor
    //
    if (getSegmentID(lines[currentLine], this.context) === "GT1") {
      currentLine++; // currently unsupported
    }

    //
    // Insurance loop
    //
    if (getSegmentID(lines[currentLine], this.context) === "IN1") {
      do {
        currentLine++;
        if (getSegmentID(lines[currentLine]) === "IN2") {
          currentLine++;
        }
        if (getSegmentID(lines[currentLine]) === "IN3") {
          currentLine++;
        }
      } while (getSegmentID(lines[currentLine], this.context) === "IN1");
    }

    //
    // Accident
    //
    if (getSegmentID(lines[currentLine], this.context) === "ACC") {
      currentLine++; // currently unsupported
    }

    //
    // UB82 data
    //
    if (getSegmentID(lines[currentLine], this.context) === "UB1") {
      currentLine++; // currently unsupported
    }

    //
    // UB92 data
    //
    if (getSegmentID(lines[currentLine], this.context) === "UB2") {
      currentLine++; // currently unsupported
    }

    return model;
  }

  handleMessageHeader(model, messageHeader) {
    // noop
  }

  handleEventType(model, eventType) {
    // noop
  }

  handlePatientDemographic(model, patientDemographic) {
    // noop
  }

  handlePatientIdentification(model, patientIdentification) {
    // noop
  }

  handleNextOfKin(model, nextOfKin) {
    // noop
  }

  handlePatientVisit(model, patientVisit) {
    // noop
  }

  handleProcedures(model, procedures) {
    // noop
  }

  handleRole(model, role) {
    // noop
  }
}

module.exports = AdtA01Parser;
