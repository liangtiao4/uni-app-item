<template>
<view class="order-state">
	<tab
		:tablist="tablist"
		tabactive="state-active"
		:tabIndex='tabIndex'
		@updatelist='getMyOrderBySort'
	/>
	<view v-if="o.length !== 0">
		<card-order
			v-for="item in o"
			:key='item._id'
			:data="item"
			:click="toDetail"
		>
			<view class="total-price">
				<price-format title="优惠" :price='item.discount' color="grey" class="mr-2"/>
				<price-format title="实付款" :price='item.price - item.discount'/>
			</view>
			<view class="card-bottom">
				<view class="text-desc fs-2" @click="handleMore">更多</view>
				<!-- 1待付款 -->
				<view class="card-btns" v-if="item.state_code === 1">
					<view class="btn-sm btn-origin" @click="onPay(item._id)">去付款</view>
					<view class="btn-sm btn-default">取消订单</view>
				</view>
				<!-- 2待发货 | 3待收货 | 4已收货 -->
				<view class="card-btns" v-else>
					<view class="btn-sm btn-default">申请退款</view>
					<view class="btn-sm btn-default" v-if="item.state_code === 4">申请退款</view>
				</view>
			</view>
		</card-order>
	</view>
	<nothing v-else/>
</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardOrder from '@/components/CardOrder.vue'
import Nothing from '@/components/Nothing.vue'
import PriceFormat from '@/components/PriceFormat.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'order-state',
	components: { Tab, CardOrder, Nothing, PriceFormat },
	data() {
		return {
			tablist: ['全部', '待付款', '待发货', '待取货'],
			tabIndex: 0
		}
	},
	computed: {
		...mapState({ o: state => state.u.myOrder })
	},
	methods: {
		...mapMutations(['getMyOrderBySort']),
		onPay (id) {
			uni.navigateTo({
				url:  `../cart/payment?from=order&id=${id}`
			})
		},
		toDetail (id) {
			uni.navigateTo({
				url: `../unused/detail?id=${id}`
			})
		}
	},
	onLoad (options) {
		// 获取选项卡当前下标
		this.tabIndex = options.code
		this.getMyOrderBySort(options.code)
	}
}
</script>

<style lang="scss">
.order-state {
	padding: $spcing-normal;
}
.card-desc {
	@extend .d-flex, .flex-grow-1, .h-180, .fs-2;
	.column {
		display: flex;
		flex-direction: column;
	}
	&-info, &-price {
		@extend .column;
	}
	&-info {
		@extend .flex-grow-1;
		padding-right: $spcing-lg;
	}
	&-price { text-align: right; }
}
.total-price { text-align: right; }
.card-bottom {
	@extend .row-between, .fs-2, .mt-1;
	align-items: center;
	& > .card-btns {
		@extend .d-flex;
		view { margin-left: $spcing-normal; }
	}
}
</style>
