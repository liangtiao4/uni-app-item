<template>
<view class="cell flex-row">
	<view class="cell-left">
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
	padding: $spcing-normal $spcing-sm;
	font-size: $font-size-lg;
	&-left {
		@include row-center;
	}
}
</style>
