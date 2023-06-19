import { Row, Tag, Checkbox } from 'antd';
import React, { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, completed }) {
  const [Checked, setChecked] = useState(completed)
  console.log(Checked)
  const toggleCheckbox = () => {
    setChecked(!Checked);
  };
// console.log(completed)
// console.log(Checked)
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(Checked?{ opacity: 0.5, textDecoration: 'line-through' }:{}),
      }}
    >
      <Checkbox checked={Checked} onClick={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
      abc
      xyz
      123
    </Row>
  );
}
