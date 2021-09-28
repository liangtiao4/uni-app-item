<template>
<view class="card" @click="toDetail">
	<view class="card-top">
		<view class="column-center">
			<image src="../static/pro_item2.jpg"
				class="img-avatar ia-ssm"></image>
			<text class="fs-3">卖家</text>
		</view>
		<view class="text-price">待付款</view>
	</view>
	<view class="card-middle">
		<image src="../static/pro_item2.jpg" class="img mr-2"></image>
		<view class="card-desc">
			<view class="card-desc-info">
				<text class="mb-1">标题</text>
				<text class="text-desc">这是内容内容内容内容内容</text>
			</view>
			<view class="card-desc-price">
				<price-format price='199' class="mb-1"/>
				<text class="text-desc">x1</text>
			</view>
		</view>
	</view>
	<view class="total-price">
		<price-format title="总价" price='199' color="grey" class="mr-2"/>
		<price-format title="实付款" price='123'/>
	</view>
	<view class="card-bottom">
		<view class="text-desc fs-2">更多</view>
		<view class="card-btns">
			<view class="btn btn-default">取消订单</view>
			<view class="btn btn-default">删除订单</view>
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from './PriceFormat.vue'

export default {
	name:"CardOrder",
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
	.total-price { text-align: right; }
	&-top { @extend .row-between, .mb-1; }
	&-middle { @extend .column-center; }
	&-bottom { 
		@extend .row-between, .fs-2, .mt-1;
		align-items: center;
		& > .card-btns {
			@extend .d-flex;
			view { margin-left: $spcing-normal; }
		}
	}
}
</style>
