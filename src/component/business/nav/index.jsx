import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Nav() {
  let url = location.href;
  url = url.match(/\/tab\/(.*)\//)[1];

  return (
    <ul className={style.header}>
      <li>
        <Link to="/tab/good/1" className={url === 'good' ? style.currentTab : ''}>精华</Link>
      </li>
      <li>
        <Link to="/tab/share/1" className={url === 'share' ? style.currentTab : ''}>分享</Link>
      </li>
      <li>
        <Link to="/tab/ask/1" className={url === 'ask' ? style.currentTab : ''}>问答</Link>
      </li>
      <li>
        <Link to="/tab/job/1" className={url === 'job' ? style.currentTab : ''}>招聘</Link>
      </li>
    </ul>
  )
}

export default Nav;
