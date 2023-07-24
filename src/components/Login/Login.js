import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Form, Image, Input, Row} from 'antd';
import {Link} from "react-router-dom";
function Login(props) {
    const formItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 24,
            },
            md: {
                span:24
            },
            lg:{
                span:24
            }
        },
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <div>
                        <Image width={'80%'} height={'40%'} style={{marginLeft:'25%'}} preview={false} src={'https://cdn.logo.com/hotlink-ok/logo-social.png'}></Image>
                    </div>
                    <div style={{marginTop:'10%'}}>
                        <Form
                            {...formItemLayout}
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input type={"email"} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to="#">
                                    Forgot password
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Or <Link href="#">register now!</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={7}></Col>
            </Row>


        </div>
    );
}

export default Login;