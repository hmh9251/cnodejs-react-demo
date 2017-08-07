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
        <div className={style.sidebar}>sidebar</div>
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
