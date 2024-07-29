# aitchel7

example usage 

```js

// build a custom parser
class MyAdtA01Parser extends AdtA01Parser {
  constructor(context) {
    super(context);
    this.parseObject = {};
  }
  handlePatientIdentification(patientIdentification) {
    const patientName = patientIdentification["PID.5"];
    this.parseObject["lastName"] = patientName["PID.5.1"];
    this.parseObject["firstName"] = patientName["PID.5.2"];
  }

  handleParsingFinished() {
    return this.parseObject;
  }
}

const context = buildContext(message);

if (context.messageType === "ADT") {
  if (context.triggerEvent === "A01") {
    const parser = new MyAdtA01Parser(context);
    const result = parser.parseMessage(message);
    console.log(result);
  }
}
```
