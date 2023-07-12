import React, { FC, ChangeEvent, useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import S3 from 'react-aws-s3';

const config = {
  bucketName: process.env.NEXT_PUBLIC_BUCKET_NAME,
  dirName: 'uploads', /* optional */
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
}
const ReactS3Client = new S3(config);


const UploadToS3Button: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event?.file;
    file && setFile(file);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    try {
      const ufile = await ReactS3Client.uploadFile(file)
      console.log(ufile)
      message.success('File uploaded successfully!');
    } catch (e) {
      // alert(e);
      console.log(e)
      // message.error('File upload failed.');
    }
    setIsLoading(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Upload onChange={handleFileChange} beforeUpload={() => false}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        loading={isLoading}
        onClick={handleUpload}
        disabled={!file}
      >
        {isLoading ? 'Uploading' : 'Upload'}
      </Button>
    </div>
  );
};

export default UploadToS3Button;
