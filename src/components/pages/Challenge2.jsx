import { Breadcrumb, Button, Form, Input, Table } from 'antd';
import MainLayout from '../MainLayout';
import calculateDistance from '../../utils/locations-sort';
import geoInfo from '../../utils/geo.json';
import { useState } from 'react';

const Challenge2 = () => {
  const [dataSource, setDataSource] = useState([]);
  const [refLatitude, setLatitude] = useState('');
  const [refLongitude, setLongitude] = useState('');

  const onChangeLatitude = (value) => {
    setLatitude(value);
  };

  const onChangeLongitude = (value) => {
    setLongitude(value);
  };

  const onFinish = () => {
    const refCoords = `${refLatitude},${refLongitude}`;
    calculateDistance(geoInfo, refCoords).then((dataSource) => {
      setDataSource(dataSource);
    });
  };

  const columns = [
    {
      title: 'ipv4',
      dataIndex: 'ipv4',
      key: 'ipv4',
    },
    {
      title: 'geo',
      dataIndex: 'geo',
      key: 'geo',
      responsive: ['md'],
    },
    {
      title: 'distance',
      dataIndex: 'distance',
      key: 'distance',
      responsive: ['md'],
    },
  ];

  return (
    <MainLayout selected={['Challenge2']}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>Challenge 2</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <h1>Challenge 2</h1>
        <Form name='normal_login' className='login-form' onFinish={onFinish}>
          <Input.Group compact>
            <Input
              style={{ width: '30%' }}
              placeholder='Latitude'
              name='latitude'
              onChange={(e) => onChangeLatitude(e.target.value)}
              value={refLatitude}
            />
            <Input
              style={{ width: '30%' }}
              placeholder='Longitude'
              name='longitude'
              onChange={(e) => onChangeLongitude(e.target.value)}
              value={refLongitude}
            />
            <Button type='primary' htmlType='submit'>
              Sort
            </Button>
          </Input.Group>
        </Form>
        <br />
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </MainLayout>
  );
};

export default Challenge2;
