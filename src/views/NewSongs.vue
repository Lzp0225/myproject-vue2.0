<template>
	<div>
		<mt-swipe :auto="5000">
			<mt-swipe-item v-for="(banner, index) in banners" :key="index">
				<a :href="banner.extra.tourl">
					<img :src="banner.imgurl" :title="banner.title">
				</a>
			</mt-swipe-item>
		</mt-swipe>
		
		<mt-cell v-for="(song, index) in songList" :title="song.filename" @click.native="playAudio(index)" :key="index">
			<img src="../assets/images/download_icon.png" width="20" height="20">
		</mt-cell>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui'   //按需引入
	import { PLAY_AUDIO } from '../mixins'
	
	export default{
		mixins: [PLAY_AUDIO],
		data(){
			return {
				banners: [],
				songList: []
			}
		},
		created(){
			this.getSongs()
		},
		methods: {
			getSongs(){
				var boolean = this.$store.getters.isPlay;  //只能得到初始的值  当state变化还得在computed中获取状态
				Indicator.open({
					text: '加载中...',
					spinnerType: 'snake'
				});
				this.$http.get('/proxy/?json=true').then(({data}) => {
					this.banners = data.banner
					this.songList = data.data
				}).then(() => {
					Indicator.close()
				})
			},
		}
	}
</script>
<style>
	.mint-swipe {
		height: 39vw !important;
	}
	
	.mint-swipe-indicator {
		width: 12px !important;
		height: 12px !important;
	}
	
	.mint-swipe-indicators {
		bottom: 5px !important;
	}
	/* vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
	vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。 */
</style>