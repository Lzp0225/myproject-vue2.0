<template>
  <div class="header-nav">
    <mt-navbar v-model="headNav" class="container">
      <mt-tab-item id="head-nav1">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2">排行</mt-tab-item>
      <mt-tab-item id="head-nav3">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4">歌手</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script type="es6">
  export default {
    name: 'head-nav',
    data(){
    	return{
    		navTab : ''
    	}
    },
    computed: {
    	headNav: {          //这里一开始没有值  点击nav后会set一个新值  想得到就要get到那个新值   get后被选中的nav才会有样式  是因为headnav有值了
    		get(){
    			return this.navTab
		    },
		    set(nav) {      //set结束后才会重新get状态
    			const index = nav.substr(-1)     //截取字符串最后一个字符
					//this.$store.commit('setHeadNav', nav)            // store.commit 方法触发状态变更
					this.navTab = nav
			    this.goRouter(Number(index))
		    }
	    }
    },
    methods: {
      goRouter(index){
        switch (index) {
          case 1:
            this.$router.push({path: '/'});
            break;
          case 2:
            this.$router.push({path: '/rank'});
            break;
          case 3:
            this.$router.push({path: '/plist'});
            break;
          case 4:
            this.$router.push({path: '/singer'});
            break;
        }
      }
    },
    created(){
    	 const path = this.$route.path;
    	 switch(path){
    	 		case '/':
            this.navTab = 'head-nav1';
            break;
          case '/rank':
            this.navTab = 'head-nav2';
            break;
          case '/plist':
            this.navTab = 'head-nav3';
            break;
          case '/singer':
            this.navTab = 'head-nav4';
            break;
    	 }
    }
  }
</script>

<style>
  .mint-tab-item {
    padding: 12px 0 !important;
  }

  .mint-tab-item-label {
    font-size: 16px !important;
  }
</style>
