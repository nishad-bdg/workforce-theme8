import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App),
    iconfont: 'fa'
}).$mount('#app')