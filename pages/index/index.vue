<template>
	<view class="content">
		{{ userName }} {{ telephone }}
		<myCmp :title.sync="title" :number="number" @addCount="addNumber"/>
		<view @click="addNumber">点击</view>
		<slotCmp>
			<template #header>
				具名slot
			</template>
             简单slot
				<template #footer="{user}">
					最后
					{{ user.firstName }}
				</template>
		</slotCmp>
		<u-swiper :list="list"></u-swiper>
		<u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
		<u-button type="primary" :ripple="true" ripple-bg-color="#909399" @click="changePhone('124124124124')">按钮</u-button>
		<view class="tabbox1">
		    <u-tabs name="cate_name" count="cate_count" :list="tablist" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<u-count-down :timestamp="timestamp"></u-count-down>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view @click="getclick">点击</view>
		</view>
		<view @click="add">{{number}}</view>
		<view v-for="(item, index) in arr" @click="changeActiveBox(item)" :class="activeBox == item.title ? 'activeBox'  : ''" class="tabbox" :key="index">
			{{item.title}}
		</view>
		<!-- // style 联系 -->
		<view @click="changeColor" class="box" :style="{background: bgColor}"></view>
		<view @click="goback">
			回退
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';
	export default {
		data() {
			return {
				keyword: "",
				tablist: [{
				     cate_name: '待收货'
			     }, {
				     cate_name: '待付款'
			     }, {
				     cate_name: '待评价',
				     cate_count: 5
			     }],
				current: 0,
				title: 'Hello',
				number: 1,
				timestamp: 60,
				list: [{
                    image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
                    title: '昨夜星辰昨夜风，画楼西畔桂堂东'
                    },
                    {
                    image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
                    title: '身无彩凤双飞翼，心有灵犀一点通'
                    },
                    {
                    image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
                    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
                    }
                    ],
				activeBox: "1",
				arr: [
					{
						title: '1',
					},
					{
						title: '12',
					},
					{
						title: '144',
					},
					{
						title: '199',
					},
				],
				bgColor: 'red'
			}
		},
		onLoad() {
         console.log(this.$u, '@u')
		 this.getData()
		},
		computed: {
			...mapState({
				userName: state => state.user.userName,
				telephone: state => state.user.telephone
			})
		},
		methods: {
		...mapActions(['update']),
		...mapMutations(['changePhone']),
	    async getData() {
		  try{
		  	const data = await this.$u.get("/rand.img1", {
				sort: "美女",
				format: "json"
			});
			console.log(data,' lllllz')
		  }catch(e){
		  	//TODO handle the exception
		  }
		},
		addNumber() {
			this.number ++;
			this.update('username');
		},
		change(index) {
		this.current = index;
		},
		  changeActiveBox(it) {
			  this.activeBox = it.title
		  },
          getclick() {
			  console.log(this,'LLL')
			  this.title = this.title + 'OO'
		  },
		  add() {
			  this.number ++ 
		  },
		  changeColor() {
			  this.bgColor = 'blue'
		  },
		  goback() {
			  const pages = getCurrentPages();
              const prevPage = pages[pages.length - 2];
			  prevPage.$vm.schoolName = "nihaoshijie";
			  uni.navigateBack()
		  }
		}
	}
</script>

<style lang="scss" scoped>
	.tabbox1 {
		width: 500rpx;
	}
	.content {
		width: 100vw;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	.tabbox {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		background-color: red;
		justify-content: center;
		align-items: center;
	}
	.activeBox {
		background-color: blue;
	}
    .box {
		width: 100rpx;
		height: 100rpx;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
