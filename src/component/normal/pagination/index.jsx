import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Pagination({ tab, page }) {
  return (
    <div className={style.pagination}>
      <ul>
        <li className={style.disable}>{ page === '1' ?  (<a>«</a>) : (<Link to="/">«</Link>)}</li>
        <li className={style.disable + ' ' + style.active}><a>1</a></li>
        <li><Link to="/">2</Link></li>
        <li><Link to="/">3</Link></li>
        <li><Link to="/">4</Link></li>
        <li><Link to="/">5</Link></li>
        <li><Link to="/">...</Link></li>
      </ul>
    </div>
  )
}
Pagination.propTypes = {
  tab: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}

export default Pagination;
