const MSH_2 = 1;
const MSH_9 = 8;
const MSH_12 = 11;

const buildContext = (messageHeader) => {
  const lineOne = messageHeader.split("\n")[0];

  const fieldSeparator = messageHeader.charAt(3); // mSh.1  :/

  const fields = messageHeader.split(fieldSeparator);
  const encodingCharacters = fields[MSH_2];

  return {
    fieldSeparator,

    componentSeparator: encodingCharacters.charAt(0),
    repetitionSeparator: encodingCharacters.charAt(1),
    subcomponentSeparator: encodingCharacters.charAt(2),
    escapeCharacter: encodingCharacters.charAt(3),

    messageType: fields[MSH_9],
    hl7version: fields[MSH_12],
  };
};

module.exports = buildContext;
