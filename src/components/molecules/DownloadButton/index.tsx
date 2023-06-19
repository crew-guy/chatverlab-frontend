import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import FullReport from '@components/organisms/FullReport';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

const DownloadPdfButton = () => {
  const chatMessages = useSelector((state: RootState) => state.chatMessages);
  // Create a download link element
  const downloadLink = React.useRef();
  return (
    <BlobProvider document={<FullReport messages={chatMessages} />}>
      {({ blob, url, loading, error }) => {
        // Handle the loading state
        if (loading) {
          return <div>Loading document...</div>;
        }

        // Handle the error state
        if (error) {
          return <div>Error while generating document: {error.message}</div>;
        }

        // Handle the blob state
        if (blob) {
          // Create object URL
          const objectUrl = URL.createObjectURL(blob);

          // Trigger the download link after a timeout
          setTimeout(() => {
            if (downloadLink.current) {
              (downloadLink.current as any).click();
              URL.revokeObjectURL(objectUrl); // Free memory
            }
          }, 100);

          return (
            <div>
              <a
                ref={downloadLink}
                href={objectUrl}
                download="app_state_report.pdf"
                style={{ display: 'none' }}
              >
                Download
              </a>
              <button onClick={() => {
                console.log({ chatMessages });
                (downloadLink.current as any).click()
              }}>
                Download PDF
              </button>
            </div>
          );
        }

        return null;
      }}
    </BlobProvider>
  );
};

export default DownloadPdfButton;
