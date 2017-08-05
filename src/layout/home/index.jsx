import React from 'react';
import style from './style';

import { Panel, PanelHeader, PanelInner } from '../../component/business/panel';
import Nav from '../../component/business/nav';
import List from '../../component/business/list';

class Home extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.sidebar}>sidebar</div>
        <div className={style.content}>
          <Panel>
            <section>
              <PanelHeader><Nav /></PanelHeader>
              <PanelInner>
                <List />
              </PanelInner>
            </section>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Home;