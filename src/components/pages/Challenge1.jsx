import React from 'react';
import { Breadcrumb, Typography } from 'antd';
import MainLayout from '../MainLayout';
import dataJSON from '../../utils/data.json';
import geoJSON from '../../utils/geo.json';
import { useState } from 'react';
import { useEffect } from 'react';
import geo_validator from '../../utils/json-validators/geo-validator';
import data_validator from '../../utils/json-validators/data-validator';

const { Text } = Typography;

const Challenge1 = () => {
  const [geoData, setResults1] = useState({
    valid: [],
    invalid: [],
  });

  const [dataFile, setResults2] = useState({
    valid: [],
    invalid: [],
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isMounted = true;
    geo_validator(geoJSON).then((results) => {
      setResults1({
        valid: results.valid,
        invalid: results.invalid,
      });
    });
    data_validator(dataJSON).then((results) => {
      setResults2({
        valid: results.valid,
        invalid: results.invalid,
      });
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <MainLayout selected={['Challenge1']}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>Challenge 1</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <h1>Challenge 1</h1>
        <h2>data.json</h2>
        <p>
          Data valid objects: <Text type='success'>{geoData.valid.length}</Text>
        </p>
        <p>
          Data invalid objects:{' '}
          <Text type='danger'>{geoData.invalid.length}</Text>
        </p>
        <h2>geo.json</h2>
        <p>
          Data valid objects:{' '}
          <Text type='success'>{dataFile.valid.length}</Text>
        </p>
        <p>
          Data invalid objects:{' '}
          <Text type='danger'>{dataFile.invalid.length}</Text>
        </p>
      </div>
    </MainLayout>
  );
};

export default Challenge1;
