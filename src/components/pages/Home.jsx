import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from '../MainLayout';

const Home = () => (
  <MainLayout selected={['Home']}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
    <div className='site-layout-content'>
      <h1>Carlos Sibalatani</h1>
    </div>
  </MainLayout>
);

export default Home;
