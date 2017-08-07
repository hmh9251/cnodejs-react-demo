import React from 'react';
import style from './style';

import { Route } from 'react-router-dom';

import { Panel, PanelHeader, PanelInner } from '../../component/business/panel';
import Nav from '../../component/business/nav';
import List from '../../component/business/list';
import Pagination from '../../component/normal/pagination';

class Home extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.sidebar}>
          <Panel>
            <section>
              <PanelHeader>无人回复的话题</PanelHeader>
              <PanelInner>
                <ul class="unstyled">
                  <li>
                    <div><a class="dark topic_title" href="/topic/59881c0b2d4b0af475035301" title="express与koa中间件模式对比">express与koa中间件模式对比</a>
                    </div>
                  </li>
                  <li>
                    <div><a class="dark topic_title" href="/topic/5987caab206061d87545c52d" title="基于Koa2和superagent实现的英语四六级成绩查询系统，同时提供免费API接口">基于Koa2和superagent实现的英语四六级成绩查询系统，同时提供免费API接口</a>
                    </div>
                  </li>
                  <li>
                    <div><a class="dark topic_title" href="/topic/59871971206061d87545c514" title="Egg，React，MobX，SSR（服务端渲染）Demo">Egg，React，MobX，SSR（服务端渲染）Demo</a>
                    </div>
                  </li>
                  <li>
                    <div><a class="dark topic_title" href="/topic/5986e486e78b15b416835126" title="react-navigation 跳转路由，旧页面数据状态问题？">react-navigation 跳转路由，旧页面数据状态问题？</a>
                    </div>
                  </li>
                  <li>
                    <div><a class="dark topic_title" href="/topic/5986db9adf27f24718ea94ce" title="Koa开发项目，有什么好的类似于swagger的可视化api管理包吗">Koa开发项目，有什么好的类似于swagger的可视化api管理包吗</a>
                    </div>
                  </li>
                </ul>
              </PanelInner>
            </section>
          </Panel>
        </div>
        <div className={style.content}>
          <Panel>
            <section>
              <PanelHeader><Nav /></PanelHeader>
              <Route path="/tab/:id/:page" render={({ match }) => (
                <PanelInner>
                  <section>
                    <List tab={match.params.id} page={match.params.page} />
                    <Pagination tab={match.params.id} page={match.params.page} />
                  </section>
                </PanelInner>
              )} />
            </section>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Home;
