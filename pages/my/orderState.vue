<template>
<view class="order-state">
	<tab :tablist="tablist" tabactive="state-active" :tabIndex='tabIndex' />
	<view v-if="o.length !== 0">
		<card-order
			v-for="item in o"
			:key='item._id'
			:o='item'
			@updatelist='getMyOrderBySort'
		/>
	</view>
	<nothing v-else/>
</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardOrder from '@/components/CardOrder.vue'
import Nothing from '@/components/Nothing.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'order-state',
	components: { Tab, CardOrder, Nothing },
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
		...mapMutations(['getMyOrderBySort'])
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
.c-info {
	// @extend 
}
</style>
