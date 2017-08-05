import React from 'react';
import style from './style';

import PropTypes from 'prop-types';

let propTypes = {
  children: PropTypes.element.isRequired
}

export function Panel({children}) {
  return (
    <div className={style.panel} >
      {children}
    </div>
  )
}

Panel.propTypes = propTypes;

export function PanelHeader({ children }) {
  return (
    <div className={style.header}>
      {children}
    </div>
  )
}

PanelHeader.propTypes = propTypes;

export function PanelInner({ children }) {
  return (
    <div className={style.inner}>
      {children}
    </div>
  )
}

PanelInner.propTypes = propTypes;
