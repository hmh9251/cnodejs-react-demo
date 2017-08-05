import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function List() {
  let arr = [];
  for (let i = 0; i < 40; i++) {
    arr.push(<Cell key={i} />);
  }
  return (
    <div className={style.topic_list}>
      {arr}
    </div>
  )
}

function Cell() {
  return (
    <div className={style.cell}>
      <div className={style.cell_left + ' clearfix'}>
        <Link to="/" className={style.user_avatar}><img src="https://avatars3.githubusercontent.com/u/3118295?v=4&s=120" alt="" /></Link>
        <span className={style.reply_count}>
          <span className={style.count_of_replies} title="回复数">
            120
          </span>
          <span className={style.count_seperator}>/</span>
          <span className={style.count_of_visits} title="点击数">
            43101
          </span>
        </span>
        <span className={style.put_top}>置顶</span>
        <span className={style.put_top + ' ' + style.topiclist_tab}>问答</span>
        <Link to="/" className={style.title}>Node.js Event Loop 的理解 Timers，process.nextTick()</Link>
      </div>
      <div className={style.cell_right}>
        <Link to="/">
          <img src="https://avatars0.githubusercontent.com/u/7396507?v=4&s=120" alt="" />
          <span>4天前</span>
        </Link>
      </div>
    </div>
  )
}

export default List;
