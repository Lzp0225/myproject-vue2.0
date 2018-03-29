<template>
  <div id="app">
    <Head />
    
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    
    <Player />
	  <DetailPlayer />
	</div>
</template>

<script>
  import Head from './components/header/Head'
  import Player from './components/Player'
  import DetailPlayer from './components/DetailPlayer'
  export default {
    components: {
      Head, Player, DetailPlayer
    }
  }
</script>

<!--做一个完整vue项目的思路： (1)  先观察主要的一些界面 尤其是主页面的router-view应该显示什么内容 其次看所有的页面有没有公共的组件    创建实例要把vuex中的store以及router中的router挂载到dom上
													  (2)  开始把主界面的组件写好 然后在app.vue注册
														(3)  写完主页面后 则开始着手于子组件的编写        先确定好有多少个子组件（单页面的那种）  各个组件里面的相互依赖要注入
														(4)  确定完有多少个需要跳转的子组件后 开始配置路由routes
														(5)  在写每一个子组件之前 必须确定好公共的一些状态，然后使用vuex进行管理 store里面配置state getters mutations actions   对于每一个组件中都有公共的行为 则用mixins 然后在组件中各个引入
														(6)  在子组件中{
																	1、调用router里的方法用this.$route.xxx  或者this.$router.xxx(this.$router.push({path:'/'})这个是跳转页面的方法)
																	2、调用vuex里store的getters用this.$store.getters.xxx或者...mapGetters([])
																	3、改变state用this.$store.commit('funName',val) 
																	4、调用actions里的方法用this.$store.dispatch('',val)或者...mapActions([])
														}-->
															
