export const dataJSONSchema = {
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

export const geoJSONSchema = {
  type: 'object',
  properties: {
    ipv4: { type: 'string', format: 'ipv4' },
    geo: {
      type: 'string',
      format: 'coordinates',
    },
  },
};
