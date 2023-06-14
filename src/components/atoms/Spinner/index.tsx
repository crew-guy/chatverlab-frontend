import { Spin, Typography } from 'antd'
import React from 'react'
import styles from './MySpinner.module.scss'



const {Title} = Typography

const Spinner: React.FC<{ spinText: string }> = ({spinText}) => {
  return (
    <div className={styles.spinContainer} >
      <Spin />
      <Title level={5}>{ spinText}</Title>
    </div>
  )
}

export default Spinner
