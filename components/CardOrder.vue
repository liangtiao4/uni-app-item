<template>
<view class="card">
	<view class="card-top">
		<view class="column-center">
			<image :src="data.seller_avatar" class="img-avatar ia-ssm"/>
			<text class="fs-3">{{data.seller}}</text>
		</view>
		<view class="text-oringin row-hidden-2">{{data.state_desc}}</view>
	</view>
	<view class="card-middle" @click="click(data.unused_id)">
		<view>
			<image :src="data.img" class="img mr-2"/>
		</view>
		<view class="h-180 row-between">
			<view class="flex-grow-1 mr-2">
				<text class="mb-1">{{data.title}}</text>
				<text class="text-desc row-hidden-2">{{data.content}}</text>
			</view>
			<view style="text-align: right;">
				<price-format :price='data.price' class="mb-1"/>
				<text class="text-desc">x{{data.count}}</text>
			</view>
		</view>
	</view>
	<slot></slot>
</view>
</template>

<script>
import PriceFormat from './PriceFormat.vue'

export default {
	name:"CardOrder",
	props: {
		data : { type: Object, required: true },
		click: { type: Function }
	},
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
}
</style>
