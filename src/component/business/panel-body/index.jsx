import React from 'react';
import style from './style';
/**
 * 无人回复的话题
 * 没有接口写死在这里
 */
export function NoReplyTopic() {
  return (
    <ul className={style.NoReplyTopic}>
      <li>
        <a href="/topic/59881c0b2d4b0af475035301" title="express与koa中间件模式对比">express与koa中间件模式对比</a>
      </li>
      <li>
        <a href="/topic/5987caab206061d87545c52d" title="基于Koa2和superagent实现的英语四六级成绩查询系统，同时提供免费API接口">基于Koa2和superagent实现的英语四六级成绩查询系统，同时提供免费API接口</a>
      </li>
      <li>
        <a href="/topic/59871971206061d87545c514" title="Egg，React，MobX，SSR（服务端渲染）Demo">Egg，React，MobX，SSR（服务端渲染）Demo</a>
      </li>
      <li>
        <a href="/topic/5986e486e78b15b416835126" title="react-navigation 跳转路由，旧页面数据状态问题？">react-navigation 跳转路由，旧页面数据状态问题？</a>
      </li>
      <li>
        <a href="/topic/5986db9adf27f24718ea94ce" title="Koa开发项目，有什么好的类似于swagger的可视化api管理包吗">Koa开发项目，有什么好的类似于swagger的可视化api管理包吗</a>
      </li>
    </ul>
  )
}

/**
 * 积分榜
 * 没有接口 写死在这里
 */
export function Scoreboard() {
  return (
    <ol className={style.Scoreboard}>
      <li>
        <span className={style.top_score}>19375</span>
        <span className={style.user_name}><a href="/user/i5ting">i5ting</a></span>
      </li>
      <li>
        <span className={style.top_score}>14595</span>
        <span className={style.user_name}><a href="/user/alsotang">alsotang</a></span>
      </li>
      <li>
        <span className={style.top_score}>9330</span>
        <span className={style.user_name}><a href="/user/leapon">leapon</a></span>
      </li>
      <li>
        <span className={style.top_score}>8700</span>
        <span className={style.user_name}><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
      </li>
      <li>
        <span className={style.top_score}>6660</span>
        <span className={style.user_name}><a href="/user/zy445566">zy445566</a></span>
      </li>
      <li>
        <span className={style.top_score}>6550</span>
        <span className={style.user_name}><a href="/user/yakczh">yakczh</a></span>
      </li>
      <li>
        <span className={style.top_score}>5500</span>
        <span className={style.user_name}><a href="/user/DevinXian">DevinXian</a></span>
      </li>
      <li>
        <span className={style.top_score}>5295</span>
        <span className={style.user_name}><a href="/user/imhered">imhered</a></span>
      </li>
      <li>
        <span className={style.top_score}>5190</span>
        <span className={style.user_name}><a href="/user/magicdawn">magicdawn</a></span>
      </li>
      <li>
        <span className={style.top_score}>4650</span>
        <span className={style.user_name}><a href="/user/captainblue2013">captainblue2013</a></span>
      </li>
    </ol>
  )
}

export function NoLogin() {
  return (
    <section className={style.noLogin}>
      <p>CNode：Node.js专业中文社区</p>
      <div>您可以<a href="/signin"> 登录 </a>或<a href="/signup"> 注册 </a>, 也可以<a href="/auth/github"><span className="span-info">通过 GitHub 登录</span></a></div>
    </section>
  )
}
