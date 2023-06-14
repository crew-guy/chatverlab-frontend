import React, { useState } from "react";
import { Button, Input, List, Typography, Spin } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch } from "react-redux";
import { appendToChatHistory, setArchiObj } from "@features/stateSlice";
import { SendOutlined } from "@ant-design/icons";
import styles from './ChatFunction.module.scss'

interface ChatMessage {
  sender: "user" | "server";
  content: string;
}

const { Text } = Typography;

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { bizProb, archiObj } = useSelector((state: RootState) => state)
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = async () => {
    setLoading(true);
    setMessages([...messages, { sender: "user", content: input }]);
    dispatch(appendToChatHistory("User: " + input))
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_2}/iterate-architecture`, // replace with your API endpoint
        {
          bizProb: bizProb,
          recentArchitecture: archiObj,
          constraint: input
        }
      );
      setMessages([
        ...messages,
        { sender: "user", content: input },
        { sender: "server", content: response.data.data }
      ]);
      dispatch(appendToChatHistory("Solution: " + response.data.data))
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#eee", padding: "2rem", borderRadius: "0.7rem" }} >
      <Typography.Title level={3}>Chat</Typography.Title>
      <List
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <Text className={item.sender === "user" ? styles.danger : styles.primary}>
              <strong>{item.sender === "user" ? "User =>" : "Guvnor AI =>"}</strong>  {item.content}
            </Text>
          </List.Item>
        )}
      />
      {loading && <Spin />}
      <br />
      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message here"
          disabled={loading}
        />
        <Button onClick={handleSubmit} loading={loading} type="primary" icon={<SendOutlined />}></Button>
      </Input.Group>
      <br />
    </div>
  );
};

export default ChatApp;
