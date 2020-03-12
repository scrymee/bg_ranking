<template>

	<v-container fluid fill-height>
		<v-row dense justify="center"
								 v-for="(content, i) in items"
								 :key="i"
								 >
        <v-col md="6" sm="10">
					<v-card :color="colors[Math.floor( i % 10 )]">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text=""></v-card-title>
								<a :href=content.Item.affiliateUrl target="_blank">
                <v-card-subtitle v-text="content.Item.itemName" :href="content.Item.affiliateUrl"></v-card-subtitle>
								</a>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="content.Item.mediumImageUrls[0].imageUrl"></v-img>
              </v-avatar>
            </div>
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
			items: [
				{
					Item:{},
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
				const url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&genreId=207662&affiliateId=1abe6f15.23715f15.1abe6f16.44dbab1a&applicationId=1025786052191340350';
				const axios_obj = {
					method:'GET',
					params: data,
					url:url,
				};
				//楽天のAPIにheaderは不要

				axios(axios_obj).then(response => {
					//console.log(response.data);
				//登録
				this.items =response.data.Items;
					console.log(this.items);
				});

			},
		}
</script>
