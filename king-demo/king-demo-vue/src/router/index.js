import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 框架视图 */
import Layout from '@/views/layout/Layout'
import Blank from '@/views/Blank'
/* views */
import dashboard_index from '@/views/dashboard/index'
import supermarket_supplier from '@/views/supermarket/supplier'
import supermarket_supplier1 from '@/views/supermarket/supplier'
import supermarket_supplier2 from '@/views/supermarket/supplier'
import supermarket_supplier3 from '@/views/supermarket/supplier'
import admin_role from '@/views/admin/role'
import admin_user from '@/views/admin/user'
import funShow_components_demo_dragDialog from '@/views/funShow/components-demo/dragDialog'
import funShow_components_demo_dndList from '@/views/funShow/components-demo/dndList'
import funShow_components_demo_dragKanban from '@/views/funShow/components-demo/dragKanban'
import funShow_charts_keyboard from '@/views/funShow/charts/keyboard'
import funShow_charts_line from '@/views/funShow/charts/line'
import funShow_charts_mixChart from '@/views/funShow/charts/mixChart'
import funShow_tab_index from '@/views/funShow/tab/index'
import funShow_table_inlineEditTable from '@/views/funShow/table/inlineEditTable'
import funShow_table_complexTable from '@/views/funShow/table/complexTable'
import system_svg_icons_index from '@/views/system/svg-icons/index'
import system_errorPage_401 from '@/views/system/errorPage/401'
import system_errorPage_404 from '@/views/system/errorPage/404'
import system_theme_index from '@/views/system/theme/index'
import system_i18n_demo_index from '@/views/system/i18n-demo/index'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true, noCache: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true, noCache: true },
  { path: '/404', component: () => import('@/views/system/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/system/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'index',
    children: [
      {
        path: '/dashboard',
        component: dashboard_index,
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const routerMap = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'index',
    children: [
      {
        path: 'dashboard',
        component: dashboard_index,
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/supermarket',
    component: Layout,
    redirect: '/supermarket/supplier',
    name: 'supermarket',
    meta: {
      title: 'supermarket',
      icon: 'shoppingCard'
    },
    children: [{
      path: 'supplier',
      component: supermarket_supplier,
      name: 'supplier',
      meta: { title: 'supplier', icon: 'shoppingCard', noCache: true }
    }, {
      path: 'customer',
      component: supermarket_supplier1,
      name: 'customer',
      meta: { title: 'customer', icon: 'customer', noCache: true }
    }, {
      path: 'product',
      component: supermarket_supplier2,
      name: 'product',
      meta: { title: 'product', icon: 'product', noCache: true }
    }, {
      path: 'reportForm',
      component: supermarket_supplier3,
      name: 'reportForm',
      meta: { title: 'reportForm', icon: 'reportForm', noCache: true }
    }]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/role',
    name: 'admin',
    meta: {
      title: 'admin',
      icon: 'set'
    },
    children: [
      {
        path: 'role',
        component: admin_role,
        name: 'role',
        meta: { title: 'role', icon: 'theme', noCache: true }
      },
      {
        path: 'user',
        component: admin_user,
        name: 'user',
        meta: { title: 'user', icon: 'peoples', noCache: true }
      }
    ]
  },
  {
    path: '/funShow',
    component: Layout,
    redirect: '/funShow/components',
    name: 'funShow',
    meta: {
      title: 'funShow',
      icon: 'example'
    },
    children: [
      {
        path: '/funShow/components',
        component: Blank,
        redirect: '/funShow/components/drag-dialog',
        name: 'component-demo',
        meta: {
          title: 'components',
          icon: 'component'
        },
        children: [
          { path: 'drag-dialog', component: funShow_components_demo_dragDialog, name: 'dragDialog-demo', meta: { title: 'dragDialog' }},
          { path: 'dnd-list', component: funShow_components_demo_dndList, name: 'dndList-demo', meta: { title: 'dndList' }},
          { path: 'drag-kanban', component: funShow_components_demo_dragKanban, name: 'dragKanban-demo', meta: { title: 'dragKanban' }}
        ]
      },

      {
        path: '/funShow/charts',
        component: Blank,
        redirect: '/funShow/charts/keyboard',
        name: 'charts',
        meta: {
          title: 'charts',
          icon: 'chart'
        },
        children: [
          { path: 'keyboard', component: funShow_charts_keyboard, name: 'keyboardChart', meta: { title: 'keyboardChart', noCache: true }},
          { path: 'line', component: funShow_charts_line, name: 'lineChart', meta: { title: 'lineChart', noCache: true }},
          { path: 'mixchart', component: funShow_charts_mixChart, name: 'mixChart', meta: { title: 'mixChart', noCache: true }}
        ]
      },

      {
        path: 'tab',
        component: funShow_tab_index,
        name: 'tab',
        meta: { title: 'tab', icon: 'tab' }
      },

      {
        path: '/funShow/table',
        component: Blank,
        redirect: '/funShow/table/inline-edit-table',
        name: 'table',
        meta: {
          title: 'table',
          icon: 'table'
        },
        children: [
          { path: 'inline-edit-table', component: funShow_table_inlineEditTable, name: 'inlineEditTable', meta: { title: 'inlineEditTable' }},
          { path: 'complex-table', component: funShow_table_complexTable, name: 'complexTable', meta: { title: 'complexTable' }}
        ]
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/icon',
    name: 'system',
    meta: {
      title: 'system',
      icon: 'password'
    },
    children: [
      {
        path: 'icon',
        component: system_svg_icons_index,
        name: 'icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      },
      {
        path: '/system/error',
        component: Blank,
        redirect: '/system/error/401',
        name: 'errorPages',
        meta: {
          title: 'errorPages',
          icon: '404'
        },
        children: [
          { path: '401', component: system_errorPage_401, name: 'page401', meta: { title: 'page401', noCache: true }},
          { path: '404', component: system_errorPage_404, name: 'page404', meta: { title: 'page404', noCache: true }}
        ]
      },
      {
        path: '/system/theme',
        component: Blank,
        redirect: '/system/theme/index',
        children: [{ path: 'index', component: system_theme_index, name: 'theme', meta: { title: 'theme', icon: 'theme' }}]
      },
      {
        path: '/system/i18n',
        component: Blank,
        redirect: '/system/i18n/index',
        children: [{ path: 'index', component: system_i18n_demo_index, name: 'i18n', meta: { title: 'i18n', icon: 'international' }}]
      }
    ]
  }
]
