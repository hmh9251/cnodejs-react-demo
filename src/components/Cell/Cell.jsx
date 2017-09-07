import React from 'react';
import style from './Cell.scss';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import { Link } from 'react-router';

moment.locale('zh-cn');

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
    
    <a styleName="last_time pull-right" href="/topic/599e90e1bae6f2ed6f7e4cd4#59aacc329e95202d08c91edb">
      <span styleName="last_active_time">{moment(moment(props.last_reply_at).format("YYYYMMDD HH:mm"), "YYYYMMDD HH:mm").fromNow()}</span>
    </a>

    <div styleName="topic_title_wrapper">
      <span styleName="topiclist-tab" className={props.top ? style.put_top : ''}>
        {
          (props.top && '置顶')
        || (props.tab === 'share' && '分享')
        || (props.tab === 'ask' && '问答')
        || (props.tab === 'job' && '招聘')
        || (props.tab === 'good' && '精华')
        || '其他'
        }
        </span>
      <Link styleName="topic_title" to={"/topic/" + props.id} title="杭州 NodeParty 第四期总结（slide、现场照片）">
        {props.title}
      </Link>
    </div>

    
  </div>
)

export default CSSModules(Cell, style, {allowMultiple: true})