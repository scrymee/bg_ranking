// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//npm install firabse後に追加
import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAywy6MNicHZJEC7KtVWCto4WOiCsJnz9s",
    authDomain: "bg-appeal.firebaseapp.com",
    databaseURL: "https://bg-appeal.firebaseio.com",
    projectId: "bg-appeal",
    storageBucket: "bg-appeal.appspot.com",
    messagingSenderId: "133638925869",
    appId: "1:133638925869:web:2d84c85cf1f03e3ef392a4",
    measurementId: "G-7RGTNTMCJY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//npm install Vuetify後に,src/pluginsの中にファイルを作成したやつを読み込ませるため追加
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.use(vuetify, {
 iconfont: 'fa'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	vuetify,
  components: { App },
  template: '<App/>'
})
