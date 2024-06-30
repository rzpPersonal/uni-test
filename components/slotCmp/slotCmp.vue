<template>
	<view>
		自定义组件
		<slot />
		具名组件
		<view>
		  <slot name="header"/>	
		</view>
	<!-- 	// 作用域具名插槽 -->
        <view>
			<slot name="footer" :user="user" />
		</view>
	</view>
</template>

<script>
	export default {
		name:"slotCmp",
		data() {
			return {
				user:{
										"lastName":"bar",
										"firstName":"foo"
									}
			};
		}
	}
</script>

<style>

</style>