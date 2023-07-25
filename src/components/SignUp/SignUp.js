import React from 'react';
import {Button, Cascader, Checkbox, Col, Form, Image, Input, Row, Select,} from 'antd';
import {Link} from "react-router-dom";
import {phoneCode} from '../../Data/PhoneCode'
import ReCAPTCHA from "react-google-recaptcha";

import turkey from '../../Data/All.json'
const {Option} = Select;


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const prefixSelector = (
    <Form.Item name="phoneCode" noStyle>
        <Select
            showSearch
            optionFilterProp="children"
            style={{
                width: 120,
            }}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={phoneCode.map((data) =>
                (
                {
                    value: data.dial_code,
                    label: data.dial_code,

                }
            )
            )}

        >
        </Select>
    </Form.Item>
);
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function SignUp(props) {
    const [form] = Form.useForm();

    const recaptchaRef = React.useRef();

    const residences = turkey.map(data=>({value:data.name,label:data.name,
        children:data.towns.map(data2=>({value:data2.name,label:data2.name,
        children:data2.districts.map(data3=>({value:data3.name,label:data3.name,children:data3.quarters.map(data4=>({value:data4.name,label:data4.name}))
            }))}))}))



    const onFinish = async (values) => {
        // const token = await recaptchaRef.current.executeAsync();
        // const secretkey='6LeWO1EnAAAAAOduGAoYeO-JgP9wCJcdrxUeiYNT'
        // console.log('token',token,secretkey)

        // recaptchaRef.current.reset();

        console.log('Received values of form: ', values);

    };

    return (
        <div>
            <div>
                <Row>
                    <Col span={7}></Col>
                    <Col span={10}>
                        <div><Image width={'80%'} height={'40%'} style={{marginLeft: '25%'}} preview={false}
                                    src={'https://cdn.logo.com/hotlink-ok/logo-social.png'}></Image></div>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '86',
                            }}
                            scrollToFirstError
                        >

                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="surname"
                                label="Surname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your surname!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[
                                    { type: 'array', required: true, message: 'Please select your habitual address!' },
                                ]}
                            >
                                <Cascader options={residences} />
                            </Form.Item>



                            <Form.Item
                                name="addresscontinuation"
                                label="Address Continuation"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Address Continuation',
                                    },
                                ]}
                            >
                                <Input.TextArea showCount maxLength={100}/>
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                label="Gender"
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

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey="6LeWO1EnAAAAAAjeoohLsHDYqQtZB9466BCObKc_"
                            />

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <Link to="#">agreement</Link>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={7}></Col>
                </Row>
            </div>


        </div>
    );
}

export default SignUp;