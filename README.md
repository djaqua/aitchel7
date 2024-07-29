# aitchel7

example usage 

```js

class MyAdtA01Parser extends AdtA01Parser {
    
    constructor(context) {
        super(context);
    }
    handlePatientIdentification(patientIdentification) {
        this.parseObject['accountNumber'] = patientIdentification['PID.3']['PID.3.6']['PID.3.6.2']

    }

    handleParsingFinished() {
        return this.parseObject;
    }
}
    

const context = buildContext(message);

if (message['MSH.9']['MSH.9.1'] === 'ADT') {
    if (message['MSH.9']['MSH.9.2'] === 'A01') {
        const parser = new MyAdtA01Parser();
        const result = parser.parseMessage(message);
    }
}


```
