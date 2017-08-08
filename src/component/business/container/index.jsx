import React from 'react';
import style from './style';

import PropTypes from 'prop-types';

let propTypes = {
  children: PropTypes.element.isRequired
}

export function Container({children}) {
  return (
    <div className={style.main} >
      {children}
    </div>
  )
}

Container.propTypes = propTypes;

export function Sidebar({ children }) {
  return (
    <div className={style.sidebar}>
      {children}
    </div>
  )
}

Sidebar.propTypes = propTypes;

export function Content({ children }) {
  return (
    <div className={style.content}>
      {children}
    </div>
  )
}

Content.propTypes = propTypes;
