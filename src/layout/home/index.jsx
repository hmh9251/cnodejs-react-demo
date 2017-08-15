import React from 'react';
// import style from './style';

import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Sidebar, Content } from '../../component/business/container';
import { Panel, PanelHeader, PanelInner } from '../../component/business/panel';
import Nav from '../../component/business/nav';
import List from '../../component/business/list';
import Pagination from '../../component/normal/pagination';
import { NoReplyTopic, Scoreboard, NoLogin } from '../../component/business/panel-body';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      path: nextProps.location.pathname
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
              <section>
                <PanelHeader><Nav pathname={this.state.path} /></PanelHeader>
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
          </Content>
        </div>
      </Container>
    )
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired
}

export default Home;
