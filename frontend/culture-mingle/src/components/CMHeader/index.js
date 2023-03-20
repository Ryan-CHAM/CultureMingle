import React from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

import { Layout, Col, Button, Row, Dropdown } from 'antd';

const { Header } = Layout;
const isLogined = false;
const userId = "1234567"

const items = [
  {
    key: '1',
    label: (<NavLink to="/members/my-events"> My Events</NavLink>),
  },
  {
    key: '2',
    label: (<NavLink to="/members/my-groups"> My Groups</NavLink>),
  }
];


const CMHeader = () => {
  return (
    <Header theme='light' className={styles.header}>
      <Row>
        <Col span={21} order={1} className={styles.headerLogo}>
          <NavLink to='/' style={{ color: 'black' }}>
            Culture Mingle
          </NavLink>
        </Col>
        {isLogined ?
          <>
            <Col span={2} order={2}>
              <NavLink to='/login'>
                <Button className={styles.headerButton} type="primary">login</Button>
              </NavLink>
            </Col>
            <Col span={1} order={3}>
              <NavLink to='/signup'>
                <Button className={styles.headerButton}>sign up</Button>
              </NavLink>
            </Col></> :
          <>
            <Col span={2} order={2}>
              <NavLink to={`/members/${userId}`}>
                <Dropdown menu={{ items }} placement="bottomLeft">
                  <Button className={styles.headerButton} type="primary">my profile</Button>
                </Dropdown>
              </NavLink>
            </Col>
            <Col span={1} order={3}>
              <NavLink to={`/`}>
                <Button className={styles.headerButton}>Log out</Button>
              </NavLink>
            </Col>

          </>}

      </Row>
    </Header>
  );
};

export default CMHeader;