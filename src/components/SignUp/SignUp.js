import React, {useState} from 'react';
import {Button, Checkbox, Col, Form, Image, Input, Row, Select,} from 'antd';
import {Link} from "react-router-dom";
import {phoneCode} from '../../Data/PhoneCode'
import {City} from '../../Data/City'
import {District} from '../../Data/District'
import {Neighborhood} from '../../Data/Neighborhood'

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
    <Form.Item name="prefix" noStyle>
        <Select
            showSearch
            optionFilterProp="children"
            style={{
                width: 120,
            }}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={phoneCode.map((data) => (
                {
                    value: data.code,
                    label: data.dial_code,

                }
            ))}

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
    const [cityKey, setCityKey] = useState(0)
    const [districtKey, setDistrictKey] = useState(0)
    const [districtDisable, setDistrictDisable] = useState(true)
    const [streedDisable, setStreedDisable] = useState(true)

    const handleClickCity = (event) => {
        console.log('test', event)
        setCityKey(event)
        setDistrictDisable(false)

    }
    const handleClickDistrict = (event) => {
        console.log('dk',event)
        setDistrictKey(event)
        setStreedDisable(false)
    }


    const onFinish = (values) => {
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
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone City!',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    onChange={handleClickCity}
                                    placeholder="Select a city"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={City.map(data => ({value: data.sehir_key, label: data.sehir_title}))}
                                />
                            </Form.Item>
                            <Form.Item
                                name="district"
                                label="District"

                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone District!',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    onChange={handleClickDistrict}
                                    disabled={districtDisable}
                                    placeholder="Select a district"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }

                                    options={District.filter((data) => data.ilce_sehirkey === cityKey).map((data) => ({
                                        value: data.ilce_key,
                                        label: data.ilce_title
                                    }))}
                                />
                            </Form.Item>
                            <Form.Item
                                name="neighborhood"
                                label="Neighborhood"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Select a Neighborhood',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    onChange={handleClickDistrict}
                                    disabled={streedDisable}
                                    placeholder="Select a Neighborhood"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }

                                    options={Neighborhood.filter((data) => data.mahalle_ilcekey === districtKey).map((data2) => ({
                                        value: data2.mahalle_title,
                                        label: data2.mahalle_title
                                    }))}
                                />
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

                            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="captcha"
                                            noStyle
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input the captcha you got!',
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Button>Get captcha</Button>
                                    </Col>
                                </Row>
                            </Form.Item>

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