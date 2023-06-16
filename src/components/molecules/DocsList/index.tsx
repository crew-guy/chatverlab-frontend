import React from 'react';
import { Card, Tooltip, Button, Tag } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';

// Define the shape of documents based on your sample
export interface ReferenceDocument {
  excerpt: string;
  source: string;
  title: string;
}

// Assuming that your documents are passed as a prop
interface DocListProps {
  documents: ReferenceDocument[];
}

const DocList: React.FC<DocListProps> = ({ documents }) => {
  // Function to get the document type
  const getDocumentType = (source: string): string => {
    const extension = new URL(source).pathname.split('.').pop();
    return extension || "";
  };

  // Function to get the tag color
  const getTagColor = (documentType: string): string => {
    switch (documentType) {
      case "pdf":
        return "red";
      case "docx":
        return "blue";
      case "pptx":
        return "orange";
      case "xlsx":
        return "green";
      case "csv":
        return "green";
      default:
        return "green";
    }
  };


  // Function to handle download
  const handleDownload = (source: string) => {
    window.open(source, "_blank");
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {documents.map((doc, index) => (
        <Tooltip placement="right" key={index} title={doc.excerpt}>
          <Card
            title={doc.title}
            style={{ width: 300 }}
            actions={[
              <DownloadOutlined onClick={() => handleDownload(doc.source)} />,
              <EyeOutlined onClick={() => window.location.href = doc.source} />
            ]}
          >
            <Tag color={getTagColor(getDocumentType(doc.source))} >{getDocumentType(doc.source.toUpperCase())}</Tag>
          </Card>
        </Tooltip>
      ))}
    </div>
  );
};

export default DocList;
