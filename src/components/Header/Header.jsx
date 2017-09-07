import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import { IndexLink, Link } from 'react-router';

function Header() {
    return (
        <div styleName="header">
            <div styleName="body" className="clearfix">
                <div styleName='left'>
                    <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"/>
                </div>
                <ul styleName="right">
                    <li styleName="item"><IndexLink to="/home/all/1">首页</IndexLink></li>
                    <li styleName="item"><Link to="/getstart">新手入门</Link></li>
                    <li styleName="item"><Link to="/api">API</Link></li>
                    <li styleName="item"><Link to="/about">关于</Link></li>
                    <li styleName="item"><Link to="/signup">注册</Link></li>
                    <li styleName="item"><Link to="/signin">登录</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default CSSModules(Header, styles, {allowMultiple: true});
