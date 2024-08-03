const parsers = {
  2.3: require("./v2.3"),
};

const getParser = (context) => {
  const { hl7version, messageType, triggerEvent } = context;
  try {
    return new parsers[hl7version][messageType][triggerEvent](context);
  } catch (e) {
    if (e.message.startsWith("Cannot read properties of undefined")) {
      throw new Error(
        `unsupported message: '${messageType}^${triggerEvent}' @ v${hl7version}`
      );
    }
  }
};
module.exports = getParser;
