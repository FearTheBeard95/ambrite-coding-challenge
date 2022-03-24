import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const { Header, Content, Footer } = Layout;
const currentYear = new Date().getFullYear();
const MainLayout = ({ children, selected }: any) => (
  <Layout className='layout'>
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={selected}>
        {routes.map((route) => (
          <Menu.Item key={route.key}>
            <Link to={route.path}>{route.key}</Link>
          </Menu.Item>
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
