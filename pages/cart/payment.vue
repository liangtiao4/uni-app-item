<template>
<view id="payment">
	<view class="p">
		<view class="mb-2">
			<card-address/>
		</view>
		<card-order v-for="item in goodsList" :key="item._id" :o="item">
			<view class="card-cell">
				<text class="cc-left">服务</text>
				<text class="cc-right">{{item.service}}</text>
			</view>
			<view class="card-cell">
				<text class="cc-left">配送方式</text>
				<text class="cc-right">{{item.tradeMethod}}</text>
			</view>
			<view class="card-price">
				<text class="cp-left">共{{item.count}}件，</text>
				<view class="">
					<text>小计：</text>
					<price-format :price="item.count * item.price" color="origin"/>
				</view>
			</view>
		</card-order>
	</view>
	<goods-submit
		btnText='提交订单'
		:price="totalPrice"
		:count="totalCount"
		:submit="handlePay"
	/>
</view>
</template>

<script>
import CardAddress from '@/components/CardAddress.vue'
import CardOrder from '@/components/CardOrder.vue'
import GoodsSubmit from '@/components/GoodsSubmit.vue'
import PriceFormat from '@/components/PriceFormat.vue'
import { mapState, mapGetters } from 'vuex'

export default {
	components: {
		CardAddress,
		CardOrder,
		GoodsSubmit,
		PriceFormat
	},
	data () {
		return { goodsList: [] }
	},
	computed: {
		...mapState({
			cartList: state => state.u.cartList,
			myOrder: state => state.u.myOrder
		}),
		...mapGetters(['totalPrice', 'totalCount'])
	},
	methods: {
		handlePay () {
			uni.showToast({
				title: '无提交订单逻辑',
				icon: 'none'
			})
		}
	},
	onLoad (option) {
		let list = []
		switch (option.from) {
			// 从购物车获取列表数据
			case 'cart':
				list = this.cartList.filter(item => item.isCheck)
				break;
			case 'order':
				list = this.myOrder.filter(item => item._id = option.id)
				break;
			default:
				break;
		}
		this.goodsList = list
	}
}
</script>

<style scoped lang="scss">
#payment {
	padding-bottom: 80rpx;
}
.card-cell {
	@extend .d-flex;
	font-size: $font-size-sm;
	padding-top: $spcing-sm;
	.cc-left {
		display: block;
		width: 180rpx;
		text-align: right;
	}
	.cc-right {
		color: $color-grey;
		padding-left: $spcing-normal;
	}
}
.card-price {
	@extend .column-center, .fs-1;
	margin-top: $spcing-normal;
	justify-content: flex-end;
	.cp-left { 
		color: $color-grey;
		font-size: 26rpx;
	}
}
</style>
