<template>
  <div class="logo-container">
    <div class="head-logo">
      <a href="/">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png">
      </a>
    
    </div>
    <div class="head-search" @click="searchRouter">
      <img src="http://m.kugou.com/v3/static/images/index/search.png">
    </div>
  </div>
</template>

<script type="es6">
  export default {
  	data(){
  		return {
  		//	isPlaySet2 : '暂停'
  		}
  	},
  	computed:{                //computed是内部发生了改变 则这个值就会发生改变 能监听到store里面状态的改变   watch是要存在当前组件的值改变了才会监听
  		// isPlay2(){
  		// 		if(this.$store.getters.isPlay){
  		// 			this.isPlaySet2 = '在播放'
  		// 		}else{
  		// 			this.isPlaySet2 = '暂停'
  		// 		}
  		// 		return this.isPlaySet2
  		// }
  	},
    methods: {
      searchRouter(){
        this.$store.commit('showDetailPlayer',false);
        this.$router.push({path: '/search'});
      }
    }
  }
</script>
