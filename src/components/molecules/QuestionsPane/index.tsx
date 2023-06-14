import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setArchiObj, setCurrentPane, setGlobalAnswers } from '@features/stateSlice';
import styles from './QuestionsPane.module.scss'

const fetchApi = async ({ input, answers }: { input: string, answers: string[] }) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_2}/get-complete-cloud-architecture`, {
    bizProb: input,
    answers: answers
  });
  return response.data;
}

const QuestionsPane: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions)
  const bizProb = useSelector((state: RootState) => state.bizProb)
  const dispatch: AppDispatch = useDispatch()
  const [answers, setAnswers] = useState<string[]>([]);
  const onFinish = (values: { [key: string]: string }) => {
    // Handle form submission here
    const answers = Object.values(values)
    const combinedQuestionAnswers = questions.map((question, index) => `Question${index}: ${question}, Answer${index}: ${answers[index]}`
    )
    dispatch(setGlobalAnswers(combinedQuestionAnswers))
    mutation.mutate({ input: `Overview: ${bizProb}`, answers: combinedQuestionAnswers });
  };
  const mutation = useMutation(fetchApi, {
    onSuccess: (data) => {
      toast.success('Data fetched successfully');
      dispatch(setArchiObj(data))
      dispatch(setCurrentPane(2))
    },
    onError: () => {
      toast.error('Error fetching data');
    }
  });
  return (
    <Form layout="vertical" name="dynamic_form" onFinish={onFinish}>
      {questions.map((question, index) => (
        <div className={styles.antFormItemRow}>
          <Form.Item
            key={index}
            name={`question_${index}`}
            label={question}
            rules={[
              {
                required: true,
                message: question,
              },
            ]}
          >
            <Input.TextArea
              style={{ display: 'block' }}
              value={answers[index]}
              onChange={(e) => setAnswers((answers) => {
                answers[index] = e.target.value;
                return answers
              })}
              placeholder="Enter answer here"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </div>
      ))}
      <Form.Item>
        <Button loading={mutation.isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuestionsPane;
