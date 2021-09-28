<template>
<view class="cell">
	<view class="column-center">
		<i class="iconfont i-size" :class="icon"></i>
		<text class="ml-2">{{title}}</text>
	</view>
	<i class="iconfont icon-jiantou-you i-size"></i>
</view>
</template>

<script>
export default {
	name:"Cell",
	props: ["icon", "title"]
}
</script>

<style lang="scss">
.cell {
	@extend .row-between;
	padding: $spcing-normal $spcing-sm;
	font-size: $font-size-lg;
}
</style>
