<template>
<view class="goods-card">
	<image src="../static/pro_item1.jpg" class="img mr-2"></image>
	<view class="gc-desc">
		<view class="gc-desc-top">
			<text>标题标题</text>
			<text class="content">这是一只海星</text>
		</view>
		<view class="gc-desc-bottom">
			<text class="text-price">
				<text class="price-symbol">￥</text>2.00
			</text>
			<slot>
				<text>×1</text>
			</slot>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		name:"card",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
	.goods-card {
		height: 180rpx;
		@include row-center;
		padding: $spcing-normal;
	}
	.gc-desc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
		padding: $spcing-sm 0;
		font-size: $font-size-normal;
		height: calc(100% - 24rpx);
		&-top {
			@include flex-column;
			& > .content {
				font-size: $font-size-sm;
				margin-top: $spcing-sm;
			}
		}
		&-bottom {
			display: flex;
			justify-content: space-between;
			font-size: $font-size-sm;
		}
	}
</style>
