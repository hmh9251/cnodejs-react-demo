import { connect } from 'react-redux'
import { setTopicId, getShowDetailFetch } from '../modules/detail';

import Topic from '../components/Topic';


const mapStateToProps = state => {
    return {
        data: state.topic.data
    }
}

const mapDispatchToProps = {
    setTopicId: id => setTopicId(id),
    getDetail: id => getShowDetailFetch(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);