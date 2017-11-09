import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ReplyCell.scss";
import moment from "moment";
moment.locale("zh-cn");

function ReplyCell(props) {
    return (
        <div
            styleName="cell reply_highlight"
            id="58eeea40c749f63d48fe9427"
        >
            <div styleName="author_content">
                <a href="/user/hyj1991" styleName="user_avatar">
                    <img src={props.author.avatar_url} title="hyj1991" />
                </a>

                <div styleName="user_info">
                    <a styleName="dark" href="/user/hyj1991">
                        hyj1991
                    </a>
                    <a styleName="reply_time" href="#58eeea40c749f63d48fe9427">
                        {props.index}楼•{moment(
                            moment(props.create_at).format("YYYYMMDD HH:mm"),
                            "YYYYMMDD HH:mm"
                        ).fromNow()}
                    </a>
                </div>
                <div styleName="user_action">
                    <span>
                        {/* <i styleName="fa up_btn fa-thumbs-o-up " title="喜欢"></i> */}
                        <span styleName="up-count">{props.ups.length}</span>
                    </span>
                    <span> </span>
                </div>
            </div>
            <div
                styleName="reply_content"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
    );
}

export default CSSModules(ReplyCell, styles, { allowMultiple: true });
