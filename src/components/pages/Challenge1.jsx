import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from '../MainLayout';
import checkJSON from '../../utils/json-checker';
import dataJSON from '../../utils/data.json';
import geoJSON from '../../utils/geo.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { dataJSONSchema, geoJSONSchema } from '../../constants/jsonSchemas';

const Challenge1 = () => {
  // const [dataCount, setDataCount] = useState(0);
  // const [geoCount, setGeoCount] = useState(0);

  useEffect(() => {
    console.group('data.json');
    dataJSON.map((json) => console.log(checkJSON(json, dataJSONSchema)));
    console.groupEnd();

    console.group('geo.json');
    geoJSON.map((json) => console.log(checkJSON(json, geoJSONSchema)));
    console.groupEnd();
  });
  return (
    <MainLayout selected={['Challenge1']}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>Challenge 1</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <h1>Challenge 1</h1>
      </div>
    </MainLayout>
  );
};

export default Challenge1;
