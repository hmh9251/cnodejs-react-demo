import { injectReducer } from '../../store/reducers'

export default store => ({
  path: 'home/:id/:page',
  getComponent(nextState, callback) {
    require.ensure([], require => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/list').default

      injectReducer(store, { key:'home', reducer})

      callback(null, Home);
    }, 'home')
  }
})