import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/common.css';
import './plugins/element.js';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: 'dist/error.png',
    loading: require('@/assets/images/loading.gif'),
    attempt: 1
});

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
