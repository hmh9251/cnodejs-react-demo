import { injectReducer } from '../../store/reducers'

export default store => ({
  path: 'topic/:id',
  getComponent(nextState, callback) {
    require.ensure([], require => {
      const Topic = require('./containers/TopicContainer').default
      const reducer = require('./modules/detail').default

      injectReducer(store, { key:'topic', reducer})

      callback(null, Topic);
    }, 'topic')
  }
})