<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link :to="{ name: 'HelloWorld' }">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            	<v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'RakutenRanking' }">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            	<v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            	<v-list-item-title>Login</v-list-item-title>
							<button type="button" @click='doLogin'>Login</button>
          </v-list-item-content>
        </v-list-item>
      </v-list>
						<img :src="user.photoURL">
						<v-list-item-title>{{user.displayName}}</v-list-item-title>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>BGCHECK</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
			<router-view/>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
	// firebase モジュール
import firebase from "firebase/app"
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
			user:[],
    }),
		created(){
			firebase.auth().onAuthStateChanged(user => {
  // ログイン状態ならuserが取得できる
				  this.user = user ? user : {}
				console.log(this.user);

})
		},
		methods:{
			doLogin(){
				const provider = new firebase.auth.TwitterAuthProvider();
				firebase.auth().signInWithPopup(provider);
			},
		}
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
