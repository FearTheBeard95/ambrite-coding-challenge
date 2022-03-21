import React from 'react';
import { Breadcrumb } from 'antd';
import '../App.less';
import MainLayout from './MainLayout';

const App = () => (
  <MainLayout>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
    <div className='site-layout-content'>
      <h1>Carlos Sibalatani</h1>
    </div>
  </MainLayout>
);

export default App;
