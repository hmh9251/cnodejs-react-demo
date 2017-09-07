export default _ => ({
  path: 'getstart',
  getComponent(nextState, callback) {
    require.ensure([], require => {
        const GetStart  = require('./components/GetStart').default;

        callback(null, GetStart);
    }, 'getstart')
  }
})
