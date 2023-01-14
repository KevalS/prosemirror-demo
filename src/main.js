import Vue from 'vue';
import ProseMirror from 'vue-prosemirror-2';
import App from './App.vue';
import './assets/main.css';
Vue.use(ProseMirror);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
