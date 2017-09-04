import React from 'react';
import style from './Cell.scss';
import CSSModules from 'react-css-modules';

const Cell = props => (
  <div styleName="cell">
    <a styleName="user_avatar pull-left" href="/user/xinyu198736">
      <img src={props.author.avatar_url} title="xinyu198736"/>
    </a>

    <span styleName="reply_count pull-left">
      <span styleName="count_of_replies" title="回复数">
        {props.reply_count}
      </span>
      <span styleName="count_seperator">/</span>
      <span styleName="count_of_visits" title="点击数">
        {props.visit_count}
      </span>
    </span>

    <div styleName="topic_title_wrapper">
      <span styleName="put_top topiclist-tab">置顶</span>
      <a styleName="topic_title" href="/topic/599e90e1bae6f2ed6f7e4cd4" title="杭州 NodeParty 第四期总结（slide、现场照片）">
        {props.title}
      </a>
    </div>

    <a styleName="last_time pull-right" href="/topic/599e90e1bae6f2ed6f7e4cd4#59aacc329e95202d08c91edb">
      <img styleName="user_small_avatar" src="https://avatars2.githubusercontent.com/u/8089971?v=4&amp;s=120"/>
      <span styleName="last_active_time">{props.last_reply_at}</span>
    </a>
  </div>
)

export default CSSModules(Cell, style, {allowMultiple: true})