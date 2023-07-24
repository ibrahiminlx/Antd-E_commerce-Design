import React, {useState} from 'react';
import {Card, Carousel, Image, Col, Typography, Row, Rate, Dropdown, Space, Button, Select} from "antd";
import {DownOutlined} from "@ant-design/icons";



const items = [
    {
        key: 'XS',
        label: (
            <p>
                XS
            </p>
        ),
    },
    {
        key: 'S',
        label: (
            <p>
                S
            </p>
        ),
    },
    {
        key: 'M',
        label: (
              <p>
                  M
              </p>
        ),
    },
    {
        key: 'L',
        label: (
              <p>
                  L
              </p>
        ),
    },
    {
        key: 'XL',
        label: (
              <p>
                  XL
              </p>
        ),
    },
    {
        key: 'XXL',
        label: (
              <p>
                  XXL
              </p>
        ),
    }

];

const { Title ,Text} = Typography;
function ProductDetails(props) {
    const [selectSize,setSelectSize]=useState('Select Size')
    const handleClickSize=(event)=>{
        if (event.target.localName==='p'){
            setSelectSize(event.target.innerHTML)

        }
    }

    return (
        <div>
            <Card title="Product Name"  style={{ width: '100%' ,height:'100%'}}>
                <Card style={{width:'100%',height:'100%'}}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12}>
                            <Carousel dotPosition={'left'} >
                                <div>
                                    <Image
                                        height={'450px'}
                                        width={'100%'}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </div>
                                <div>
                                    <Image
                                        height={'450px'}
                                        width={'100%'}
                                        src="https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full.jpeg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        height={'450px'}
                                        width={'100%'}
                                        src="https://www.feedough.com/wp-content/uploads/2020/07/PRODUCT-LINE.png"
                                    />
                                </div>
                                <div>
                                    <Image
                                        height={'450px'}
                                        width={'100%'}
                                        src="https://www.careeraddict.com/uploads/article/60419/entrepreneurship-product-ideas.png"
                                    />
                                </div>
                            </Carousel>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div>
                                <Title level={2}>Product Name  asdas asd asd dasd</Title>
                            </div>
                            <div>
                                <Rate disabled defaultValue={2.5} />
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <Title level={2}>Price : $150</Title>
                            </div>
                            <div>
                                <Text type="secondary">Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)</Text>
                            </div>
                            <div style={{marginTop:'15px'}} onClick={(event)=>handleClickSize(event)}>
                                <Dropdown menu={{items}}>
                                    <Button key={items.name} >
                                        <Space  >
                                            {selectSize}
                                            <DownOutlined  />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <Title level={5}>Color Select</Title>
                                <Select
                                    showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"

                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Orange',
                                            label: 'Orange',
                                        },
                                        {
                                            value: 'Black',
                                            label: 'Black',
                                        },
                                        {
                                            value: 'White',
                                            label: 'White',
                                        },
                                        {
                                            value: 'Red',
                                            label: 'Red',
                                        },
                                        {
                                            value: 'Pink',
                                            label: 'Pink',
                                        }
                                    ]}
                                />

                            </div>
                            <div style={{marginTop:'15px'}}>
                                <Button type="primary" block>Add To Basket</Button>
                            </div>
                        </Col>

                    </Row>



                </Card>



            </Card>
        </div>
    );
}

export default ProductDetails;