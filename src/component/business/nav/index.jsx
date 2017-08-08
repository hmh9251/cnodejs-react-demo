import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav({ pathname }) {
  let url = pathname.match(/\/tab\/(.*)\//)[1];

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

Nav.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Nav;
