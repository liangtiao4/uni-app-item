<template>
<view class="order-state">
	<tab :tablist="tablist" tabactive="state-active" />
	<card-order />
	<!-- <nothing /> -->
</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardOrder from '@/components/CardOrder.vue'
import Nothing from '@/components/Nothing.vue'

export default {
	name: 'order-state',
	components: { Tab, CardOrder, Nothing },
	data() {
		return {
			tablist: ['全部', '待付款', '待发货', '待取货']
		}
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
