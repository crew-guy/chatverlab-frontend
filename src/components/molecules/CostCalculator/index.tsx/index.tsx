import { setCloudCost } from '@features/stateSlice';
import { useMutation } from '@tanstack/react-query';
import { Button, List, Typography } from 'antd';
import axios from 'axios';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
const { Title } = Typography;

const fetchApi = async ({ bizProb, recentArchitecture, chatHistory }) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL_2}/calculate-cost`, // replace with your API endpoint
    { bizProb, recentArchitecture, chatHistory }
  );
  return response.data
}


const CloudCostCalculator = () => {
  const { bizProb, archiObj, chatHistory, cloudCost } = useSelector((state: RootState) => state)
  const handleGenerateCloudCost = async () => {
    mutation.mutate({ bizProb, recentArchitecture: archiObj, chatHistory })
  };
  const dispatch: AppDispatch = useDispatch()
  const mutation = useMutation(fetchApi, {
    onSuccess: (data) => {
      toast.success('Cloud cost generated successfully');
      dispatch(setCloudCost(data))
    },
    onError: () => {
      toast.error('Error fetching data');
    }
  });
  return (
    <>
      {cloudCost.totalCost > 0 && (
        <>
          <Title level={4}>Cloud Cost Breakdown</Title>
          <List
            dataSource={cloudCost.stepByStepCost}
            renderItem={(item: string) => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
          <Title level={4}>Total Cost: ${cloudCost.totalCost.toLocaleString()}</Title>
        </>
      )}

      <Button type="primary" loading={mutation.isLoading} onClick={handleGenerateCloudCost}>{cloudCost ? "Update" : "Compute"} Cloud Cost</Button>
    </>
  )
}

export default CloudCostCalculator
