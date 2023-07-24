import React from 'react';
import {Button, Card, Col, Divider, Row, Typography} from "antd";
import styles from "./styles.module.css";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Meta} = Card;
const {Paragraph} = Typography;

function ProductList({title}) {
    return (
        <div>
            <Divider orientation="left">{title}</Divider>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Link to={'details/dasda'}>
                            <Card
                                hoverable
                                style={{width: 240}}
                                actions={[
                                    <Button type={'primary'}><Link to={'#'} style={{color:'white'}}><span><ShoppingCartOutlined/></span></Link></Button>,
                                    <Button type={'primary'}>Details</Button>
                                ]}
                                cover={<img alt="example" width={250} height={250}
                                            src="https://cdn.dsmcdn.com/ty893/product/media/images/20230520/13/353225973/918706185/1/1_org_zoom.jpg"/>}
                            >
                                <Meta
                                    title="Smart Watch"
                                    description={'firma B'}
                                />
                                <Paragraph className={styles.cardDescription}
                                           ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                                >
                                    adas dasdasd asdasdasda sdasasdasda
                                    adas dasdasd asdasdasda sdas
                                    adas dasdasd asdasdasda sdasasddasdasdasdas
                                    adas dasdasd asdasdasda sdas
                                </Paragraph>


                            </Card>
                        </Link>

                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example" width={250} height={250}
                                        src="data:image/jpeg;base64,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"/>}
                        >
                            <Meta
                                title="Headset"
                                description={'Firma A'}
                            >
                            </Meta>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>

                        </Card>

                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example" width={250} height={250}
                                        src="https://cdn.dsmcdn.com/ty893/product/media/images/20230520/13/353225973/918706185/1/1_org_zoom.jpg"/>}
                        >
                            <Meta
                                title="Smart Watch"
                                description="firma C"
                            />
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>

                        </Card>

                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example"
                                        width={250} height={250}
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="firma 1"/>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example"
                                        width={250} height={250}
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="firma 1"/>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example"
                                        width={250} height={250}
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="firma 1"/>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example"
                                        width={250} height={250}
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="firma 1"/>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className={styles.card}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            actions={[
                                <Button type={'primary'}><span><ShoppingCartOutlined/></span></Button>,
                                <Button type={'primary'}>Details</Button>
                            ]}
                            cover={<img alt="example"
                                        width={250} height={250}
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="firma 1"/>
                            <Paragraph className={styles.cardDescription}
                                       ellipsis={{rows: 2, expandable: true, symbol: ' '}}
                            >
                                adas dasdasd asdasdasda sdasasdasda
                                adas dasdasd asdasdasda sdas
                                adas dasdasd asdasdasda sdasasddasdasdasdas
                                adas dasdasd asdasdasda sdas
                            </Paragraph>
                        </Card>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default ProductList;