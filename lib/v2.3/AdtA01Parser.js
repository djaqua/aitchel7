const AccidentParser = require("./segments/AccidentParser");
const DiagnosisParser = require("./segments/DiagnosisParser");
const DiagnosisRelatedGroupParser = require("./segments/DiagnosisRelatedGroupParser");
const DisabilityParser = require("./segments/DisabilityParser");
const EventTypeParser = require("./segments/EventTypeParser");
const GuarantorParser = require("./segments/GuarantorParser");
const Insurance1Parser = require("./segments/Insurance1Parser");
const Insurance2Parser = require("./segments/Insurance2Parser");
const Insurance3Parser = require("./segments/Insurance3Parser");
const MessageHeaderParser = require("./segments/MessageHeaderParser");
const NextOfKinParser = require("./segments/NextOfKinParser");
const ObservationParser = require("./segments/ObservationParser");
const PatientAllergyParser = require("./segments/PatientAllergyInfoParser");
const PatientDemographicParser = require("./segments/PatientDemographicParser");
const PatientIdentificationParser = require("./segments/PatientIdentificationParser");
const PatientVisit2Parser = require("./segments/PatientVisit2Parser");
const PatientVisitParser = require("./segments/PatientVisitParser");
const ProceduresParser = require("./segments/ProceduresParser");
const RoleParser = require("./segments/RoleParser");
const SegmentIterator = require("../SegmentIterator");
const UB1Parser = require("./segments/UB1Parser");
const UB2Parser = require("./segments/UB2Parser");

class AdtA01Parser {
  constructor(context) {
    this.context = context;

    this.mshParser = new MessageHeaderParser(context);
    this.evnParser = new EventTypeParser(context);
    this.pidParser = new PatientIdentificationParser(context);
    this.pd1Parser = new PatientDemographicParser(context);
    this.nk1Parser = new NextOfKinParser(context);
    this.pv1Parser = new PatientVisitParser(context);
    this.pv2Parser = new PatientVisit2Parser(context);
    this.db1Parser = new DisabilityParser(context);
    this.obxParser = new ObservationParser(context);
    this.al1Parser = new PatientAllergyParser(context);
    this.dg1Parser = new DiagnosisParser(context);
    this.drgParser = new DiagnosisRelatedGroupParser(context);
    this.pr1Parser = new ProceduresParser(context);
    this.rolParser = new RoleParser(context);
    this.gt1Parser = new GuarantorParser(context);
    this.in1Parser = new Insurance1Parser(context);
    this.in2Parser = new Insurance2Parser(context);
    this.in3Parser = new Insurance3Parser(context);
    this.accParser = new AccidentParser(context);
    this.ub1Parser = new UB1Parser(context);
    this.ub2Parser = new UB2Parser(context);
  }

  /**
   *
   * @param {*} adtA01message
   * @param {*} model
   * @returns
   */
  parseMessage(adtA01message, model = {}) {
    const iter = new SegmentIterator(adtA01message);

    // Message Header (required)
    iter.required("MSH", this.mshParser, (messageHeader) => {
      this.extractMessageHeader(messageHeader, model);
    });

    // Event Type (required)
    iter.required("EVN", this.evnParser, (eventType) => {
      this.extractEventType(eventType, model);
    });

    // Patient Identification (required)
    iter.required("PID", this.pidParser, (patientIdentification) => {
      this.extractPatientIdentification(patientIdentification, model);
    });

    // Patient Demographic (optional)
    iter.optional("PD1", this.pd1Parser, (patientDemographic) => {
      this.extractPatientDemographic(patientDemographic, model);
    });

    // Next of Kin loop (optional)
    iter.loop("NK1", this.nk1Parser, (nextOfKin) => {
      this.extractNextOfKin(nextOfKin, model);
    });

    // Patient Visit (required)
    iter.required("PV1", this.pv1Parser, (patientVisit) => {
      this.extractPatientVisit(patientVisit, model);
    });

    // Patient Visit - additional information (optional)
    iter.optional("PV2", this.pv2Parser, (patientVisit2) => {
      this.extractPatientVisit(patientVisit2, model);
    });

    // Disability Segment (optional)
    iter.loop("DB1", this.db1Parser, (result) => {
      this.extractDisability(result, model);
    });

    // Observation Segment (optional)
    iter.loop("OBX", this.obxParser, (result) => {
      this.extractObservation(result, model);
    });

    // Patient Allergy Information (optional)
    iter.loop("AL1", this.al1Parser, (result) => {
      this.extractPatientAllergyInfo(result, model);
    });

    // Diagnosis (optional)
    iter.loop("DG1", this.dg1Parser, (result) => {
      this.extractDiagnosis(result, model);
    });

    // Diagnosis Related Group (optional)
    iter.optional("DRG", this.drgParser, (drg) => {
      this.extractDiagnosisRelatedGroup(drg, model);
    });

    // Procedure loop (optional)
    iter.loop("PR1", this.pr1Parser, (procedure) => {
      this.extractProcedure(procedure, model);

      iter.loop("ROL", this.rolParser, (role) => {
        this.extractRole(role, model);
      });
    });

    // Guarantor (optional)
    iter.loop("GT1", this.gt1Parser, (guarantor) => {
      this.extractGuarantor(guarantor, model);
    });

    // Insurance loop (optional)
    iter.loop("IN1", this.in1Parser, (insurance1) => {
      this.extractInsurance1(insurance1, model);
      iter.optional("IN2", this.in2Parser, (insurance2) => {
        this.extractInsurance2(insurance2, model);
      });
      iter.optional("IN3", this.in3Parser, (insurance3) => {
        this.extractInsurance3(insurance3, model);
      });
    });

    // Accident (optional)
    iter.optional("ACC", this.accParser, (accident) => {
      this.extractAccident(accident, model);
    });

    // UB82 data (optional)
    iter.optional("UB1", this.ub1Parser, (ub1) => {
      this.extractUB1(ub1, model);
    });

    // UB92 data (optional)
    iter.optional("UB2", this.ub2Parser, (ub2) => {
      this.extractUB2(ub2, model);
    });

    return model;
  }

  extractMessageHeader(messageHeader, model) {
    model["MSH"] = messageHeader;
  }

  extractEventType(eventType, model) {
    model["EVN"] = eventType;
  }

  extractPatientDemographic(patientDemographic, model) {
    model["PD1"] = patientDemographic;
  }

  extractPatientIdentification(patientIdentification, model) {
    model["PID"] = patientIdentification;
  }

  extractNextOfKin(nextOfKin, model) {
    if (model["NK1"] === undefined) {
      model["NK1"] = [];
    }
    model["NK1"].push(nextOfKin);
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

  extractPatientAllergyInfo(patientAllergyInfo, model) {
    if (model["AL1"] === undefined) {
      model["AL1"] = [];
    }
    model["AL1"].push(patientAllergyInfo);
  }

  extractDiagnosis(diagnosis, model) {
    if (model["DG1"] === undefined) {
      model["DG1"] = [];
    }
    model["DG1"].push(diagnosis);
  }

  extractDiagnosisRelatedGroup(diagnosisRelatedGroup, model) {
    model["DRG"] = diagnosisRelatedGroup;
  }

  extractProcedure(procedures, model) {
    if (model["PR1"] === undefined) {
      model["PR1"] = [];
    }
    model["PR1"].push(procedures);
  }

  extractRole(role, model) {
    const currentProcedure = model["PR1"][model["PR1"].length - 1];

    if (currentProcedure === undefined) {
      return;
    }

    if (currentProcedure["ROL"] === undefined) {
      currentProcedure["ROL"] = [];
    }
    currentProcedure["ROL"].push(role);
  }

  extractGuarantor(guarantor, model) {
    if (model["GT1"] === undefined) {
      model["GT1"] = [];
    }
    model["GT1"].push(guarantor);
  }

  extractInsurance1(insurance1, model) {
    if (model["IN1"] === undefined) {
      model["IN1"] = [];
    }
    model["IN1"].push(insurance1);
  }

  #getCurrentInsurance1(model) {
    return model["IN1"][model["IN1"].length - 1];
  }

  extractInsurance2(insurance2, model) {
    const currentInsurance1 = this.#getCurrentInsurance1(model);
    if (currentInsurance1 === undefined) {
      return;
    }
    currentInsurance1["IN2"] = insurance2;
  }

  extractInsurance3(insurance3, model) {
    const currentInsurance1 = this.#getCurrentInsurance1(model);
    if (currentInsurance1 === undefined) {
      return;
    }
    currentInsurance1["IN3"] = insurance3;
  }

  extractAccident(accident, model) {
    model["ACC"] = accident;
  }

  extractUB1(ub1, model) {
    model["UB1"] = ub1;
  }

  extractUB2(ub2, model) {
    model["UB2"] = ub2;
  }
}

module.exports = AdtA01Parser;
