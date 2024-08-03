const DisabilityParser = require("./segments/DisabilityParser");
const EventTypeParser = require("./segments/EventTypeParser");
const MessageHeaderParser = require("./segments/MessageHeaderParser");
const ObservationParser = require("./segments/ObservationParser");
const PatientDemographicParser = require("./segments/PatientDemographicParser");
const PatientIdentificationParser = require("./segments/PatientIdentificationParser");
const PatientVisit2Parser = require("./segments/PatientVisit2Parser");
const PatientVisitParser = require("./segments/PatientVisitParser");
const SegmentIterator = require("../SegmentIterator");

class AdtA02Parser {
  constructor(context) {
    this.context = context;

    this.mshParser = new MessageHeaderParser(context);
    this.evnParser = new EventTypeParser(context);
    this.pidParser = new PatientIdentificationParser(context);
    this.pd1Parser = new PatientDemographicParser(context);
    this.pv1Parser = new PatientVisitParser(context);
    this.pv2Parser = new PatientVisit2Parser(context);
    this.db1Parser = new DisabilityParser(context);
    this.obxParser = new ObservationParser(context);
  }

  parseMessage(adtA02message, model = {}) {
    const iter = new SegmentIterator(adtA02message);

    iter.required("MSH", this.mshParser, (messageHeader) => {
      this.extractMessageHeader(messageHeader, model);
    });

    iter.required("EVN", this.evnParser, (eventType) => {
      this.extractEventType(eventType, model);
    });

    iter.required("PID", this.pidParser, (patientIdentification) => {
      this.extractPatientIdentification(patientIdentification, model);
    });

    iter.optional("PD1", this.pd1Parser, (patientDemographic) => {
      this.extractPatientDemographic(patientDemographic, model);
    });

    iter.required("PV1", this.pv1Parser, (patientVisit) => {
      this.extractPatientVisit(patientVisit, model);
    });

    iter.optional("PV2", this.pv2Parser, (patientVisit2) => {
      this.extractPatientVisit2(patientVisit2, model);
    });

    iter.loop("DB1", this.db1Parser, (disability) => {
      this.extractDisability(disability, model);
    });

    iter.loop("OBX", this.obxParser, (observation) => {
      this.extractObservation(observation, model);
    });

    return model;
  }

  extractMessageHeader(messageHeader, model) {
    model["MSH"] = messageHeader;
  }

  extractEventType(eventType, model) {
    model["EVN"] = eventType;
  }

  extractPatientIdentification(patientIdentification, model) {
    model["PID"] = patientIdentification;
  }

  extractPatientDemographic(patientDemographic, model) {
    model["PD1"] = patientDemographic;
  }

  extractPatientVisit(patientVisit, model) {
    model["PV1"] = patientVisit;
  }

  extractPatientVisit2(patientVisit2, model) {
    model["PV2"] = patientVisit2;
  }

  extractDisability(disability, model) {
    if (model["DB1"] === undefined) {
      model["DB1"] = [];
    }
    model["DB1"].push(disability);
  }

  extractObservation(observation, model) {
    if (model["OBX"] === undefined) {
      model["OBX"] = [];
    }
    model["OBX"].push(observation);
  }
}

module.exports = AdtA02Parser;
