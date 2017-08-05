import React from 'react';
import style from './style';

import { Panel, PanelHeader, PanelInner } from '../../component/business/panel';

class Home extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.sidebar}>sidebar</div>
        <div className={style.content}>
          <Panel>
            <section>
              <PanelHeader>
                <div>PanelHeader</div>
              </PanelHeader>
              <PanelInner>
                <div>container</div>
              </PanelInner>
            </section>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Home;
