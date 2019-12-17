import router from "./router"
import nprogress from "nprogress"
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth"

nprogress.configure({showSpinner: false});

//设置白名单页面
const whiteList = ['/login', '/401', '/404', '/500'];

router.beforeEach((to, from, next) => {
  nprogress.start();
  if (getToken()) { // 有token的情况
    next()
  } else { // 没有token的情况
    if (whiteList.indexOf(to.path) !== -1) {
      return next()
    }
    // next()
    next(`/login?redirect=${to.path}`)
  }
});

router.afterEach(() => {
  nprogress.done()
});

