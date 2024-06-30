<template>
	<view>
		nihao 
		{{title}}
		{{number}}
		<view class="">
			<button @click="changeTitle">
				点击
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"myCmp",
		props: {
			title: String,
			number: Number,
		},
		data() {
			return {
			};
		},
		methods: {
			changeTitle() {
				this.$emit("addCount")
				this.$emit("update:title", this.title + "8888")
			}
		}
	}
</script>

<style lang="scss">

</style>