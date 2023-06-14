import React from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import ArchiComponent from '../ArchiComp';
import { DownloadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setCurrentPane } from '@features/stateSlice';
import styles from './ChatPane.module.scss'
import { BlobProvider } from '@react-pdf/renderer';
import DownloadPdfButton from '../DownloadButton';
import { PDFDownloadLink } from '@react-pdf/renderer';
import FullReport from '@components/organisms/FullReport';


const ChatPane = () => {
  const archiObj = useSelector((state: RootState) => state.archiObj)
  // const dispatch: AppDispatch = useDispatch()
  const appState = useSelector((state: RootState) => state);
  return (
    <div>
      <ArchiComponent archiObj={archiObj} />
      <br />
      <PDFDownloadLink
        document={<FullReport appState={appState} />}
        fileName={`app_report.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Complete Report'
        }
      </PDFDownloadLink>
    </div>
  )
}

export default ChatPane
