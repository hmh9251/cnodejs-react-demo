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
    this.props.getData(this.props.routeParams.id, "1")
  }

  componentWillReceiveProps(nextprops) {
    if(nextprops.routeParams.id !== nextprops.tab) {
      this.props.setTab(nextprops.routeParams.id)
      this.props.getData(nextprops.routeParams.id, "1")
    } else if( (nextprops.routeParams.id === nextprops.tab) && (nextprops.routeParams.page !== nextprops.page) ) {
      this.props.getData(nextprops.routeParams.id, nextprops.routeParams.page)
    }
  }

  render() {
    return (
      <div>
        <Panel>
          <PanelHeader>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'all' ? styles.current_tab : '')} to="/home/all/1">全部</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'good' ? styles.current_tab : '')} to="/home/good/1">精华</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'share' ? styles.current_tab : '')} to="/home/share/1">分享</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'ask' ? styles.current_tab : '')} to="/home/ask/1">问答</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'job' ? styles.current_tab : '')} to="/home/job/1">招聘</Link>
            <Link  className={styles.topic_tab + ' ' + (this.props.tab === 'dev' ? styles.current_tab : '')} to="/home/dev/1">客户端测试</Link>
          </PanelHeader>
          <PanelBody>
            {
              this.props.list.map(item => (
                <Cell key={item.id} {...item} />
              ))
            }
          </PanelBody>
          <Page tab={this.props.tab} page={this.props.page} />
        </Panel>
      </div>
    )
  }
}

export default HomeView
