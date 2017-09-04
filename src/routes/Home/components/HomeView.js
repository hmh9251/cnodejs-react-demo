import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import styles from './HomeView.scss'
import {Panel, PanelHeader, PanelBody} from 'components/Panel/Panel'
import Cell from 'components/Cell/Cell'
import Page from 'components/Page/Page'
import {Link} from 'react-router';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.props.setTab(this.props.routeParams.id)
    this.props.getData(this.props.routeParams.id)

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if(nextprops.routeParams.id !== nextprops.tab) {
      console.log(nextprops);
      this.props.setTab(nextprops.routeParams.id)
      this.props.getData(nextprops.routeParams.id)
    }
  }

  handleChange(tab) {
    this.props.setTab(tab);
    this.props.getData(tab)
  }

  render() {
    return (
      <div>
        <Panel>
          <PanelHeader>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'all' ? styles.current_tab : '')} to="/home/all">全部</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'good' ? styles.current_tab : '')} to="/home/good">精华</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'share' ? styles.current_tab : '')} to="/home/share">分享</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'ask' ? styles.current_tab : '')} to="/home/ask">问答</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'job' ? styles.current_tab : '')} to="/home/job">招聘</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'dev' ? styles.current_tab : '')} to="/home/dev">客户端测试</Link>
          </PanelHeader>
          <PanelBody>
            {
              this.props.list.map(item => (
                <Cell key={item.id} {...item} />
              ))
            }
          </PanelBody>
        </Panel>
        <Page />
      </div>
    )
  }
}

export default HomeView
