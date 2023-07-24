import React, {useEffect, useState} from 'react';
import {Card, Col, DatePicker, Progress, Row, Select, Typography} from "antd";
import { LockOutlined,MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const {Title}=Typography
const { Option } = Select;
function UserInformation(props) {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [form2] = Form.useForm();
    const [, forceUpdate2] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
        forceUpdate2({});
    }, []);
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    const onFinish2 = (values) => {
        console.log('Finish:', values);
    };
    return (
        <div>
            <div>
                <Card title={<b>User Information</b>}>
                    <Row>
                        <Col span={14}>
                            <Title level={5}>Membership Information</Title>
                            <Form form={form} name="userInformation" layout="inline" onFinish={onFinish}>
                                <Row>
                                    <Col span={12} style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="name"
                                            rules={[{ required: true, message: 'Please input your name!' }]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}  style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="surname"
                                            rules={[{ required: true, message: 'Please input your surname!' }]}
                                        >
                                            <Input
                                                prefix={<UserOutlined className="site-form-item-icon" />}
                                                placeholder="Surname"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}  style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="email"
                                            rules={[{ required: true, message: 'Please input your email!' }]}
                                        >
                                            <Input
                                                prefix={<MailOutlined className="site-form-item-icon" />}
                                                placeholder="Email"
                                                type={"email"}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}  style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="phone"
                                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                                        >
                                            <Input addonBefore={prefixSelector} placeholder="Phone Number" style={{ width: '100%' }} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}  style={{marginTop:'25px'}}>
                                        <Form.Item name={'birthdate'} rules={[{type:'object' ,required:true ,message: 'Please select time!' }]} >
                                            <DatePicker style={{width:'100%'}} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}  style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="gender"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select gender!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="select your gender">
                                                <Option value="male">Male</Option>
                                                <Option value="female">Female</Option>
                                                <Option value="other">Other</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item shouldUpdate  style={{width:'98%', marginTop:'25px'}}>
                                            <Button type={'primary'} style={{height:'50px'}} htmlType={'submit'} block>Update</Button>
                                            {/*{() => (*/}
                                            {/*    <Button*/}
                                            {/*        type="primary" */}
                                            {/*        htmlType="submit"*/}
                                            {/*        disabled={*/}
                                            {/*            !form.isFieldsTouched(true) ||*/}
                                            {/*            !!form.getFieldsError().filter(({ errors }) => errors.length).length*/}
                                            {/*        }*/}
                                            {/*    >*/}
                                            {/*        Update*/}
                                            {/*    </Button>*/}
                                            {/*)}*/}
                                        </Form.Item>
                                    </Col>
                                </Row>



                            </Form>
                        </Col>
                        <Col span={10}>
                            <Title level={5}>Password Update</Title>
                            <Form form={form2} name="passwordUpdate" layout="inline" onFinish={onFinish2}>
                                <Row>
                                    <Col span={24} style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="oldPassword"
                                            rules={[{ required: true, message: 'Please input your Old Password!' }]}
                                        >
                                            <Input type={"password"}  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Old Password"  />
                                        </Form.Item>
                                    </Col>
                                <Title level={5} style={{marginTop:'11px'}}>Password Change</Title>
                                    <Col span={24} style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="newPassword"
                                            rules={[{ required: true, message: 'Please input your newPassword!' }]}
                                        >
                                            <Input type={"password"}  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="New Password"  />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} style={{marginTop:'25px'}}>
                                        <Form.Item
                                            name="newPassword"
                                            rules={[{ required: true, message: 'Please input your newPassword!' }]}
                                        >
                                            <Input type={"password"}  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="New Password"  />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Title><Progress percent={100} /></Title>
                                    </Col>
                                    <Form.Item shouldUpdate  style={{width:'98%', marginTop:'25px'}}>
                                        <Button type={'primary'} style={{height:'50px'}} htmlType={'submit'} block>Update Password</Button>
                                    </Form.Item>

                                </Row>



                            </Form>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div></div>
        </div>
    );
}

export default UserInformation;