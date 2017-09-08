import React from 'react';
import styles from './Topic.scss';
import CSSModules from 'react-css-modules';
import {Panel, PanelHeader, PanelBody} from 'components/Panel/Panel'
import ReplyCell from 'components/ReplyCell/ReplyCell'
import moment from 'moment'

moment.locale('zh-cn');

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.props.setTopicId(this.props.routeParams.id)
        this.props.getDetail(this.props.routeParams.id);
    }

    componentWillReceiveProps(nextprops) {
        console.log(nextprops);
    }

    render() {
        if(Object.keys(this.props.data).length === 0) {
            return (
                <div>loading...</div>
            )
        }
        return(
            <div className="container">
                <Panel>
                    <PanelHeader>
                        <div styleName="topic_header">
                            <span styleName="topic_full_title">
                                <span styleName="topiclist-tab" className={this.props.data.top ? styles.put_top : ''}>
                                    {
                                    (this.props.data.top && '置顶')
                                    || (this.props.data.tab === 'share' && '分享')
                                    || (this.props.data.tab === 'ask' && '问答')
                                    || (this.props.data.tab === 'job' && '招聘')
                                    || (this.props.data.tab === 'good' && '精华')
                                    || '其他'
                                    }</span>{this.props.data.title}
                                </span>
                            <div styleName="changes">
                                <span>发布于 {moment(moment(this.props.data.create_at).format("YYYYMMDD HH:mm"), "YYYYMMDD HH:mm").fromNow()}</span>
                                <span>作者 <a href={"/user/" + this.props.data.author.loginname}>{this.props.data.author.loginname}</a></span>
                                <span>{this.props.data.visit_count} 次浏览</span>
                                <span> 来自 分享</span>
                            </div>
                        </div>
                    </PanelHeader>
                    <PanelBody>
                        <div styleName="topic_content"  dangerouslySetInnerHTML={{__html: this.props.data.content}}></div>
                    </PanelBody>
                </Panel>
                <Panel>
                    <PanelHeader>
                        <span styleName="col_fade">{this.props.data.reply_count} 回复</span>
                        {this.props.data.replies.map((item, i) => (
                            <ReplyCell index={i} {...item} key={item.id} />
                        ))}
                    </PanelHeader>
                    <PanelBody></PanelBody>
                </Panel>
            </div>
        )
    }
}

export default CSSModules(Topic, styles)