<template>
	<div class="rank-info-content" v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10">
		<div class="rank-banner-wrap" :style="{backgroundImage:'url('+ imgurl + ')'}">
			<div class="rank-status container">
				<p>上次更新时间：{{getToday()}}</p>
			</div>
		</div>
		
		<div class="rank-info-list">
			<mt-cell v-for="(item,index) in songList" :title="item.filename" @click.native="playAudio(index)" :key="index">
				<span class="rank-index" :class="{'rank-list-good' : index<3, 'rank-list-first' : index==0, 'rank-list-second' : index==1, 'rank-list-third' : index==2}">{{index + 1}}</span>
				<img src="../assets/images/download_icon.png" width="20" height="20">
			</mt-cell>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui'
	import { InfiniteScroll } from 'mint-ui'
	import { Toast } from 'mint-ui'
	import { PLAY_AUDIO } from '../mixins'
	export default {
		mixins: [PLAY_AUDIO],
		data(){
			return {
				imgurl: '',
				songList: [],
				updateTime: '',
				opacity: 0,
				page:1
			}
		},
		//通过路由的before钩子解除router-view缓存限制
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.$store.commit('showHead', true)
				vm.getList(1)
				window.onscroll = () => {
					vm.opacity = window.pageYOffset / 250
					vm.$store.commit('setHeadStyle', {background: `rgba(43,162,251,${vm.opacity})`})
				}
			})
		},
		beforeRouteLeave(to, from, next){
			this.$store.commit('showHead', false)
			window.onscroll = null
			next()
		},
		mounted(){
			window.onscroll = () => {
				this.opacity = window.pageYOffset / 200
				this.$store.commit('setHeadStyle', {background: `rgba(43,162,251,${this.opacity})`})
			}
		},
		methods: {
			getToday(){
				const time = new Date()
				const year = time.getFullYear()
				let month = time.getMonth() + 1
				let date = time.getDate()
				if(month < 10) month = '0' + month
				if(date < 10) date = '0' + date
				return `${year}-${month}-${date}`
			},
			getList(page_number){
				Indicator.open({
					text: '加载中...',
					spinnerType: 'snake'
				})
				var infoID = this.$route.params.id;
				this.$http.get(`/proxy/rank/info/?rankid=${infoID}&page=${page_number}&json=true`).then(({data}) => {
					Indicator.close()
					const {info, songs} = data
					const {banner7url, rankname} = info
					const {list} = songs
					if(list.length==0){
						Toast({
						  message: '暂无数据加载',
						  position: 'middle',
						  duration: 500
						});
					}
					this.imgurl = banner7url.replace('{size}', '400')
					for(let i = 0 ;i < list.length;i++){
						this.songList.push({
							filename:list[i].filename,
							hash:list[i].hash
						})
					}
					this.$store.commit('setHeadTitle', rankname)
					++this.page
					this.loading = false
				})
			},
			loadMore() {
				if(this.loading) return;
			    this.loading = true;
			    this.getList(this.page)
			}
		}
	}
</script>

<style>
	.rank-list-good {
		display: inline-block;
		padding: 2px 8px;
		left: 12px !important;
		border-radius: 8px;
		color: #fff;
		margin-top: 3px !important;
	}
	
	.rank-list-first {
		background-color: #E80000;
	}
	
	.rank-list-second {
		background-color: #FF7200;
	}
	
	.rank-list-third {
		background-color: #F8B300;
	}
</style>

