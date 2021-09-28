<template>
<view class="cart-footer fixed-b">
	<label class="column-center">
		<radio
			value="all"
			color="#328ee3"
			:checked="isAll"
			@click="selectAll"
		/>
		<text>全选</text>
	</label>
	<view class="column-center">
		<price-format title="总计" price="10086" />
		<view class="btn btn-submit ml-2">结算</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'

export default {
	name:"GoodsSubmit",
	components: { PriceFormat },
	data() {
		return {
			isAll: false
		};
	},
	methods: {
		selectAll () {
			this.isAll = !this.isAll
		}
	}
}
</script>

<style>
</style>
