import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className={style.header}>
      <li>
        <Link to="/tab/all" className={style.currentTab}>全部</Link>
      </li>
      <li>
        <Link to="/tab/good">精华</Link>
      </li>
      <li>
        <Link to="/tab/share">分享</Link>
      </li>
      <li>
        <Link to="/tab/ask">问答</Link>
      </li>
      <li>
        <Link to="/tab/job">招聘</Link>
      </li>
      <li>
        <Link to="/tab/dev">客户端测试</Link>
      </li>
    </ul>
  )
}

export default Nav;
