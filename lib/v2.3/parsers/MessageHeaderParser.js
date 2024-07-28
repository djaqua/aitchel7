const TypeParser = require("./TypeParser");

class MessageHeaderParser extends TypeParser {
  constructor(context) {
    super(context);
  }

  parseSegment(segmentValue) {
    const fields = segmentValue.split(this.context.fieldSeparator);

    const messageHeader = {};
    switch (fields.length) {
      case 19:
        messageHeader["MSH.19"] = this.parseMSH19(fields[18]);
      case 18:
        messageHeader["MSH.18"] = this.parseMSH18(fields[17]);
      case 17:
        messageHeader["MSH.17"] = this.parseMSH17(fields[16]);
      case 16:
        messageHeader["MSH.16"] = this.parseMSH16(fields[15]);
      case 15:
        messageHeader["MSH.15"] = this.parseMSH15(fields[14]);
      case 14:
        messageHeader["MSH.14"] = this.parseMSH14(fields[13]);
      case 13:
        messageHeader["MSH.13"] = this.parseMSH13(fields[12]);
      case 12:
        messageHeader["MSH.12"] = this.parseMSH12(fields[11]);
      case 11:
        messageHeader["MSH.11"] = this.parseMSH11(fields[10]);
      case 10:
        messageHeader["MSH.10"] = this.parseMSH10(fields[9]);
      case 9:
        messageHeader["MSH.9"] = this.parseMSH9(fields[8]);
      case 8:
        messageHeader["MSH.8"] = this.parseMSH8(fields[7]);
      case 7:
        messageHeader["MSH.7"] = this.parseMSH7(fields[6]);
      case 6:
        messageHeader["MSH.6"] = this.parseMSH6(fields[5]);
      case 5:
        messageHeader["MSH.5"] = this.parseMSH5(fields[4]);
      case 4:
        messageHeader["MSH.4"] = this.parseMSH4(fields[3]);
      case 3:
        messageHeader["MSH.3"] = this.parseMSH3(fields[2]);
      case 2:
        messageHeader["MSH.2"] = this.parseMSH2(fields[1]);
      case 1:
        messageHeader["MSH.1"] = this.context.fieldSeparator;
    }
    return messageHeader;
  }

  //
  // ***************************************************************************
  //                                 Fields
  // ***************************************************************************
  //

  parseMSH1(stValue) {
    return this.parseTypeIS(stValue);
  }

  parseMSH2(stValue) {
    return this.parseTypeIS(stValue);
  }

  parseMSH3(hdValue) {
    return this.parseTypeHD(hdValue, "MSH.3");
  }

  parseMSH4(hdValue) {
    return this.parseTypeHD(hdValue, "MSH.4");
  }

  parseMSH5(hdValue) {
    return this.parseTypeHD(hdValue, "MSH.5");
  }

  parseMSH6(hdValue) {
    return this.parseTypeHD(hdValue, "MSH.6");
  }

  parseMSH7(tsValue) {
    return this.parseTypeTS(tsValue, "MSH.7");
  }

  parseMSH8(stValue) {
    return this.parseTypeST(stValue);
  }

  parseMSH9(msgValue) {
    return this.parseTypeCM_MSG(msgValue, "MSH.9");
  }

  parseMSH10(stValue) {
    return this.parseTypeST(stValue);
  }

  parseMSH11(ptValue) {
    return this.parseTypePT(ptValue, "MSH.11");
  }

  parseMSH12(idValue) {
    return this.parseTypeID(idValue);
  }

  parseMSH13(nmValue) {
    return this.parseTypeNM(nmValue);
  }

  parseMSH14(stValue) {
    return this.parseTypeST(stValue);
  }

  parseMSH15(idValue) {
    return this.parseTypeID(idValue);
  }

  parseMSH16(idValue) {
    return this.parseTypeID(idValue);
  }

  parseMSH17(idValue) {
    return this.parseTypeID(idValue);
  }

  parseMSH18(idValue) {
    return this.parseTypeID(idValue);
  }

  parseMSH19(ceValue) {
    return this.parseTypeCE(ceValue);
  }
}

module.exports = MessageHeaderParser;
