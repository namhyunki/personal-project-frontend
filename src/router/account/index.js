import Vue from 'vue'
import VueRouter from 'vue-router'

import AccountRegisterPage from '@/views/account/AccountRegisterPage.vue'
import AccountLoginPage from '@/views/account/AccountLoginPage.vue'
import AccountMyPage from '@/views/account/AccountMyPage.vue'
import AccountPasswordCheckPage from '@/views/account/AccountPasswordCheckPage.vue'
import AccountModifyPage from '@/views/account/AccountModifyPage.vue'
import AccountWithdrawPage from '@/views/account/AccountWithdrawPage.vue'

Vue.use(VueRouter)

const accountRoutes = [
  {
    path: '/account-register-page',
    name: 'AccountRegisterPage',
    component: AccountRegisterPage
  },
  {
    path: '/account-login-page',
    name: 'AccountLoginPage',
    component: AccountLoginPage
  },
  {
    path: '/account-my-page',
    name: 'AccountMyPage',
    component: AccountMyPage
  },
  {
    path: '/account-password-check-page',
    name: 'AccountPasswordCheckPage',
    component: AccountPasswordCheckPage
  },
  {
    path: '/account-modify-page',
    name: 'AccountModifyPage',
    component: AccountModifyPage
  },
  {
    path: '/account-withdraw-page',
    name: 'AccountWithdrawPage',
    component: AccountWithdrawPage
  },
]



export default accountRoutes