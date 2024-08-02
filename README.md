# aitchel7 - a humble HL7 processing library for Node.js

A mode

## Development Setup

This project isn't associated with any package managers yet, so 

1. Clone the repository
2. From the project root, run `npm link`
3. From a dependent project, run `npm link aitchel7`
4. Run some samples



## Base Case
You just want an parse object without having to learn the nuts and bolts 
of aitchel7, so aitchel7 is useful by default. Here is a 3-step recipe 
for success:

1. Build a context
2. Instantiate a new message parser for the given context
3. Parse the message

Example:
```js
const {
  buildContext,
  AdtA01Parser, 
} = require("aitchel7");

const message = ...

const context = buildContext(message);  // Build a context

if (context.messageType === "ADT") {
  if (context.triggerEvent === "A01") {

    // Instantiate a new message parser for the given context
    const parser = new AdtA01Parser(context);

    // Parse the message
    console.log(parser.parseMessage(message));
  }
}
```

## Extending Message Parsers

This is the most useful level of customization. This is where you can 
really begin to tweak what the parser builds. Override the "extract" 
methods on any given message parser to customize the data extraction 
process.

Example:
```js

const {
  buildContext,
  AdtA01Parser, 
} = require("aitchel7");

const message = ...

// build a custom parser
class MyAdtA01Parser extends AdtA01Parser {
  constructor(context) {
    super(context);
  }
  extractPatientIdentification(patientIdentification, model) {
    const patientName = patientIdentification["PID.5"];
    model["lastName"] = patientName["PID.5.1"].toLowerCase();
    model["firstName"] = patientName["PID.5.2"].toLowerCase();
  }
  extractPatientDemographic() {
    // don't extract PD1 segment information
  }

  extractInsurance1() {
    // don't extract IN1 segment information
  }
  
}

const context = buildContext(message);

if (context.messageType === "ADT") {
  if (context.triggerEvent === "A01") {
    const parser = new MyAdtA01Parser(context);
    console.log(parser.parseMessage(message));
  }
}
```
