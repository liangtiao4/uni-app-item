<template>
<view class="card" @click="toDetail">
	<view class="card-top">
		<view class="title">这是标题</view>
		<view class="time">刚刚</view>
	</view>
	<view class="card-middle">
		<image src="../static/pro_item2.jpg" class="img mr-2"></image>
		<view class="content">
			<text>这是内容内容描述</text>
			<view class="text-price">
				<text class="price-symbol">￥</text>199
			</view>
		</view>
	</view>
	<view class="card-bottom">
		<view class="mr-2">186浏览</view>
		<view>8收藏</view>
	</view>
</view>
</template>

<script>
	export default {
		name:"Card",
		props: ['toDetail']
	}
</script>

<style lang="scss">
.card {
	font-size: $font-size-normal;
	border: 1rpx solid $b-color;
	border-radius: 10rpx;
	box-shadow: 0 0 0 1 #EEEEEE;
	background-color: $bg-color;
	margin-bottom: $spcing-normal;
	&-top {
		@include row-center;
		justify-content: space-between;
		padding: $spcing-sm;
		border-bottom: 1rpx solid $b-color;
	}
	&-middle {
		height: 180rpx;
		@include row-center;
		padding: $spcing-sm;
		& > .content {
			height: 100%;
			@include flex-column;
		}
	}
	&-bottom {
		@include row-center;
		padding: $spcing-sm;
		font-size: $font-size-sm;
	}
}
</style>
