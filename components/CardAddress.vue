<template>
<view class="address">
	<i class="iconfont icon-address"></i>
	<view>
		<view class="mb-2">
			<text class="mr-1">陈先生</text>
			<text class="text-grey fs-1">15236254852</text>
		</view>
		<view class="fs-1">
			<text>广东省深圳市佛山区龙华九路1栋xxx号</text>
		</view>
	</view>
</view>
</template>

<script>
export default {
	name:"CardAddress"
}
</script>

<style lang="scss">
.address {
	@extend .column-center, .fs-2;
	background-color: $bg-color;
	padding: $spcing-normal;
	border-radius: 20rpx;
	box-shadow: 0 0 3rpx $color-grey;
	.icon-address {
		display: block;
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: $bg-color;
		background-color: $color-orange;
		border-radius: $ratio-50;
		margin-right: $spcing-normal;
	}
}
</style>
