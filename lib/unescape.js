const ESCAPED_ESCAPE_CHARACTER = "\\E\\";
const ESCAPED_FIELD_SEPARATOR = "\\F\\";
const ESCAPED_COMPONENT_SEPARATOR = "\\S\\";
const ESCAPED_REPETITION_SEPARATOR = "\\R\\";
const ESCAPED_SUBCOMPONENT_SEPARATOR = "\\T\\";

const unescape = (value, context) => {
  if (!value) {
    return "";
  }

  const unescapedValue = value
    .replaceAll(ESCAPED_FIELD_SEPARATOR, context.fieldSeparator)
    .replaceAll(ESCAPED_COMPONENT_SEPARATOR, context.componentSeparator)
    .replaceAll(ESCAPED_REPETITION_SEPARATOR, context.repetitionSeparator)
    .replaceAll(ESCAPED_SUBCOMPONENT_SEPARATOR, context.subcomponentSeparator);

  return unescapedValue.replaceAll(
    // DO THIS LAST
    ESCAPED_ESCAPE_CHARACTER,
    context.escapeCharacter
  );
};

module.exports = unescape;
