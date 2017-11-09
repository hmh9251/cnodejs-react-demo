export default _ => ({
  path: 'api',
  getComponent(nextState, callback) {
    require.ensure([], require => {
        const Api  = require('./components/Api').default;

        callback(null, Api);
    }, 'api')
  }
})
