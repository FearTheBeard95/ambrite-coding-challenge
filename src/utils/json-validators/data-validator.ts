import ajvInstance from './ajv-instance';

const schema = {
  type: 'object',
  properties: {
    active: { type: 'number' },
    asn: { type: 'number' },
    countrycode: { type: 'string' },
    id: { type: 'number' },
    statecode: { type: ['string', 'null'] },
    meta: { type: 'string' },
  },
};

const ajv = ajvInstance.compile(schema);

export default async function data_validator(file: any[]) {
  return file.filter((json: object) => ajv(json) === true);
}
