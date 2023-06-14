import { setIacCode } from '@features/stateSlice';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import axios from 'axios';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { Typography } from 'antd';
import { CodeBlock } from 'react-code-blocks';

const { Text } = Typography;

const fetchApi = async (prompt) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL_2}/get-cloud-iac`, // replace with your API endpoint
    { prompt }
  );
  return response.data
}


const IacCodeBlock = () => {
  const { iacCodeString, bizProb, archiObj, chatHistory } = useSelector((state: RootState) => state)

  const handleGenerateIacCode = async () => {
    mutation.mutate(bizProb + "Here's the architecture object:" + JSON.stringify(archiObj) + "Here's the chat history of design improvements made by user conversing with AI:" + chatHistory)
  };
  const dispatch: AppDispatch = useDispatch()
  const mutation = useMutation(fetchApi, {
    onSuccess: (data) => {
      toast.success('Data fetched successfully');
      dispatch(setIacCode(data as any))
    },
    onError: () => {
      toast.error('Error fetching infrastructure as code');
    }
  });
  return (
    <>
      {iacCodeString && (
        // <CopyBlock
        //   text={iacCodeString['yaml-code']}
        //   language={'YAML'}
        //   showLineNumbers={true}
        //   codeBlock
        //   wrapLines
        // >
        //   {iacCodeString['yaml-code']}
        // </CopyBlock>
        <div
          style={{
            width: '100%',
            flex: 1,
            color: 'white',
            paddingBottom: '1em',
          }}
        >
          <CodeBlock
            text={iacCodeString['yaml-code']}
            customStyle={{
              height: '250px',
              overflowY: 'scroll',
              borderRadius: '5px',
              boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
              fontSize: '0.75rem',
              margin: '0px 0.75rem',
            }}
          />
        </div>
      )}
      <Button type="primary" loading={mutation.isLoading} onClick={handleGenerateIacCode}>{iacCodeString ? "Update" : "Generate"} CloudFormation Code</Button>
    </>
  )
}

export default IacCodeBlock
