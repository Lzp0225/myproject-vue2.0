import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{                             //当每次需要匹配路由的时候 是在router-view中完成------匹配成功的路由组件都是在<router-view> 中渲染
		path: '/newSongs',
		component: require('../views/NewSongs'),
		alias: '/'							//别名
	}, {
		path: '/rank',
		component: require('../views/Rank')
	}, {
		path: '/plist',
		component: require('../views/Plist')
	}, {
		path: '/singer',
		component: require('../views/Singer')
	}, {
		path: '/search',
		component: require('../views/Search')
	}, {
		path: '/rank/info/:id',
		component: require('../views/RankInfo')
	}, {
		path: '/plist/info/:id',
		component: require('../views/PlistInfo')
	}, {
		path: '/singer/list/:id',
		component: require('../views/SingerList')
	}, {
		path: '/singer/info/:id',
		component: require('../views/SingerInfo')
	}, {
		path: '*', redirect: '/' //重定向             这里是如果访问路径没有匹配到路由的时候则重定向"/"
	}]
})

export default router
