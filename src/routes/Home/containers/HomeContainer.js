import { connect } from 'react-redux'
import { selectTab, fetchPosts } from '../modules/list';

import Home from '../components/HomeView';


const mapStateToProps = state => {
    return {
        tab: state.home.tab,
        list: state.home.list
    }
}

const mapDispatchToProps = {
    setTab: tab => selectTab(tab),
    getData: tab => fetchPosts(tab)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);