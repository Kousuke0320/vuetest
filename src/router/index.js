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
import GroupMember from '@/components/GroupMember'


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
      path: '/groupmember',
      name: 'GroupMember',
      component: GroupMember
    }
  ]
})
