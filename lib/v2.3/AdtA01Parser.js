const SegmentIterator = require("../SegmentIterator");
const buildContext = require("../buildContext");
const SegmentParser = require("./SegmentParser");

class AdtA01Parser {
  constructor() {}

  createSegmentParser(context) {
    return new SegmentParser(context);
  }

  parseMessage(message, model = {}) {
    const context = buildContext(message);
    const segmentParser = this.createSegmentParser(context);
    const iter = new SegmentIterator(message, segmentParser);

    // Message Header (required)
    iter.required("MSH", (messageHeader) => {
      this.extractMessageHeader(messageHeader, model);
    });

    // Event Type (required)
    iter.required("EVN", (eventType) => {
      this.extractEventType(eventType, model);
    });

    // Patient Identification (required)
    iter.required("PID", (patientIdentification) => {
      this.extractPatientIdentification(patientIdentification, model);
    });

    // Patient Demographic (optional)
    iter.optional("PD1", (patientDemographic) => {
      this.extractPatientDemographic(patientDemographic, model);
    });

    // Next of Kin loop (optional)
    iter.loop("NK1", (nextOfKin) => {
      this.extractNextOfKin(nextOfKin, model);
    });

    // Patient Visit (required)
    iter.required("PV1", (patientVisit) => {
      this.extractPatientVisit(patientVisit, model);
    });

    // Patient Visit - additional information (optional)
    iter.optional("PV2", (patientVisit2) => {
      this.extractPatientVisit(patientVisit2, model);
    });

    // Disability Segment (optional)
    iter.loop("DB1", (result) => {
      this.extractDisability(result, model);
    });

    // Observation Segment (optional)
    iter.loop("OBX", (result) => {
      this.extractObservation(result, model);
    });

    // Patient Allergy Information (optional)
    iter.loop("AL1", (result) => {
      this.extractPatientAllergyInfo(result, model);
    });

    // Diagnosis (optional)
    iter.loop("DG1", (result) => {
      this.extractDiagnosis(result, model);
    });

    // Diagnosis Related Group (optional)
    iter.optional("DRG", (drg) => {
      this.extractDiagnosisRelatedGroup(drg, model);
    });

    // Procedure loop (optional)
    iter.loop("PR1", (procedure) => {
      this.extractProcedure(procedure, model);

      iter.loop("ROL", (role) => {
        this.extractRole(role, model);
      });
    });

    // Guarantor (optional)
    iter.loop("GT1", (guarantor) => {
      this.extractGuarantor(guarantor, model);
    });

    // Insurance loop (optional)
    iter.loop("IN1", (insurance1) => {
      this.extractInsurance1(insurance1, model);

      iter.optional("IN2", (insurance2) => {
        this.extractInsurance2(insurance2, model);
      });

      iter.optional("IN3", (insurance3) => {
        this.extractInsurance3(insurance3, model);
      });
    });

    // Accident (optional)
    iter.optional("ACC", (accident) => {
      this.extractAccident(accident, model);
    });

    // UB82 data (optional)
    iter.optional("UB1", (ub1) => {
      this.extractUB1(ub1, model);
    });

    // UB92 data (optional)
    iter.optional("UB2", (ub2) => {
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
    model["GT1"] = guarantor;
  }

  extractInsurance1(insurance1, model) {
    if (model["IN1"] === undefined) {
      model["IN1"] = [];
    }
    // console.log("EXTRACTING INSURANCE 1");
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
