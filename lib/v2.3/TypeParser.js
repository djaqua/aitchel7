const unescape = require("./../unescape");

class TypeParser {
  constructor(context) {
    this.context = context;

    this.separatorStack = [
      context.subcomponentSeparator,
      context.repetitionSeparator,
      context.componentSeparator,
    ];
  }

  parseType(type, id, value) {
    switch (type) {
      case "CE":
        return this.parseTypeCE(value, id);

      case "CM_AUI":
        return this.parseTypeCM_AUI(value, id);

      case "CM_DDI":
        return this.parseTypeCM_DDI(value, id);

      case "CM_DLD":
        return this.parseTypeCM_DLD(value, id);

      case "CM_DTN":
        return this.parseTypeCM_DTN(value, id);

      case "CM_MSG":
        return this.parseTypeCM_MSG(value, id);

      case "CM_OCD":
        return this.parseTypeCM_OCD(value, id);

      case "CM_OSP":
        return this.parseTypeCM_OSP(value, id);

      case "CM_PCF":
        return this.parseTypeCM_PCF(value, id);

      case "CM_PEN":
        return this.parseTypeCM_PEN(value, id);

      case "CM_PTA":
        return this.parseTypeCM_PTA(value, id);

      case "CM_RMC":
        return this.parseTypeCM_RMC(value, id);

      case "CM_UVC":
        return this.parseTypeCM_UVC(value, id);

      case "CP":
        return this.parseTypeCP(value, id);

      case "CX":
        return this.parseTypeCX(value, id);

      case "DLN":
        return this.parseTypeDLN(value, id);

      case "DT":
        return this.parseTypeDT(value, id);

      case "EI":
        return this.parseTypeEI(value, id);

      case "FC":
        return this.parseTypeFC(value, id);

      case "HD":
        return this.parseTypeHD(value, id);

      case "ID":
        return this.parseTypeID(value, id);

      case "IS":
        return this.parseTypeIS(value, id);

      case "JCC":
        return this.parseTypeJCC(value, id);

      case "MO":
        return this.parseTypeMO(value, id);

      case "NM":
        return this.parseTypeNM(value, id);

      case "PL":
        return this.parseTypePL(value, id);

      case "PT":
        return this.parseTypePT(value, id);

      case "SI":
        return this.parseTypeSI(value, id);

      case "ST":
        return this.parseTypeST(value, id);

      case "TN":
        return this.parseTypeTN(value, id);

      case "TS":
        return this.parseTypeTS(value, id);

      case "XAD":
        return this.parseTypeXAD(value, id);

      case "XCN":
        return this.parseTypeXCN(value, id);

      case "XON":
        return this.parseTypeXON(value, id);

      case "XPN":
        return this.parseTypeXPN(value, id);

      case "XTN":
        return this.parseTypeXTN(value, id);

      default:
        throw new Error(`Unsupported type '${type}'`);
    }
  }

  /**
   *
   * @returns the next separator character in the stack
   */
  popSeparator() {
    const separator = this.separatorStack.pop();
    if (separator === undefined) {
      throw new Error("already used the last remaining separator");
    }
    return separator;
  }

  /**
   *
   * @param {string} separator
   */
  pushSeparator(separator) {
    this.separatorStack.push(separator);
  }

  //
  // ***************************************************************************
  //                                 Types
  // ***************************************************************************
  //

  parseTypeCE(ceValue, fieldId = "CE") {
    const parsedCE = {};

    if (!ceValue) {
      return parsedCE;
    }

    const separator = this.popSeparator();
    const ceParts = ceValue.split(separator).slice(0, 6);

    switch (ceParts.length) {
      case 6:
        parsedCE[`${fieldId}.6`] = this.parseTypeST(ceParts[5]);
      case 5:
        parsedCE[`${fieldId}.5`] = this.parseTypeST(ceParts[4]);
      case 4:
        parsedCE[`${fieldId}.4`] = this.parseTypeST(ceParts[3]);
      case 3:
        parsedCE[`${fieldId}.3`] = this.parseTypeST(ceParts[2]);
      case 2:
        parsedCE[`${fieldId}.2`] = this.parseTypeST(ceParts[1]);
      case 1:
        parsedCE[`${fieldId}.1`] = this.parseTypeST(ceParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCE;
  }

  parseTypeCM_AUI(cm_auiValue, fieldId = "CM_AUI") {
    const parsedCM_AUI = {};
    if (!cm_auiValue) {
      return parsedCM_AUI;
    }
    const separator = this.popSeparator();
    const cm_auiParts = cm_auiValue.split(separator).slice(0, 3);

    switch (cm_auiParts.length) {
      case 3:
        parsedCM_AUI[`${fieldId}.3`] = this.parseTypeST(cm_auiParts[2]);

      case 2:
        parsedCM_AUI[`${fieldId}.2`] = this.parseTypeDT(cm_auiParts[1]);

      case 1:
        parsedCM_AUI[`${fieldId}.1`] = this.parseTypeST(cm_auiParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_AUI;
  }

  parseTypeCM_DDI(cm_ddiValue, fieldId = "CM_DDI") {
    const parsedCM_DDI = {};
    if (!cm_ddiValue) {
      return parsedCM_DDI;
    }
    const separator = this.popSeparator();

    const cm_ddiParts = cm_ddiValue.split(separator).slice(0, 3);

    switch (cm_ddiParts.length) {
      case 3:
        parsedCM_DDI[`${fieldId}.3`] = this.parseTypeNM(cm_ddiParts[2]);

      case 2:
        parsedCM_DDI[`${fieldId}.2`] = this.parseTypeNM(cm_ddiParts[1]);

      case 1:
        parsedCM_DDI[`${fieldId}.1`] = this.parseTypeNM(cm_ddiParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_DDI;
  }

  parseTypeCM_DLD(cm_dldValue, fieldId = "CM_DLD") {
    const parsedCM_DLD = {};
    if (!cm_dldValue) {
      return parsedCM_DLD;
    }
    const separator = this.popSeparator();
    const cm_dldParts = cm_dldValue.split(separator).slice(0, 2);

    switch (cm_dldParts.length) {
      case 2:
        parsedCM_DLD[`${fieldId}.2`] = this.parseTypeTS(cm_dldParts[1]);

      case 1:
        parsedCM_DLD[`${fieldId}.1`] = this.parseTypeID(cm_dldParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_DLD;
  }

  parseTypeCM_DTN(cm_dtnValue, fieldId = "CM_DTN") {
    const parsedCM_DTN = {};
    if (!cm_dtnValue) {
      return parsedCM_DTN;
    }
    const separator = this.popSeparator();
    const cm_dtnParts = cm_dtnValue.split(separator).slice(0, 2);

    switch (cm_dtnParts.length) {
      case 2:
        parsedCM_DTN[`${fieldId}.2`] = this.parseTypeIS(cm_dtnParts[1]);

      case 1:
        parsedCM_DTN[`${fieldId}.1`] = this.parseTypeNM(cm_dtnParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_DTN;
  }

  parseTypeCM_MSG(msgValue, fieldId = "CM_MSG") {
    const parsedMSG = {};
    if (!msgValue) {
      return parsedMSG;
    }
    const separator = this.popSeparator();

    const msgParts = msgValue.split(separator).slice(0, 2);
    // console.log("msgParts: ", msgParts);
    switch (msgParts.length) {
      case 2:
        parsedMSG[`${fieldId}.2`] = this.parseTypeID(msgParts[1]);

      case 1:
        parsedMSG[`${fieldId}.1`] = this.parseTypeID(msgParts[0]);
    }

    this.pushSeparator(separator);

    return parsedMSG;
  }

  parseTypeCM_OCD(cm_ocdValue, fieldId = "CM_OCD") {
    const parsedCM_OCD = {};
    if (!cm_ocdValue) {
      return parsedCM_OCD;
    }
    const separator = this.popSeparator();
    const cm_ocdParts = cm_ocdValue.split(separator).slice(0, 2);

    switch (cm_ocdParts.length) {
      case 2:
        parsedCM_OCD[`${fieldId}.2`] = this.parseTypeCE(cm_ocdParts[1]);

      case 1:
        parsedCM_OCD[`${fieldId}.1`] = this.parseTypeDT(cm_ocdParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_OCD;
  }

  parseTypeCM_OSP(cm_ocdValue, fieldId = "CM_OSP") {
    const parsedCM_OCD = {};
    if (!cm_ocdValue) {
      return parsedCM_OCD;
    }
    const separator = this.popSeparator();
    const cm_ocdParts = cm_ocdValue.split(separator).slice(0, 2);

    switch (cm_ocdParts.length) {
      case 2:
        parsedCM_OCD[`${fieldId}.3`] = this.parseTypeCE(cm_ocdParts[2]);

      case 2:
        parsedCM_OCD[`${fieldId}.2`] = this.parseTypeDT(cm_ocdParts[1]);

      case 1:
        parsedCM_OCD[`${fieldId}.1`] = this.parseTypeDT(cm_ocdParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_OCD;
  }

  parseTypeCM_PCF(cm_pcfValue, fieldId = "CM_PCF") {
    const parsedCM_PCF = {};
    if (!cm_pcfValue) {
      return parsedCM_PCF;
    }
    const separator = this.popSeparator();

    const cm_pcfParts = cm_pcfValue.split(separator).slice(0, 3);

    switch (cm_pcfParts.length) {
      case 3:
        parsedCM_PCF[`${fieldId}.3`] = this.parseTypeIS(cm_pcfParts[2]);

      case 2:
        parsedCM_PCF[`${fieldId}.2`] = this.parseTypeID(cm_pcfParts[1]);

      case 1:
        parsedCM_PCF[`${fieldId}.1`] = this.parseTypeTS(cm_pcfParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_PCF;
  }

  parseTypeCM_PEN(cm_penValue, fieldId = "CM_PEN") {
    const parsedCM_PEN = {};
    if (!cm_penValue) {
      return parsedCM_PEN;
    }
    const separator = this.popSeparator();
    const cm_penParts = cm_penValue.split(separator).slice(0, 2);

    switch (cm_penParts.length) {
      case 2:
        parsedCM_PEN[`${fieldId}.2`] = this.parseTypeIS(cm_penParts[1]);

      case 1:
        parsedCM_PEN[`${fieldId}.1`] = this.parseTypeNM(cm_penParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_PEN;
  }

  parseTypeCM_PTA(cm_ptaValue, fieldId = "CM_PTA") {
    const parsedCM_PTA = {};
    if (!cm_ptaValue) {
      return parsedCM_PTA;
    }
    const separator = this.popSeparator();

    const cm_ptaParts = cm_ptaValue.split(separator).slice(0, 3);

    switch (cm_ptaParts.length) {
      case 3:
        parsedCM_PTA[`${fieldId}.3`] = this.parseTypeIS(cm_ptaParts[2]);

      case 2:
        parsedCM_PTA[`${fieldId}.2`] = this.parseTypeIS(cm_ptaParts[1]);

      case 1:
        parsedCM_PTA[`${fieldId}.1`] = this.parseTypeNM(cm_ptaParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_PTA;
  }

  parseTypeCM_RMC(cm_rmcValue, fieldId = "CM_RMC") {
    const parsedRMC = {};
    if (!cm_rmcValue) {
      return parsedRMC;
    }
    const separator = this.popSeparator();

    const cm_rmcParts = cm_rmcValue.split(separator).slice(0, 3);

    switch (cm_rmcParts.length) {
      case 3:
        parsedRMC[`${fieldId}.3`] = this.parseTypeIS(cm_rmcParts[2]);

      case 2:
        parsedRMC[`${fieldId}.2`] = this.parseTypeIS(cm_rmcParts[1]);

      case 1:
        parsedRMC[`${fieldId}.1`] = this.parseTypeNM(cm_rmcParts[0]);
    }

    this.pushSeparator(separator);

    return parsedRMC;
  }

  parseTypeCM_UVC(cm_uvcValue, fieldId = "CM_UVC") {
    const parsedCM_UVC = {};
    if (!cm_uvcValue) {
      return parsedCM_UVC;
    }
    const separator = this.popSeparator();
    const cm_uvcParts = cm_uvcValue.split(separator).slice(0, 2);

    switch (cm_uvcParts.length) {
      case 2:
        parsedCM_UVC[`${fieldId}.2`] = this.parseTypeIS(cm_uvcParts[1]);

      case 1:
        parsedCM_UVC[`${fieldId}.1`] = this.parseTypeNM(cm_uvcParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCM_UVC;
  }

  parseTypeCP(cpValue, fieldId = "CP") {
    const parsedCP = {};
    if (!cpValue) {
      return parsedCP;
    }
    const separator = this.popSeparator();
    const cpParts = cpValue.split(separator).slice(0, 6);

    switch (cpParts.length) {
      case 6:
        parsedCP[`${fieldId}.6`] = this.parseTypeID(cpParts[5]);

      case 5:
        parsedCP[`${fieldId}.5`] = this.parseTypeCE(cpParts[4]);

      case 4:
        parsedCP[`${fieldId}.4`] = this.parseTypeNM(cpParts[3]);

      case 3:
        parsedCP[`${fieldId}.3`] = this.parseTypeNM(cpParts[2]);

      case 2:
        parsedCP[`${fieldId}.2`] = this.parseTypeID(cpParts[1]);

      case 1:
        parsedCP[`${fieldId}.1`] = this.parseTypeMO(cpParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCP;
  }

  parseTypeCX(cxValue, fieldId = "CX") {
    const parsedCX = {};
    if (!cxValue) {
      return parsedCX;
    }
    const separator = this.popSeparator();
    const cxParts = cxValue.split(separator).slice(0, 6);

    switch (cxParts.length) {
      case 6:
        parsedCX[`${fieldId}.6`] = this.parseTypeHD(cxParts[5], `${fieldId}.6`);

      case 5:
        parsedCX[`${fieldId}.5`] = this.parseTypeIS(cxParts[4]);

      case 4:
        parsedCX[`${fieldId}.4`] = this.parseTypeHD(cxParts[3], `${fieldId}.4`);

      case 3:
        parsedCX[`${fieldId}.3`] = this.parseTypeID(cxParts[2]);

      case 2:
        parsedCX[`${fieldId}.2`] = this.parseTypeST(cxParts[1]);

      case 1:
        parsedCX[`${fieldId}.1`] = this.parseTypeST(cxParts[0]);
    }

    this.pushSeparator(separator);

    return parsedCX;
  }

  parseTypeDLN(dlnValue, fieldId = "DLN") {
    const parsedDLN = {};
    if (!dlnValue) {
      return parsedDLN;
    }

    const separator = this.popSeparator();
    const dlnParts = dlnValue.split(separator).slice(0, 3);

    switch (dlnParts.length) {
      case 3:
        parsedDLN[`${fieldId}.3`] = this.parseTypeDT(dlnParts[2]);

      case 2:
        parsedDLN[`${fieldId}.2`] = this.parseTypeIS(dlnParts[1]);

      case 1:
        parsedDLN[`${fieldId}.1`] = this.parseTypeST(dlnParts[0]);
    }

    this.pushSeparator(separator);

    return parsedDLN;
  }

  parseTypeDT(dtValue) {
    return dtValue || "";
  }

  parseTypeEI(eiValue, fieldId = "EI") {
    const parsedEI = {};
    if (!eiValue) {
      return parsedEI;
    }

    const separator = this.popSeparator();
    const eiParts = eiValue.split(separator).slice(0, 2);

    switch (eiParts.length) {
      case 4:
        parsedEI[`${fieldId}.4`] = this.parseTypeST(eiParts[3]);
      case 3:
        parsedEI[`${fieldId}.3`] = this.parseTypeIS(eiParts[2]);
      case 2:
        parsedEI[`${fieldId}.2`] = this.parseTypeST(eiParts[1]);
      case 1:
        parsedEI[`${fieldId}.1`] = this.parseTypeID(eiParts[0]);
    }

    this.pushSeparator(separator);

    return parsedEI;
  }

  parseTypeFC(fcValue, fieldId = "FC") {
    const parsedFC = {};
    if (!fcValue) {
      return parsedFC;
    }

    const separator = this.popSeparator();
    const fcParts = fcValue.split(separator).slice(0, 2);

    switch (fcParts.length) {
      case 2:
        parsedFC[`${fieldId}.2`] = this.parseTypeTS(fcParts[1]);
      case 1:
        parsedFC[`${fieldId}.1`] = this.parseTypeIS(fcParts[0]);
    }

    this.pushSeparator(separator);

    return parsedFC;
  }

  parseTypeHD(value, fieldId = "HD") {
    const parsedHD = {};
    if (!value) {
      return parsedHD;
    }
    const separator = this.popSeparator();
    const hdParts = value.split(separator).slice(0, 3);

    switch (hdParts.length) {
      case 3:
        parsedHD[`${fieldId}.3`] = this.parseTypeID(hdParts[2]);

      case 2:
        parsedHD[`${fieldId}.2`] = this.parseTypeST(hdParts[1]);

      case 1:
        parsedHD[`${fieldId}.1`] = this.parseTypeIS(hdParts[0]);
    }
    this.pushSeparator(separator);
    return parsedHD;
  }

  parseTypeID(value) {
    return value || "";
  }

  parseTypeIS(value) {
    return value || "";
  }

  parseTypeJCC(jccValue, fieldId = "JCC") {
    const parsedJCC = {};
    if (!jccValue) {
      return parsedJCC;
    }

    const separator = this.popSeparator();
    const jccParts = jccValue.split(separator).slice(0, 2);

    switch (jccParts.length) {
      case 2:
        parsedJCC[`${fieldId}.2`] = this.parseTypeIS(jccParts[1]);
      case 1:
        parsedJCC[`${fieldId}.1`] = this.parseTypeIS(jccParts[0]);
    }

    this.pushSeparator(separator);

    return parsedJCC;
  }

  parseTypeMO(moValue, fieldId = "MO") {
    const parsedMO = {};
    if (!moValue) {
      return parsedMO;
    }

    const separator = this.popSeparator();
    const moParts = moValue.split(separator).slice(0, 2);

    switch (moParts.length) {
      case 2:
        parsedMO[`${fieldId}.2`] = this.parseTypeID(moParts[1]);
      case 1:
        parsedMO[`${fieldId}.1`] = this.parseTypeNM(moParts[0]);
    }

    this.pushSeparator(separator);

    return parsedMO;
  }

  parseTypeNM(nmValue) {
    // console.log(`Number Value: ${}`, nmValue);
    if (!nmValue && nmValue !== 0) {
      return undefined;
    }

    if (nmValue.toString().indexOf(".") === -1) {
      return parseInt(nmValue);
    } else {
      return parseFloat(nmValue);
    }
  }

  parseTypePL(plValue, fieldId = "PL") {
    const parsedPL = {};
    if (!plValue) {
      return parsedPL;
    }

    const separator = this.popSeparator();
    const plParts = plValue.split(separator).slice(0, 9);

    switch (plParts.length) {
      case 9:
        parsedPL[`${fieldId}.9`] = this.parseTypeST(plParts[8]);
      case 8:
        parsedPL[`${fieldId}.8`] = this.parseTypeIS(plParts[7]);
      case 7:
        parsedPL[`${fieldId}.7`] = this.parseTypeIS(plParts[6]);
      case 6:
        parsedPL[`${fieldId}.6`] = this.parseTypeIS(plParts[5]);
      case 5:
        parsedPL[`${fieldId}.5`] = this.parseTypeIS(plParts[4]);
      case 4:
        parsedPL[`${fieldId}.4`] = this.parseTypeHD(plParts[3], `${fieldId}.4`);
      case 3:
        parsedPL[`${fieldId}.3`] = this.parseTypeIS(plParts[2]);
      case 2:
        parsedPL[`${fieldId}.2`] = this.parseTypeIS(plParts[1]);
      case 1:
        parsedPL[`${fieldId}.1`] = this.parseTypeIS(plParts[0]);
    }

    this.pushSeparator(separator);

    return parsedPL;
  }

  parseTypePT(ptValue, fieldId = "PT") {
    const parsedPT = {};
    if (!ptValue) {
      return parsedPT;
    }

    const separator = this.popSeparator();
    const ptParts = ptValue.split(separator).slice(0, 2);

    switch (ptParts.length) {
      case 2:
        parsedPT[`${fieldId}.2`] = this.parseTypeST(ptParts[1]);
      case 1:
        parsedPT[`${fieldId}.1`] = this.parseTypeST(ptParts[0]);
    }
    this.pushSeparator(separator);
    return parsedPT;
  }

  parseTypeSI(siValue) {
    return Math.abs(this.parseTypeNM(siValue));
  }

  parseTypeST(stValue) {
    return unescape(stValue || "", this.context);
  }

  parseTypeTN(tnValue) {
    return tnValue || "";
  }

  parseTypeTS(tsValue, fieldId = "TS") {
    const parsedTS = {};
    if (!tsValue) {
      return parsedTS;
    }

    const separator = this.popSeparator();
    const tsParts = tsValue.split(separator).slice(0, 1);

    switch (tsParts.length) {
      case 1:
        parsedTS[`${fieldId}.1`] = this.parseTypeST(tsParts[0]);
    }
    this.pushSeparator(separator);
    return parsedTS;
  }

  parseTypeXAD(xadValue, fieldId = "XAD") {
    const parsedXAD = {};
    if (!xadValue) {
      return parsedXAD;
    }

    const separator = this.popSeparator();
    const xadParts = xadValue.split(separator).slice(0, 10);

    switch (xadParts.length) {
      case 10:
        parsedXAD[`${fieldId}.10`] = this.parseTypeIS(xadParts[9]);

      case 9:
        parsedXAD[`${fieldId}.9`] = this.parseTypeIS(xadParts[8]);

      case 8:
        parsedXAD[`${fieldId}.8`] = this.parseTypeST(xadParts[7]);

      case 7:
        parsedXAD[`${fieldId}.7`] = this.parseTypeID(xadParts[6]);

      case 6:
        parsedXAD[`${fieldId}.6`] = this.parseTypeID(xadParts[5]);

      case 5:
        parsedXAD[`${fieldId}.5`] = this.parseTypeST(xadParts[4]);

      case 4:
        parsedXAD[`${fieldId}.4`] = this.parseTypeST(xadParts[3]);

      case 3:
        parsedXAD[`${fieldId}.3`] = this.parseTypeST(xadParts[2]);

      case 2:
        parsedXAD[`${fieldId}.2`] = this.parseTypeST(xadParts[1]);

      case 1:
        parsedXAD[`${fieldId}.1`] = this.parseTypeST(xadParts[0]);
    }

    this.pushSeparator(separator);

    return parsedXAD;
  }

  parseTypeXCN(xcnValue, fieldId = "XCN") {
    const parsedXCN = {};

    if (!xcnValue) {
      return parsedXCN;
    }

    const separator = this.popSeparator();
    const xcnParts = xcnValue.split(separator).slice(0, 14);

    switch (xcnParts.length) {
      case 14:
        parsedXCN[`${fieldId}.14`] = this.parseTypeHD(
          xcnParts[13],
          `${fieldId}.14`
        );
      case 13:
        parsedXCN[`${fieldId}.13`] = this.parseTypeID(xcnParts[12]);

      case 12:
        parsedXCN[`${fieldId}.12`] = this.parseTypeST(xcnParts[11]);

      case 11:
        parsedXCN[`${fieldId}.11`] = this.parseTypeID(xcnParts[10]);

      case 10:
        parsedXCN[`${fieldId}.10`] = this.parseTypeHD(
          xcnParts[9],
          `${fieldId}.10`
        );
      case 9:
        parsedXCN[`${fieldId}.9`] = this.parseTypeST(xcnParts[8]);

      case 8:
        parsedXCN[`${fieldId}.8`] = this.parseTypeIS(xcnParts[7]);

      case 7:
        parsedXCN[`${fieldId}.7`] = this.parseTypeST(xcnParts[6]);

      case 6:
        parsedXCN[`${fieldId}.6`] = this.parseTypeST(xcnParts[5]);

      case 5:
        parsedXCN[`${fieldId}.5`] = this.parseTypeST(xcnParts[4]);

      case 4:
        parsedXCN[`${fieldId}.4`] = this.parseTypeST(xcnParts[3]);

      case 3:
        parsedXCN[`${fieldId}.3`] = this.parseTypeST(xcnParts[2]);

      case 2:
        parsedXCN[`${fieldId}.2`] = this.parseTypeST(xcnParts[1]);

      case 1:
        parsedXCN[`${fieldId}.1`] = this.parseTypeST(xcnParts[0]);
    }
    this.pushSeparator(separator);

    return parsedXCN;
  }

  parseTypeXON(xonValue, fieldId = "XON") {
    const parsedXON = {};
    if (!xonValue) {
      return parsedXON;
    }
    const separator = this.popSeparator();
    const xonParts = xonValue.split(separator).slice(0, 8);

    switch (xonParts.length) {
      case 8:
        parsedXON[`${fieldId}.8`] = this.parseTypeHD(xonParts[7]);
      case 7:
        parsedXON[`${fieldId}.7`] = this.parseTypeIS(xonParts[6]);

      case 6:
        parsedXON[`${fieldId}.6`] = this.parseTypeHD(xonParts[5]);

      case 5:
        parsedXON[`${fieldId}.5`] = this.parseTypeID(xonParts[4]);

      case 4:
        parsedXON[`${fieldId}.4`] = this.parseTypeST(xonParts[3]);

      case 3:
        parsedXON[`${fieldId}.3`] = this.parseTypeNM(xonParts[2]);

      case 2:
        parsedXON[`${fieldId}.2`] = this.parseTypeIS(xonParts[1]);

      case 1:
        parsedXON[`${fieldId}.1`] = this.parseTypeST(xonParts[0]);
    }

    this.pushSeparator(separator);

    return parsedXON;
  }

  parseTypeXPN(xpnValue, fieldId = "XPN") {
    const parsedXPN = {};
    if (!xpnValue) {
      return parsedXPN;
    }
    const separator = this.popSeparator();
    const xpnParts = xpnValue.split(separator).slice(0, 8);

    switch (xpnParts.length) {
      case 8:
        parsedXPN[`${fieldId}.8`] = this.parseTypeID(xpnParts[7]);

      case 7:
        parsedXPN[`${fieldId}.7`] = this.parseTypeID(xpnParts[6]);

      case 6:
        parsedXPN[`${fieldId}.6`] = this.parseTypeST(xpnParts[5]);

      case 5:
        parsedXPN[`${fieldId}.5`] = this.parseTypeST(xpnParts[4]);

      case 4:
        parsedXPN[`${fieldId}.4`] = this.parseTypeST(xpnParts[3]);

      case 3:
        parsedXPN[`${fieldId}.3`] = this.parseTypeST(xpnParts[2]);

      case 2:
        parsedXPN[`${fieldId}.2`] = this.parseTypeST(xpnParts[1]);

      case 1:
        parsedXPN[`${fieldId}.1`] = this.parseTypeST(xpnParts[0]);
    }

    this.pushSeparator(separator);

    return parsedXPN;
  }

  parseTypeXTN(xtnValue, fieldId = "XTN") {
    const parsedXTN = {};
    if (!xtnValue) {
      return parsedXTN;
    }
    const separator = this.popSeparator();
    const xtnParts = xtnValue.split(separator).slice(0, 9);

    switch (xtnParts.length) {
      case 9:
        parsedXTN[`${fieldId}.9`] = this.parseTypeST(xtnParts[8]);

      case 8:
        parsedXTN[`${fieldId}.8`] = this.parseTypeNM(xtnParts[7]);

      case 7:
        parsedXTN[`${fieldId}.7`] = this.parseTypeNM(xtnParts[6]);

      case 6:
        parsedXTN[`${fieldId}.6`] = this.parseTypeNM(xtnParts[5]);

      case 5:
        parsedXTN[`${fieldId}.5`] = this.parseTypeNM(xtnParts[4]);

      case 4:
        parsedXTN[`${fieldId}.4`] = this.parseTypeST(xtnParts[3]);

      case 3:
        parsedXTN[`${fieldId}.3`] = this.parseTypeID(xtnParts[2]);

      case 2:
        parsedXTN[`${fieldId}.2`] = this.parseTypeID(xtnParts[1]);

      case 1:
        parsedXTN[`${fieldId}.1`] = this.parseTypeTN(xtnParts[0]);
    }

    this.pushSeparator(separator);

    return parsedXTN;
  }
}

module.exports = TypeParser;
