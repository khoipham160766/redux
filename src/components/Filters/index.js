import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, statusFilterChange, prioriryFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All')
  const [priority, setPriority] = useState([]);

  const dispatch = useDispatch();

  const handleSearchInput =  e => {
    setSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  }
  const handleStatusChange = e => {
    setFilter(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  }
  const handlePriorityChange = e =>{
    setPriority(e);
    dispatch(prioriryFilterChange(e));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={search} onChange={handleSearchInput} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filter} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          value={priority}
          style={{ width: '100%' }}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
