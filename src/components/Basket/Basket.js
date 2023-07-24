import React, {useState} from 'react';
import {Button, Card, Col, Dropdown, Image, InputNumber, Row, Space, Typography} from "antd";
import {CloseSquareFilled, DownOutlined} from "@ant-design/icons";
import styles from "../Body/Product/ProductList/styles.module.css";
import {Link} from "react-router-dom";



const { Title,Text,Paragraph } = Typography;
const colorItems=[
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
]
const items = [
    {
        key: 'XS',
        label: 'XS',
    },
    {
        key: 'S',
        label: 'S',
    },
    {
        key: 'M',
        label: 'M',
    },
    {
        key: 'L',
        label: 'L',
    },{
        key: 'XL',
        label: 'XL',
    },{
        key: 'XXL',
        label: 'XXL',
    },
];
function Basket(props) {
    const [size,setSize]=useState('Select Size')
    const [color,setColor]=useState('Select Color')
    const handleClick=()=>{
        console.log('test')
    }
    const handleClickSize=(event)=>{
        if (event.target.localName==='span'){
            setSize(event.target.innerHTML)
        }
    }
    const handleClickColor=(event)=>{
        if (event.target.localName==='span'){
            setColor(event.target.innerHTML)
        }
    }
    return (
        <div>
            <Card title={'My Bag'}
            >
                <Row>
                    <Col span={17}>
                        <Card key={1}>
                            <Row>
                                <Col span={6}>
                                    <Link to={'/details/asdas'}><Image src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} preview={false} width={'100%'} height={'100%'}></Image></Link>
                                </Col>
                                <Col span={16} style={{marginLeft:'20px'}}>
                                    <div>
                                        <Title level={2}><b><span style={{color:'lightslategray',fontSize:'23px'}}><Text type={'secondary'}>$</Text></span>149<small style={{fontSize:'15px'}}>.99</small></b></Title>
                                    </div>
                                    <div>
                                        <Text type="secondary">
                                            <Paragraph className={styles.cardDescription}
                                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                                            >
                                                Ant Design (secondary) test DescriptionAnt Design (secondary) test Description
                                                Ant Design (secondary) test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary)
                                                test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary) test Description
                                            </Paragraph>

                                        </Text>
                                    </div>
                                    <div >
                                        <Row>
                                            <Col span={7}>
                                                <div onClick={(event)=>handleClickSize(event)}>
                                                    <Dropdown
                                                        menu={{
                                                            items,
                                                            selectable: true,
                                                            defaultSelectedKeys: ['S'],
                                                        }}
                                                    >
                                                        <Typography.Link >
                                                            <Space style={{color:'black'}} >
                                                                {size}
                                                                <DownOutlined />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>
                                            </Col>
                                            <Col span={7}>
                                                <div onClick={(event)=>handleClickColor(event)}>
                                                    <Dropdown
                                                        menu={{
                                                            items:colorItems,
                                                            selectable: true,
                                                            defaultSelectedKeys: ['white'],
                                                        }}
                                                    >
                                                        <Typography.Link >
                                                            <Space style={{color:'black'}} >
                                                                {color}
                                                                <DownOutlined />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>

                                            </Col>
                                            <Col span={7}>
                                                <Text>QTY : &nbsp;</Text>
                                                <InputNumber type={"number"} defaultValue={1} min={1} />
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                </Col>
                                <Col span={1} >
                                    <div>
                                        <CloseSquareFilled style={{cursor:'pointer',fontSize:'25px'}} onClick={()=>handleClick()} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <hr />
                        <Card key={2}>
                            <Row>
                                <Col span={6}>
                                    <Link to={'/details/asdas'}><Image src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} preview={false} width={'100%'} height={'100%'}></Image></Link>
                                </Col>
                                <Col span={16} style={{marginLeft:'20px'}}>
                                    <div>
                                        <Title level={2}><b><span style={{color:'lightslategray',fontSize:'23px'}}><Text type={'secondary'}>$</Text></span>149<small style={{fontSize:'15px'}}>.99</small></b></Title>
                                    </div>
                                    <div>
                                        <Text type="secondary">
                                            <Paragraph className={styles.cardDescription}
                                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                                            >
                                                Ant Design (secondary) test DescriptionAnt Design (secondary) test Description
                                                Ant Design (secondary) test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary)
                                                test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary) test DescriptionAnt Design (secondary) test Description
                                            </Paragraph>

                                        </Text>
                                    </div>
                                    <div >
                                        <Row>
                                            <Col span={7}>
                                                <div onClick={(event)=>handleClickSize(event)}>
                                                    <Dropdown
                                                        menu={{
                                                            items,
                                                            selectable: true,
                                                            defaultSelectedKeys: ['S'],
                                                        }}
                                                    >
                                                        <Typography.Link >
                                                            <Space style={{color:'black'}} >
                                                                {size}
                                                                <DownOutlined />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>
                                            </Col>
                                            <Col span={7}>
                                                <div onClick={(event)=>handleClickColor(event)}>
                                                    <Dropdown
                                                        menu={{
                                                            items:colorItems,
                                                            selectable: true,
                                                            defaultSelectedKeys: ['white'],
                                                        }}
                                                    >
                                                        <Typography.Link >
                                                            <Space style={{color:'black'}} >
                                                                {color}
                                                                <DownOutlined />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>

                                            </Col>
                                            <Col span={7}>
                                                <Text>QTY : &nbsp;</Text>
                                                <InputNumber type={"number"} defaultValue={1} min={1} />
                                            </Col>
                                        </Row>
                                    </div>

                                </Col>
                                <Col span={1} >
                                    <div>
                                        <CloseSquareFilled style={{cursor:'pointer',fontSize:'25px'}} onClick={()=>handleClick()} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6} style={{marginLeft:'35px'}}>
                        <Card>
                            <div>
                                <Title level={3}><b>TOTAL</b></Title>
                            </div>
                            <hr style={{color:'gray'}}/>
                            <div>
                                <Row>
                                    <Col span={18}>
                                        <Title level={5}><b>Sub-total</b></Title>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary" style={{position:"absolute"}}>$149.99</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={18}>
                                        <Title level={5}><b>Delivery</b></Title>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary" style={{position:"absolute"}}>$14.99</Text>
                                    </Col>
                                </Row>
                            </div>
                            <hr/>
                            <div>
                                <Row>
                                    <Col span={18}>
                                        <Title level={5}><b>Discount</b></Title>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary" delete style={{position:"absolute"}}>$14.99</Text>
                                    </Col>
                                </Row>
                            </div>
                            <hr/>
                            <div>
                                <Row>
                                    <Col span={18}>
                                        <Title level={5}><b>Last Total</b></Title>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary" style={{position:"absolute"}}>$149.99</Text>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={24} style={{marginTop:'10px'}}>
                                       <Button type={'default'} style={{backgroundColor:'#389e0d',color:'black'}} block><b>CHECK OUT</b></Button>
                                    </Col>
                                </Row>
                            </div>
                            <hr/>
                            <div>
                                <Row>
                                    <Col>
                                        <Title level={5}><b>WE ACCEPT:</b></Title>
                                        <Image style={{marginLeft:'10px'}} width={40} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png'} preview={false}></Image>
                                        <Image style={{marginLeft:'20px'}} width={40} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png'} preview={false}></Image>
                                        <Image style={{marginLeft:'30px'}} width={40} src={'https://cdn-icons-png.flaticon.com/512/179/179431.png'} preview={false}></Image>
                                        <Image style={{marginLeft:'40px'}} width={40} src={'https://img.freepik.com/free-icon/paypal_318-674245.jpg'} preview={false}></Image>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Basket;