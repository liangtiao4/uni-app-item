<template>
<view class="card" @click="toDetail">
	<view class="card-top">
		<view class="column-center">
			<image :src="o.seller_avatar" class="img-avatar ia-ssm"/>
			<text class="fs-3">{{o.seller_nickname}}</text>
		</view>
		<view class="text-oringin row-hidden-2">{{o.state_desc}}</view>
	</view>
	<view class="card-middle">
		<view>
			<image :src="o.img" class="img mr-2"/>
		</view>
		<view class="card-desc">
			<view class="card-desc-info">
				<text class="mb-1">{{o.title}}</text>
				<text class="text-desc">{{o.content}}</text>
			</view>
			<view class="card-desc-price">
				<price-format :price='o.price' class="mb-1"/>
				<text class="text-desc">x{{o.count}}</text>
			</view>
		</view>
	</view>
	<view class="total-price">
		<price-format title="优惠" :price='o.discount' color="grey" class="mr-2"/>
		<price-format title="实付款" :price='o.price - o.discount'/>
	</view>
	<view class="card-bottom">
		<view class="text-desc fs-2" @click="handleMore">更多</view>
		<!-- <slot></slot> -->
		<!-- 1待付款 -->
		<view class="card-btns" v-if="o.state_code === 1">
			<view class="btn-sm btn-origin">去付款</view>
			<view class="btn-sm btn-default">取消订单</view>
		</view>
		<!-- 2待发货 | 3待收货 | 4已收货 -->
		<view class="card-btns" v-else>
			<view class="btn-sm btn-default">申请退款</view>
			<view class="btn-sm btn-default" v-if="o.state_code === 4">申请退款</view>
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from './PriceFormat.vue'

export default {
	name:"CardOrder",
	props: ['toDetail', 'o'],
	components: { PriceFormat },
	methods: {
		handleMore () { 
			uni.showToast({ title: '无更多逻辑', icon: 'none' })
		}
	}
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
