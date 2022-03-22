import ajvInstance from './ajv-instance';

const schema = {
  type: 'object',
  properties: {
    ipv4: { type: 'string', format: 'ipv4' },
    geo: {
      type: 'string',
      format: 'coordinates',
    },
  },
};

const ajv = ajvInstance.compile(schema);

export default async function geo_validator(file) {
  return await {
    valid: file.filter((json) => ajv(json) === true),
    invalid: file.filter((json) => ajv(json) === false),
  };
}
