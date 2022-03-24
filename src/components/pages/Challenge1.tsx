import { Space, Typography } from 'antd';
import MainLayout from '../MainLayout';
import dataJSON from '../../utils/data.json';
import geoJSON from '../../utils/geo.json';
import { useState } from 'react';
import geo_validator from '../../utils/json-validators/geo-validator';
import data_validator from '../../utils/json-validators/data-validator';

const { Title, Text } = Typography;

const Challenge1 = () => {
  const [geoData, setResults1] = useState({
    valid: [],
    invalid: [],
  });

  const [dataFile, setResults2] = useState({
    valid: [],
    invalid: [],
  });

  const onExecute = () => {
    geo_validator(geoJSON).then((results: any) => setResults1(results));
    data_validator(dataJSON).then((results: any) => setResults2(results));
  };
  return (
    <MainLayout
      selected={['Challenge1']}
      title={'Challenge 1'}
      onExecute={onExecute}
    >
      <Space direction='vertical'>
        <Title level={2}>data.json</Title>
        {dataFile.valid.length > 0 && (
          <Typography>
            <p>
              valid objects: <Text type='success'>{dataFile.valid.length}</Text>
            </p>
          </Typography>
        )}
        {dataFile.invalid.length > 0 && (
          <Typography>
            <p>
              invalid objects:{' '}
              <Text type='danger'>{dataFile.invalid.length}</Text>
            </p>
          </Typography>
        )}
        <Title level={2}>geo.json</Title>
        {geoData.valid.length > 0 && (
          <Typography>
            <p>
              valid objects: <Text type='success'>{geoData.valid.length}</Text>
            </p>
          </Typography>
        )}
        {geoData.invalid.length > 0 && (
          <Typography>
            <p>
              invalid objects:{' '}
              <Text type='danger'>{geoData.invalid.length}</Text>
            </p>
          </Typography>
        )}
      </Space>
    </MainLayout>
  );
};

export default Challenge1;
