import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined, HomeOutlined, LaptopOutlined, ManOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined, WomanOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import FooterPage from "../FooterPage/FooterPage";
import {Link, Route, Routes} from "react-router-dom";
import Blog from "../Body/Blog/Blog";
import styles from './styles.module.css'

const { Header, Sider } = Layout;


function Navbar(props) {

    const MenuItems = [
        { name: 'Home', link: '/home' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' }
    ];
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" className={styles.image} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.SubMenu key="sub1" title={<span><DesktopOutlined/><span>Navigation One</span></span>}>
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Menu mode="horizontal">
                        <Menu.Item key={'1'} icon={<HomeOutlined />}>
                            <Link to={'/'}>Home</Link>

                        </Menu.Item>
                        <Menu.Item key={'2'} icon={<ManOutlined />}>
                            <Link to={'man'}>Man</Link>
                        </Menu.Item>
                        <Menu.Item key={'3'} icon={<WomanOutlined />}>
                            <Link to={'woman'}>Woman</Link>
                        </Menu.Item>
                        <Menu.Item key={'4'} icon={<LaptopOutlined />}>
                            <Link to={'Technology'}>Technology</Link>
                        </Menu.Item>
                        <Menu.SubMenu className={styles.user} key="sub1" title={<span><DesktopOutlined/><span>Navigation One</span></span>}>
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.SubMenu className={styles.user} key="sub1" title={<span><DesktopOutlined/><span>Navigation One</span></span>}>
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>


                        {/*{MenuItems.map(item => (*/}

                        {/*    <Menu.Item key={item.name}>*/}

                        {/*        <a href={item.link}>{item.name}</a>*/}

                        {/*    </Menu.Item>*/}

                        {/*))}*/}

                    </Menu>
                </Header>
                <Routes>
                    <Route path={'footer'} element={<FooterPage/>}></Route>
                    <Route path={'blogs'} element={<Blog/>}></Route>

                </Routes>


            </Layout>
        </Layout>
    );
}

export default Navbar;