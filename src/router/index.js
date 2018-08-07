import Vue from 'vue'
import Router from 'vue-router'
import LoginVew from '@/components/LoginVew'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import TestComp from '@/components/TestComp'
import Config from '@/components/Config'
import Group from '@/components/Group'
import margin from '@/components/margin'
import margin2 from '@/components/margin2'
import margin3 from '@/components/margin3'
import margin4 from '@/components/margin4'
import GroupMember from '@/components/GroupMember'
import hello from '@/components/hello'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginVew',
      component: LoginVew
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/testComp',
      name: 'testComp',
      component: TestComp
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/margin',
      name: 'margin',
      component: margin
    },
    {
      path: '/margin2',
      name: 'margin2',
      component: margin2
    },
    {
      path: '/margin3',
      name: 'margin3',
      component: margin3
    },
    {
      path: '/margin4',
      name: 'margin4',
      component: margin4
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/groupmember',
      name: 'GroupMember',
      component: GroupMember
    }
  ]
})
