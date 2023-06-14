import { setSysDiagUrl } from '@features/stateSlice';
import { useMutation } from '@tanstack/react-query';
import { Button, Collapse } from 'antd';
import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';

const fetchApi = async (prompt) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL_2}/get-system-diagram`, // replace with your API endpoint
    { prompt }
  );
  return response.data
}


const SysDiag = () => {
  const { sysDiagUrl, bizProb, archiObj, chatHistory } = useSelector((state: RootState) => state)

  const handleGenerateSysDiag = async () => {
    mutation.mutate(bizProb + "Here's the architecture object:" + JSON.stringify(archiObj) + "Here's the chat history of design improvements made by user conversing with AI:" + chatHistory)
  };
  const dispatch: AppDispatch = useDispatch()
  const mutation = useMutation(fetchApi, {
    onSuccess: (data) => {
      toast.success('System diagram generated successfully');
      dispatch(setSysDiagUrl((data as any)?.img_url))
    },
    onError: () => {
      toast.error('Error fetching data');
    }
  });
  return (
    <>
      {sysDiagUrl && <Image width="700px" height="600px" src={sysDiagUrl} alt="System Diagram" />}
      <Button type="primary" loading={mutation.isLoading} onClick={handleGenerateSysDiag}>{sysDiagUrl ? "Update" : "Generate"} System Diagram</Button>
    </>
  )
}

export default SysDiag
