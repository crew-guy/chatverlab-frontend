import React, { useState } from "react";
import { Button, Input, List, Typography, Spin } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch } from "react-redux";
import { appendToChatHistory } from "@features/stateSlice";
import { SendOutlined } from "@ant-design/icons";
import styles from './ChatFunction.module.scss'
import DocList, { ReferenceDocument } from "../../molecules/DocsList";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FullReport from "@components/organisms/FullReport";
import MessageBubble from "@components/atoms/MessageBubble";
import UploadToS3Button from "@components/atoms/UploadToS3";

export interface ChatMessage {
  sender: "user" | "server";
  content: string;
  sourceDocs?: ReferenceDocument[];
}


const { Text } = Typography;

const S3Chat: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = async () => {
    setLoading(true);
    setMessages([...messages, { sender: "user", content: input }]);
    dispatch(appendToChatHistory({ sender: "user", content: input }))
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_2}/pinechat`, // replace with your API endpoint
        {
          query: input
        }
      );
      const serverChatResponse = response.data.answer
      setMessages([
        ...messages,
        { sender: "user", content: input },
        { sender: "server", content: serverChatResponse, sourceDocs: response.data.source_docs }
      ]);
      dispatch(appendToChatHistory({ sender: "server", content: serverChatResponse, sourceDocs: response.data.source_docs }))
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", borderRadius: "0.7rem" }} >
      <div className={styles.listContainer}>
        <UploadToS3Button />
        <Typography.Title level={3}>Using Custom Indexing - Upload a bunch of files, ask a question</Typography.Title>
        <p>Pinecone vector database and OpenAI embedding model - Wait for 1 min after successful file upload to ask a question</p>
        <List
          dataSource={messages}
          renderItem={item => (
            <List.Item>
              <div className={styles.messageContainer}>
                {/* <Text className={item.sender === "user" ? styles.danger : styles.primary}>
                  <strong>{item.sender === "user" ? "User =>" : "Guvnor AI =>"}</strong>  {item.content}
                </Text> */}
                <MessageBubble message={item.content} sender={item.sender} />
                <div className={styles.sourceDocsContainer}>
                  {item?.sourceDocs?.length > 0 && <DocList documents={item?.sourceDocs} />}
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
      {loading && <Spin />}
      <br />
      <div className={styles.inputContainer}>
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message here"
            disabled={loading}
          />
          <Button onClick={handleSubmit} loading={loading} type="primary" icon={<SendOutlined />}></Button>
          <PDFDownloadLink
            document={<FullReport messages={appState.chatMessages} />}
            fileName={`app_report.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download Complete Report'
            }
          </PDFDownloadLink>
        </Input.Group>
      </div>
      <br />
    </div>
  );
};

export default S3Chat;
