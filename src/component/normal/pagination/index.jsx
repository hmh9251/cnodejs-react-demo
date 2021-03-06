import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Pagination({ tab, page }) {
  let totalPage = 100;
  page = parseInt(page);
  let arr = [];
  if (page <= 3) {
    for (let i = 1; i < 6; i++) {
      if (i === page) {
        arr.push(<li key={arr.length} className={style.disable + ' ' + style.active}><a>{i}</a></li>)
        continue;
      }
      arr.push(<li key={arr.length}><Link to={'/tab/' + tab + '/' + i}>{i}</Link></li>);
    }
    arr.push(<li key={arr.length}><a to="/">...</a></li>)
  } else if (totalPage - page <= 2) {
    arr.push(<li key={arr.length}><a to="/">...</a></li>)
    for (let i = totalPage - 4; i <= totalPage; i++) {
      if (i === page) {
        arr.push(<li key={arr.length} className={style.disable + ' ' + style.active}><a>{i}</a></li>)
        continue;
      }
      arr.push(<li key={arr.length}><Link to={'/tab/' + tab + '/' + i}>{i}</Link></li>);
    }
  } else {
    arr.push(<li key={arr.length}><a to="/">...</a></li>)
    for (let i = page - 2; i < page + 3; i++) {
      if (i === page) {
        arr.push(<li key={arr.length} className={style.disable + ' ' + style.active}><a>{i}</a></li>)
        continue;
      }
      arr.push(<li key={arr.length}><Link to={'/tab/' + tab + '/' + i}>{i}</Link></li>);
    }
    arr.push(<li key={arr.length}><a to="/">...</a></li>)
  }

  return (
    <div className={style.pagination}>
      <ul>
        <li className={style.disable}>{ page === 1 ? (<a>«</a>) : (<Link to={'/tab/' + tab + '/1'}>«</Link>)}</li>
        {arr}
        <li className={style.disable}>{ page === totalPage ? (<a>»</a>) : (<Link to={'/tab/' + tab + '/' + totalPage}>»</Link>)}</li>
      </ul>
    </div>
  )
}
Pagination.propTypes = {
  tab: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}

export default Pagination;
