import React from 'react';
import { Button, Card, Col, Collapse, List, Row, Spin, Tag, Typography } from 'antd';
import ChatApp from '../ChatFunction';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import SysDiag from '../SysDiag';
import CloudCostCalculator from '../CostCalculator/index.tsx';
import IacCodeBlock from '../IacCode';
const { Panel } = Collapse;
const { Title, Paragraph, Link } = Typography;
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

interface KeyFeature {
  explanation: string;
  feature: string;
  sourceDocuments: string[];
}

interface Layer {
  key_features: KeyFeature[];
  purpose: string;
  services: string[];
  title: string;
}

interface SourceDoc {
  excerpt: string;
  source: string;
  title: string;
}

interface ArchiData {
  introduction: string;
  layers: Layer[];
  title: string;
}

export interface ArchiObj {
  data: ArchiData;
  source_docs: SourceDoc[];
}

const ArchiComponent: React.FC<{ archiObj: ArchiObj }> = ({ archiObj }) => {
  return (
    <Card>
      {!archiObj ? <Spin /> : (
        <>
          <Title level={2}>{archiObj.data.title}</Title>
          <Paragraph>{archiObj.data.introduction}</Paragraph>
          <Collapse accordion>
            <Panel header={"Architecture Design Diagram"} key={'987654321'}>
              <SysDiag />
            </Panel>
            <Panel header={"Cost Breakdown"} key={'987654322'}>
              <CloudCostCalculator />
            </Panel>
            <Panel header={"Cloud Formation Template code"} key={'987654323'}>
              <IacCodeBlock />
            </Panel>
            {archiObj.data.layers.map((layer, i) => (
              <Panel header={layer.title} key={i}>
                <Paragraph>{layer.purpose}</Paragraph>
                <List
                  header={<div>Key Features</div>}
                  dataSource={layer.key_features}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text strong>{item.feature}: </Typography.Text>
                      {item.explanation}
                    </List.Item>
                  )}
                />
                {layer.services.length > 0 && (
                  <List
                    header={<div>Services</div>}
                    dataSource={layer.services}
                    renderItem={item => <Tag color='orange' >{item}</Tag>}
                  />
                )}
              </Panel>
            ))}
          </Collapse>
          <br />
          <ChatApp />
          <Title level={3}>Source Documents</Title>
          <Row gutter={[16, 16]}>
            {archiObj.source_docs.map(item => (
              // <ResponsiveMasonry
              //   columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              // >
              <Col xs={24} sm={12} md={8} lg={6}>
                {/* <Masonry> */}
                <div>
                  <Card title={<Link href={item.source} target="_blank">{item.title}</Link>}>
                    <Paragraph>{item.excerpt}</Paragraph>
                  </Card>
                </div>
                {/* </Masonry> */}
              </Col>
              // </ResponsiveMasonry>
            ))}
          </Row>
        </>
      )}
    </Card>
  );
};

export default ArchiComponent
