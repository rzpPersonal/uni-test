<template>
	<view>
	    <view>
	    	{{ numbers }}
			{{ name}}
	    </view>
	    <myCmp :title.sync="title" :number="numbers"/>
		<form @submit="getvalue">
			<navigator url="/pages/index/index">跳转到首页</navigator>
			<view class="row">
				<input type="text"  placeholder="请输入" name="username"/>
			</view>
			<view class="row">
				<textarea name="remark" id="" cols="30" rows="10"></textarea>
			</view>
			<DefineText name="define" v-model="defineTitle"/>
			<view>
				<button type="primary" form-type="submit">submit</button>
				<button form-type="reset">reset</button>
			</view>
		</form>
	</view>
</template>

<script>
	import DefineText from "./componens/defineText/defineText.vue";
	export default {
		components: {
			DefineText
		},
		data() {
			return {
				defineTitle: "",
				title: 'nihao',
				numbers: 999,
				name: ''
			};
		},
		methods: {
			getvalue(e) {
				console.log(e)
			},
		},
		onShow() {
			console.log(this.numbers, "show")
			const pages = getCurrentPages();
			const currentPage = pages[pages.length - 1];
			if (currentPage.$vm.schoolName) {
				this.name = currentPage.$vm.schoolName
			}
			console.log(pages[pages.length - 1])
		},
		onHide() {
			console.log('hide')
		}
	}
</script>

<style lang="scss">
  .row {
	  width: 100vw;
	  border: 1px solid #222;
  }
</style>
