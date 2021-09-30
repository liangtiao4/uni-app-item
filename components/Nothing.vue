<template>
<view class="nothing">
	<i class='iconfont icon-nothing size'></i>
	<text>{{desc}}</text>
</view>
</template>

<script>
export default {
	name:"Nothing",
	props: {
		desc: { type: String, default: '没有相关数据！' }
	}
}
</script>

<style lang="scss" scoped>
.nothing {
	@extend .center-column;
	color: $color-grey;
	margin-top: 50rpx;
	.size {
		font-size: 240rpx;
		margin-bottom: $spcing-normal;
	}
}
</style>
