import { Layout, Menu } from 'antd';
import routes from '../constants/routes';

const { Header, Content, Footer } = Layout;
const currentYear = new Date().getFullYear();
const MainLayout = ({ children }) => (
  <Layout className='layout'>
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        {routes.map((route) => (
          <Menu.Item key={route.to}>{route.name}</Menu.Item>
        ))}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>
      {`Ant Design ©${currentYear} Created by Carlos Sibalatani`}
    </Footer>
  </Layout>
);

export default MainLayout;
