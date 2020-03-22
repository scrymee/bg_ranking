<template>

	<v-container fluid fill-height>
		<v-row dense justify="center"
								 v-for="(item, i) in items"
								 :key="i"
								 >
        <v-col md="6" sm="10">
					<v-card :color="colors[Math.floor( i % 10 )]">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.rank"></v-card-title>
                <v-card-subtitle v-text="item.name"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.thumbnail"></v-img>
              </v-avatar>
            </div>
						    <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="GetGameDetail(item.gameId)">
            <v-icon>{{ show ? 'V' : '^' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text :v-if="detail.gameId = item.gemeId">
						{{detail.bggRating}}<br>
						プレイ人数：{{detail.minPlayers}} - {{detail.maxPlayers}}<br>
						プレイ時間：{{detail.playingTime}}
          </v-card-text>
        </v-slide-y-transition>
          </v-card>
        </v-col>
      </v-row>
	</v-container>

</template>
<script>
	import axios from 'axios';
  export default {
		data () {
			return {
			show:[],
			detail:[],
			items: [
				{
					color: '#1F7087',
					src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
					title: 'Supermodel',
					artist: 'Foster the People',
				},
				{
					color: '#952175',
					src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
					title: 'Halcyon Days',
					artist: 'Ellie Goulding',
				},
				{
					color: '#952175',
					src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
					title: 'Original',
					artist: 'Ellie Goulding',
				},
			],
			colors: [
				'#019fe6',
				'#c83955',
				'#f2cf01',
				'#487ca3',
				'#d6d680',
				'#88b83e',
				'#c0542d',
				'#a44682',
				'#6c5776',
				'#499475',
			],
			}
		},
			created : function(){
				console.log('hoge');
       const data = {
			 }
				const url = 'http://bgg-json.azurewebsites.net/hot';
				const axios_obj = {
					method:'GET',
					params: data,
					url:url,
					headers: {
						Accept:'application/json',
						'Content-Type': 'application/json',
						'X-Requested-With': 'XMLHttpRequest',
					},
				};

				axios(axios_obj).then(response => {
					console.log(response.data);
				//登録
				this.items =response.data;
					console.log(response.data.length);
				});

			},
		methods:{
			GetGameDetail(gameId){
				console.log(gameId);
				console.log(this.show[gameId])

				const url = 'https://bgg-json.azurewebsites.net/thing/'+ gameId;
				const obj = {
					method:'GET',
					url:url,
					headers: {
						Accept:'application/json',
						'Content-Type': 'application/json',
						'X-Requested-With': 'XMLHttpRequest',
					},
				};

				axios(obj).then(response => {
					console.log(response.data);
				//登録
					this.detail = response.data;
					console.log(this.detail);
				});

			},
		},
		}
</script>
