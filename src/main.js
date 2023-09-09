import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {Lazyload } from 'vant'

import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'

import './assets/main.css'
import './common/style/theme.css'
import 'vant/es/toast/style'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Lazyload)
  

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.mount('#app')
