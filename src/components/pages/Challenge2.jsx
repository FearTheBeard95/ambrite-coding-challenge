import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from '../MainLayout';

const Challenge2 = () => (
  <MainLayout selected={['Challenge2']}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      <Breadcrumb.Item>Challenge 2</Breadcrumb.Item>
    </Breadcrumb>
    <div className='site-layout-content'>
      <h1>Challenge 2</h1>
    </div>
  </MainLayout>
);

export default Challenge2;
