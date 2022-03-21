import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from '../MainLayout';

const Challenge1 = () => (
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

export default Challenge1;
