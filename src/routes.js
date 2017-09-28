import ChatComponent from 'components/views/chat'
import LoginComponent from 'components/views/login'

export default [
  {
    path: '/',
    component: ChatComponent,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    component: LoginComponent
  }
]
