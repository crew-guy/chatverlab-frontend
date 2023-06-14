import React, { useState } from 'react';
import { Button, message, Steps, Typography } from 'antd';
import SearchPane from '@components/molecules/SearchPane'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { setCurrentPane } from '@features/stateSlice';
import QuestionsPane from '@components/molecules/QuestionsPane';
import ChatPane from '@components/molecules/ChatPane';

const steps = [
  {
    title: 'Search',
    content: <SearchPane />,
  },
  {
    title: 'Specify',
    content: <QuestionsPane />,
  },
  {
    title: 'Design',
    content: <ChatPane />,
  },
];

const StepperWrapper: React.FC = () => {
  // const { token } = theme.useToken();
  const current = useSelector((state: RootState) => state.currentPane)
  const dispatch: AppDispatch = useDispatch()

  const next = () => {
    dispatch(setCurrentPane(current + 1));
  };

  const prev = () => {
    dispatch(setCurrentPane(current - 1));
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    // lineHeight: '260px',
    textAlign: 'center',
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div style={{ margin: '3rem', height: '100%' }}>
      <Typography.Title level={1} style={{ width: "100%", textAlign: 'center' }}>Guvnor</Typography.Title>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24, height: '100%' }}>
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )} */}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperWrapper;
