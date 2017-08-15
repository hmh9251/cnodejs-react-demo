import React, { Component } from 'react';
import style from './style';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Container, Sidebar, Content } from '../../component/business/container';
import { Panel, PanelHeader, PanelInner } from '../../component/business/panel';
import { NoReplyTopic, Scoreboard, NoLogin } from '../../component/business/panel-body';
class Detail extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    this.state = {
      loading: true,
      data: {}
    }

    this.getData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.getData(nextProps.match.params.id);
    }
  }

  getData(id) {
    let url = 'https://cnodejs.org/api/v1/topic/' + id + '?mdrender=true';
    axios.get(url)
      .then(req => {
        console.log(req);
        if (req.status === 200) {
          if (req.data.success) {
            this.setState({
              data: req.data.data,
              loading: false
            })
          }
        }
      })
  }

  render() {
    return (
      <Container>
        <div>
          <Sidebar>
            <section>
              <Panel>
                <PanelInner><NoLogin /></PanelInner>
              </Panel>
              <Panel>
                <section>
                  <PanelHeader><span>无人回复的话题</span></PanelHeader>
                  <PanelInner>
                    <NoReplyTopic />
                  </PanelInner>
                </section>
              </Panel>
              <Panel>
                <section>
                  <PanelHeader>
                    <section>
                      <span>积分榜&nbsp;&nbsp;</span>
                      <span>TOP >></span>
                    </section>
                  </PanelHeader>
                  <PanelInner>
                    <Scoreboard />
                  </PanelInner>
                </section>
              </Panel>
            </section>
          </Sidebar>
          <Content>
            <Panel>
              {this.state.loading ? (<div>Loading...</div>) : <DetailContent data={this.state.data} />}
            </Panel>
          </Content>
        </div>
      </Container>
    )
  }
}

function DetailContent({ data }) {
  let { tab, title, create_at, visit_count, last_reply_at, author, content } = data;
  let tabContent = '';
  if (top) {
    tabContent = '置顶';
  } else {
    switch (tab) {
      case 'share': tabContent = '分享'; break;
      case 'ask': tabContent = '问答'; break;
      case 'job': tabContent = '招聘'; break;
      case 'good': tabContent = '精华'; break;
      default: tabContent = '其他';
    }
  }
  return (
    <section>
      <PanelHeader>
        <div className={style.header} >
          <span className={style.topic_full_title}><span className={style.put_top}>{tabContent}</span>{title}</span>
          <div className={style.changes}>
            <span>•发布于 {create_at}</span>
            <span>•作者 <a href="/user/lellansin">lellansin</a></span>
            <span>•{visit_count} 次浏览</span>
            <span>•最后一次编辑是 {last_reply_at}</span>
            <span>•来自{author.loginname}分享</span>
          </div>
        </div>
      </PanelHeader>
      <PanelInner>
        <div className={style.content} dangerouslySetInnerHTML={{ __html: content }} />
      </PanelInner>
    </section>

  )
}

DetailContent.propTypes = {
  data: PropTypes.object.isRequired
}

export default Detail;
