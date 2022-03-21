import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from '../MainLayout';

const Challenge3 = () => (
  <MainLayout selected={['Challenge3']}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      <Breadcrumb.Item>Challenge 3</Breadcrumb.Item>
    </Breadcrumb>
    <div className='site-layout-content'>
      <h1>Challenge 3</h1>
    </div>
  </MainLayout>
);

export default Challenge3;
