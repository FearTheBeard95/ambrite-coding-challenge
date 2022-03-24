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

export default async function geo_validator(file: any[]) {
  return file.filter((json: object) => ajv(json) === true);
}
