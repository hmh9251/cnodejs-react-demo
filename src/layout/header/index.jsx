import React from 'react';
import style from './style';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.header}>
        <div className={style.navContainer}>
          <Link to="/" className={style.brand}><img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" /></Link>
          <form id="search_form" className={style.headerSearch}><i className="fa fa-search" /><input type="text" /></form>
          <ul className={style.nav}>
            <li className={style.navItem}><Link to="/">首页</Link></li>
            <li className={style.navItem}><Link to="/getstart">新手入门</Link></li>
            <li className={style.navItem}><Link to="/api">API</Link></li>
            <li className={style.navItem}><Link to="/about">关于</Link></li>
            <li className={style.navItem}><Link to="/signup">注册</Link></li>
            <li className={style.navItem}><Link to="/signin">登录</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
