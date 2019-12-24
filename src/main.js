import Vue from "vue";
import "./plugins/vuetify";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import Vuelidate from "vuelidate";

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: "aslkdlk89a7sd9asdlkasjd8uasd",
  cluster: "ap2",
  //encrypted: true,
  wsHost: 'dev.mm',
  wsPort: 6001,
  disableStats: true,
  auth: {
    headers: {
      Authorization: 'Bearer ' + localStorage.d_token
    }
  }
});

Vue.config.productionTip = false;

// Vue.use(Vuelidate);
Vue.use(Vuetify, {
  theme: {
    primary: "#FEBE00",
    primaryTwo: "fffaaf",
    primaryButton: "fffaaf",
    secondary: "#222222",
    third: "#ffffff",
    footerBackground: "#525252",
    accent: "#ED1C24",
    error: "#ED1C24",
    background: "#fffdf7",
    backgroundLogin: "#fffdf7"
  }
});
Vue.mixin({
  methods: {
    errorAlerts(error) {
      if (error.response) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    },
    goto(route) {
      this.$router.replace(this.$route.query.redirect || route);
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");