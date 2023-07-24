import React from 'react';
import {Card, Col, Row, Image, Typography, Button} from "antd";
import {Link} from "react-router-dom";

const { Title,Text } = Typography;
function MyOrders(props) {
    return (
        <div>
            <Card title={'My Orders'}>
                <Card
                    style={{
                        marginTop: 10,
                    }}
                    type="inner"
                    title="Order Date &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 10 August 23 - 15:03"
                >

                    <Row>
                        <Col span={8}>
                            <Card>
                                <Row>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                       <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}} >
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col span={15} style={{marginLeft:'30px'}}>
                            <Card>
                                <Row style={{marginBottom:'30px'}}>
                                    <Col span={8}>
                                        <Title level={5}>Order Summary</Title>
                                        <Text type={"secondary"}>5 Product</Text>
                                    </Col>
                                    <Col span={8}>
                                        <Title level={5}>Buyer</Title>
                                        <Text type={"secondary"}>John Die</Text>
                                    </Col>
                                    <Col span={8}>
                                        <Title level={5}>Total</Title>
                                        <Text type={"secondary"}>$149.99</Text>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop:'20px'}}>

                                    <Col span={11} style={{marginLeft:'40px'}}>
                                        <Title level={5}>Delivery</Title>
                                        <Text type={"secondary"}>Was Delivered</Text>
                                    </Col>
                                    <Col span={11}>
                                        <Title level={5}>Extradition Request</Title>
                                        <Button type={'primary'} style={{marginLeft:'25px'}}>Create</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <Card
                    style={{
                        marginTop: 10,
                    }}
                    type="inner"
                    title="Order Date &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 10 August 23 - 15:03"
                >

                    <Row>
                        <Col span={8}>
                            <Card>
                                <Row>

                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                    <Col span={6} style={{marginTop:'5px'}}>
                                        <Link to={'/details/dasdas'}> <Image height={80} width={80} preview={false} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}></Image></Link>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col span={15} style={{marginLeft:'30px'}}>
                            <Card>
                                <Row style={{marginBottom:'30px'}}>
                                    <Col span={8}>
                                        <Title level={5}>Order Summary</Title>
                                        <Text type={"secondary"}>3 Product</Text>
                                    </Col>
                                    <Col span={8}>
                                        <Title level={5}>Buyer</Title>
                                        <Text type={"secondary"}>John Die</Text>
                                    </Col>
                                    <Col span={8}>
                                        <Title level={5}>Total</Title>
                                        <Text type={"secondary"}>$149.99</Text>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop:'20px'}}>

                                    <Col span={11} style={{marginLeft:'40px'}}>
                                        <Title level={5}>Delivery</Title>
                                        <Text type={"secondary"}>Was Delivered</Text>
                                    </Col>
                                    <Col span={11}>
                                        <Title level={5}>Extradition Request</Title>
                                        <Button type={'primary'} style={{marginLeft:'25px'}}>Create</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>


            </Card>
        </div>
    );
}

export default MyOrders;