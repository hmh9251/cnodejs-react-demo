import { connect } from 'react-redux'
import { selectTab, fetchPosts, setCurrentPage } from '../modules/list';

import Home from '../components/HomeView';


const mapStateToProps = state => {
    return {
        page: state.home.page,
        tab: state.home.tab,
        list: state.home.list
    }
}

const mapDispatchToProps = {
    setTab: tab => selectTab(tab),
    getData: (tab, page) => fetchPosts(tab, page)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);