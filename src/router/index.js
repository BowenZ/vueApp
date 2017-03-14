import Vue from 'vue'
import Router from 'vue-router'
// const Project = resolve => require(['@/components/Project'], resolve)
const Project = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['@/components/Project'], () => {
    resolve(require('@/components/Project'))
  })
}
// import Project from '@/components/Project'
import Hello from '@/components/Hello'
import Index from '@/components/test/index'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'main',
          name: 'main',
          component: Hello
        }
      ]
    }
  ]
})
