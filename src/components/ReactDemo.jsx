import React from 'react'
import { Select } from 'antd'
import styles from './index.module.scss'

function ReactDemo() {
  return (
    <div className={styles.con}>
      <h3>Antd Component</h3>
      <Select style={{ width: 160 }}>
        <Select.Option key="1">11</Select.Option>
        <Select.Option key="2">22</Select.Option>
        <Select.Option key="3">33</Select.Option>
      </Select>
    </div>
  )
}

export default ReactDemo


