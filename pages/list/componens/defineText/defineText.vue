<template>
	<view class="row">
		<input type="text"  :name="name" :value="title" @input="handleInput" placeholder="请输入具体内容"/>
	</view>
</template>

<script>
	export default {
		name: "DefineText",
		behaviors: ['uni://form-field'],
		props: {
			name: String
		},
		data() {
			return {
				title: ""
			};
		},
		methods: {
			handleInput(e) {
				this.$emit("input" , e.detail.value)
			}
		}
	}
</script>

<style lang="scss">
 .row {
	 width: 100vw;
 }
</style>
