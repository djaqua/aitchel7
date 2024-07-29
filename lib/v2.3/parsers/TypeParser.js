const unescape = require("../../unescape");

class TypeParser {
  constructor(context) {
    this.context = context;
    this.separatorStack = [
      context.subcomponentSeparator,
      context.repetitionSeparator,
      context.componentSeparator,
    ];
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

  parseTypeCM_MSG(msgValue, fieldId = "CM_MSG") {
    const parsedMSG = {};
    if (!msgValue) {
      return parsedMSG;
    }
    const separator = this.popSeparator();

    const msgParts = msgValue.split(separator).slice(0, 3);

    switch (msgParts.length) {
      case 2:
        parsedMSG[`${fieldId}.2`] = this.parseTypeID(msgParts[1]);

      case 1:
        parsedMSG[`${fieldId}.1`] = this.parseTypeID(msgParts[0]);
    }

    this.pushSeparator(separator);

    return parsedMSG;
  }

  parseTypeNM(nmValue) {
    if (!nmValue) {
      return NaN;
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
