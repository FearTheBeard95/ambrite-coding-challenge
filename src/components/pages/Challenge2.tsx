import { Breadcrumb, Button, Form, Input, Table } from 'antd';
import MainLayout from '../MainLayout';
import calculateDistance from '../../utils/locations-sort';
import geoInfo from '../../utils/geo.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux-store/reducers/geo-reducer';
import { bindActionCreators } from 'redux';
import * as geoActionCreators from '../../redux-store/action-creators/geo-action-creator';
import { title } from 'process';

const Challenge2 = () => {
  const [refLatitude, setLatitude] = useState('');
  const [refLongitude, setLongitude] = useState('');
  const state = useSelector((store: RootState) => store.geo);
  const [dataSource, setDataSource] = useState<Array<any>>([]);
  const dispatch = useDispatch();
  const { getGeoData, setGeoData } = bindActionCreators(
    geoActionCreators,
    dispatch
  );
  const onChangeLatitude = (value: string) => {
    setLatitude(value);
  };

  const onChangeLongitude = (value: string) => {
    setLongitude(value);
  };

  const onFinish = () => {
    const refCoords = `${refLatitude},${refLongitude}`;
    calculateDistance(geoInfo, refCoords).then((dataSource) => {
      setGeoData(dataSource);
      setLatitude('');
      setLongitude('');
    });
  };

  useEffect(() => {
    if (state.length < 1) {
      getGeoData(geoInfo);
    }
  });

  useEffect(() => {
    setDataSource(state || []);
  }, [state]);

  const columns: any[] = [
    {
      title: 'ipv4',
      dataIndex: 'ipv4',
      key: 'ipv4',
      sorter: (a: any, b: any) => a.ipv4.localeCompare(b.ipv4),
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
      sorter: (a: any, b: any) => a.distance - b.distance,
    },
  ];

  return (
    <MainLayout selected={['Challenge2']} title={'Challenge 2'}>
      <Form name='normal_login' className='login-form' onFinish={onFinish}>
        <Input.Group compact>
          <Input
            style={{ width: '30%' }}
            placeholder='Latitude'
            name='latitude'
            onChange={(e) => onChangeLatitude(e.target.value)}
            value={refLatitude}
            type='number'
            step={'0.0000000000000001'}
            max={90.9999999999999999}
            min={-90.99999999999999999}
          />
          <Input
            style={{ width: '30%' }}
            placeholder='Longitude'
            name='longitude'
            onChange={(e) => onChangeLongitude(e.target.value)}
            value={refLongitude}
            type='number'
            step={'0.0000000000000001'}
            max={180.9999999999999999}
            min={-180.99999999999999999}
          />
          <Button type='primary' htmlType='submit'>
            Sort
          </Button>
        </Input.Group>
      </Form>
      <br />
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.geo}
      />
    </MainLayout>
  );
};

export default Challenge2;
