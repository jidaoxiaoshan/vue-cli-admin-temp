import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Layout from "@/layout/Layout"
import Layout from "@/layout/index"
import LayoutMain from "@/layout/main/LayoutMain"

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

export default new Router({
  mode: "history",
  routes: [
    {
      path: '',
      name: 'home',
      redirect: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('../views/index'),
          meta: {
            title: '首页',
            breadcrumb: false,
            icon:"el-icon-s-home",
          }
        },
        {
          path: '/system',
          name: 'system',
          component: LayoutMain,
          redirect: '/system/user',
          alwaysShow: true,
          children: [
            {
              path: '/system/user',
              name: 'user',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/user/index.vue'),
              meta: {
                title: '用户管理',
                breadcrumb: true,
              }
            },
            {
              path: '/system/role',
              name: 'role',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/role/index.vue'),
              meta: {
                title: '角色管理',
                breadcrumb: true,
              }
            },{
              path: '/system/menu',
              name: 'menu',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/menu/index.vue'),
              meta: {
                title: '菜单管理',
                breadcrumb: true,
              }
            },{
              path: '/system/notice',
              name: 'notice',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/notice/index.vue'),
              meta: {
                title: '通知管理',
                breadcrumb: true,
              }
            },{
              path: '/system/dept',
              name: 'dept',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/dept/index.vue'),
              meta: {
                title: '部门管理',
                breadcrumb: true,
              }
            },{
              path: '/system/config',
              name: 'config',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/config/index.vue'),
              meta: {
                title: '参数管理',
                breadcrumb: true,
              }
            },{
              path: '/system/post',
              name: 'post',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/post/index.vue'),
              meta: {
                title: '岗位管理',
                breadcrumb: true,
              }
            },
            {
              path: '/system/log',
              name: 'log',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/log/index.vue'),
              meta: {
                title: '日志管理',
                breadcrumb: true,
              }
            },
            {
              path: '/system/dict',
              name: 'dict',
              component: () => import(/* webpackChunkName: "system" */ '../views/system/dict/index.vue'),
              meta: {
                title: '字典管理',
                breadcrumb: true,
              }
            }
          ],
          meta:{
            title:"系统管理",
            breadcrumb: false,
            icon:"el-icon-s-home",
          }
        },
        {
          path: '/tool',
          name: 'tool',
          component: LayoutMain,
          redirect: '/system/user',
          children:[
            {
              path: '/tool/build',
              name: 'build',
              component: () => import(/* webpackChunkName: "tool" */ '../views/tool/build/index.vue'),
              meta: {
                title: '表单构建',
                breadcrumb: true,
              }
            },{
              path: '/tool/gen',
              name: 'gen',
              component: () => import(/* webpackChunkName: "tool" */ '../views/tool/gen/index.vue'),
              meta: {
                title: '代码生成',
                breadcrumb: true,
              }
            },{
              path: '/tool/swagger',
              name: 'swagger',
              component: () => import(/* webpackChunkName: "tool" */ '../views/tool/swagger/index.vue'),
              meta: {
                title: '系统接口',
                breadcrumb: true,
              }
            },
          ],
          meta:{
            title:"系统工具",
            breadcrumb: false,
            icon:"el-icon-s-home",
          }
        },{
          path: '/monitor',
          name: 'monitor',
          component: LayoutMain,
          redirect: '/monitor/online',
          children:[
            {
              path: '/monitor/online',
              name: 'online',
              component: () => import(/* webpackChunkName: "monitor" */ '../views/monitor/online/index.vue'),
              meta: {
                title: '在线人数',
                breadcrumb: true,
              }
            }, {
              path: '/monitor/job',
              name: 'job',
              component: () => import(/* webpackChunkName: "monitor" */ '../views/monitor/job/index.vue'),
              meta: {
                title: '定时任务',
                breadcrumb: true,
              }
            },{
              path: '/monitor/logininfor',
              name: 'logininfor',
              component: () => import(/* webpackChunkName: "monitor" */ '../views/monitor/logininfor/index.vue'),
              meta: {
                title: '流量统计',
                breadcrumb: true,
              }
            },
          ],
          meta:{
            title:"系统监控",
            breadcrumb: false,
            icon:"el-icon-s-home",
          }
        },  {
          path: '/c',
          name: 'c',
          component: () => import(/* webpackChunkName: "c" */ '../views/c.vue'),
          meta: {
            title: '页面c',
            breadcrumb: true,
            icon:"el-icon-s-home",
          }
        }, {
          path: '/f',
          name: 'f',
          component: () => import(/* webpackChunkName: "f" */ '../views/f.vue'),
          hidden:true,
          meta: {
            title: '页面f',
            breadcrumb: true,
            icon:"el-icon-s-home",
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login'),
    },
    {
      path: '/401',
      name: '401',
      component: () => import('../views/error/401'),
    },{
      path: '/500',
      name: '500',
      component: () => import('../views/error/500'),
    },{
      path: '*',
      name: '404',
      component: () => import('../views/error/404'),
    },
  ]
})
