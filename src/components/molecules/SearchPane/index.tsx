import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button, Input, Typography } from 'antd';
import styles from './SearchPane.module.scss'
import { AppDispatch } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { setBizProb, setCurrentPane, setQuestions } from '@features/stateSlice';

const { TextArea } = Input;

const fetchApi = async (input: string) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_2}/generate-questions`, {
    bizProb: input
  });
  return response.data;
}

const SearchPane: React.FC = () => {
  const [input, setInput] = useState('');
  const mutation = useMutation(fetchApi, {
    onSuccess: (data) => {
      toast.success('Data fetched successfully');
      dispatch(setQuestions(data.questions))
      dispatch(setCurrentPane(1))
    },
    onError: () => {
      toast.error('Error fetching data');
    }
  });
  const dispatch: AppDispatch = useDispatch();

  const handleFetch = async () => {
    dispatch(setBizProb(input))
    mutation.mutate(input);
  }

  return (
    <div className={styles.searchContainer}>
      <Typography.Title level={2}>Build Something Cool Today</Typography.Title>
      <br /><br />
      <TextArea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Eg: I am creating a video platform for short form videos of cats singing in the voice of singers. I expect 1 million users per day. I want to optimize for speed, storage, cost"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <br /><br />
      <Button
        type="primary"
        onClick={handleFetch}
        loading={mutation.isLoading}
        style={{ marginTop: '10px' }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchPane;
