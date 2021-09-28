<template>
<view class="card" @click="toDetail">
	<view class="card-top">
		<text class="fs-3">这是标题</text>
		<view class="text-desc">刚刚</view>
	</view>
	<view class="card-middle">
		<image src="../static/pro_item2.jpg" class="img mr-2"></image>
		<view class="h-180 column-between">
			<text>这是内容内容描述</text>
			<price-format price="99" color="origin"></price-format>
		</view>
	</view>
	<view class="card-bottom text-desc">
		<view class="mr-2">186 人浏览</view>
		<view>8 人收藏</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'

export default {
	name:"CardUnsed",
	props: ['toDetail'],
	components: { PriceFormat }
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
	padding: $spcing-sm $spcing-normal;
	&-top { @extend .row-between, .mb-1; }
	&-middle { @extend .column-center; }
	&-bottom { @extend .d-flex, .fs-1, .mt-1; }
}
</style>
