import {
    DesktopOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AppLayout({ children }: any) {

    const [collapsed, setCollapsed] = useState(false);
    return (<>
        <Layout style={{ minHeight: '100vh' }}>


            <Sider
                breakpoint="lg"
                collapsible collapsed={collapsed} onCollapse={setCollapsed}
            >
                {/* TODO: add logo here */}
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<UserOutlined />} title="Usuários">
                        Usuários
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<DesktopOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout >
                <Header style={{ padding: 0, background: 'white' }} />
                <Content style={{ margin: '0 16px' }}>
                    {/* TODO: implement breadcrumb dynamic with react router v6 */}
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    </>)
}
