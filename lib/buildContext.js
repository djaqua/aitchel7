const MSH_2 = 1;
const MSH_9 = 8;
const MSH_12 = 11;

const buildContext = (message) => {
  if (!message) {
    return undefined;
  }
  const messageHeader = message.split("\n")[0];

  const fieldSeparator = messageHeader.charAt(3); // mSh.1  :/

  const fields = messageHeader.split(fieldSeparator);
  if (fields.length < 12) {
    return undefined;
  }
  const encodingCharacters = fields[MSH_2];
  const componentSeparator = encodingCharacters.charAt(0);

  const [messageType, triggerEvent] = fields[MSH_9].split(componentSeparator);

  return {
    fieldSeparator,

    componentSeparator,
    repetitionSeparator: encodingCharacters.charAt(1),
    escapeCharacter: encodingCharacters.charAt(2),
    subcomponentSeparator: encodingCharacters.charAt(3),

    messageType: messageType,
    triggerEvent: triggerEvent,
    hl7version: fields[MSH_12],
  };
};

module.exports = buildContext;
