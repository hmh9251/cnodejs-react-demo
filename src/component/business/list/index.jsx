import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    axios.get('http://cnodejs.org/api/v1/topics?tab=' + this.props.tab + '&page=' + this.props.page + '&limit=20')
      .then((req) => {
        if (req.status === 200 && req.data.success === true) {
          this.setState({
            data: req.data.data
          })
        }
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tab && nextProps.page) {
      axios.get('http://cnodejs.org/api/v1/topics?tab=' + nextProps.tab + '&page=' + nextProps.page + '&limit=20')
        .then((req) => {
          if (req.status === 200 && req.data.success === true) {
            this.setState({
              data: req.data.data
            })
          }
        })
    }
  }

  render() {
    return (
      <div className={style.topic_list}>
        {this.state.data.map((result) => (
          <Cell key={result.id} data={result} />
        ))}
      </div>
    )
  }
}

List.propTypes = {
  tab: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}

function Cell({ data }) {
  let { author, reply_count, visit_count, title, top, tab, id } = data
  return (
    <div className={style.cell}>
      <div className={style.cell_left + ' clearfix'}>
        <Link to="/" className={style.user_avatar}><img src={author.avatar_url} alt="" /></Link>
        <span className={style.reply_count}>
          <span className={style.count_of_replies} title="回复数">{reply_count}</span>
          <span className={style.count_seperator}>/</span>
          <span className={style.count_of_visits} title="点击数">{visit_count}</span>
        </span>
        <span className={style.put_top + ' ' + (!top ? style.topiclist_tab : '')}>
          {
            top ? '置顶' : (
              tab === 'share' ? '分享' : (
                tab === 'ask' ? '问答' : (
                  tab === 'job' ? '招聘' : (
                    tab === 'good' ? '精华' : '其他'
                  )
                )
              )
            )
          }
        </span>
        {/* <span className={style.put_top + ' ' + style.topiclist_tab}>问答</span> */}
        <Link to={`/detail/${id}`} className={style.title}>{title}</Link>
      </div>
      <div className={style.cell_right}>
        <Link to="/">
          {/* <img src="https://avatars0.githubusercontent.com/u/7396507?v=4&s=120" alt="" /> */}
          <span>4天前</span>
        </Link>
      </div>
    </div>
  )
}

Cell.propTypes = {
  data: PropTypes.object.isRequired
}

/* Cell.propTypes = {
  author: PropTypes.object.isRequired,
  reply_count: PropTypes.number.isRequired,
  visit_count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  top: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired
} */

export default List;
