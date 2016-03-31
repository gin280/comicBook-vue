// import $ from 'zepto'

export default function (router) {
  router.map({
    '/home': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/search': {
      component (resolve) {
        require(['./views/search'], resolve)
      }
    },
    '/me': {
      component (resolve) {
        require(['./views/me'], resolve)
      }
    }
  })
}
