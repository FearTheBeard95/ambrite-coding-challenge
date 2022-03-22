const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true });

//Add format to check coordinates using regex
ajv.addFormat(
  'coordinates',
  '^([-]?([0-8]{1}[0-9]?|90|0).([0-9]{1,})?),[-]?(([0-1]?[0-7]?[0-9]?)?|[0-9]{2}|180).([0-9]{1,})?$'
);

addFormats(ajv);

//function to validate json/data, receives JSON data and Schema to validate with
const checkJSON = (json, schema) => {
  const validate = ajv.compile(schema);
  return validate(json);
};

export default checkJSON;
