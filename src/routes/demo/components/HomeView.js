import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import styles from './HomeView.scss'
import {Panel, PanelHeader, PanelBody} from 'components/Panel/Panel'
import {Link} from 'react-router';

export const HomeView = (props) => {
  console.log(props);
  return (
    <div>
      <Panel>
        <PanelHeader>
          <Link to="/Home/all">全部</Link>
          <Link to="/Home/good">精华</Link>
          <Link to="/Home/share">分享</Link>
          <Link to="/Home/ask">问答</Link>
          <Link to="/Home/job">招聘</Link>
          <Link to="/Home/dev">客户端测试</Link>
        </PanelHeader>
        <PanelBody></PanelBody>
      </Panel>
    </div>
  )
}

export default HomeView
