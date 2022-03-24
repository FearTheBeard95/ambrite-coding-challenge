const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajvInstance = new Ajv({ allErrors: true });

//Add format to check coordinates using regex
ajvInstance.addFormat(
  'coordinates',
  '^([-]?([0-8]{1}[0-9]?|90|0).([0-9]{1,})?),[-]?(([0-1]?[0-7]?[0-9]?)?|[0-9]{2}|180).([0-9]{1,})?$'
);

addFormats(ajvInstance);

export default ajvInstance;
