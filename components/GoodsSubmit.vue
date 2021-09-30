<template>
<view class="cart-footer fixed-b">
	<label class="column-center">
		<radio
			value="all"
			color="#328ee3"
			:checked="isAll"
			@click="selectAllUnused(!isAll)"
		/>
		<text>全选</text>
	</label>
	<view class="column-center">
		<price-format title="总计" :price="totalPrice" />
		<view class="btn btn-submit ml-2" @click="settlement">结算</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
	name:"GoodsSubmit",
	components: { PriceFormat },
	computed: {
		...mapGetters(['isAll', 'totalPrice']),
	},
	methods: {
		...mapMutations(['selectAllUnused']),
		settlement () {
			uni.showToast({ title: '暂无结算逻辑', icon: 'none' })
		}
	}
}
</script>

<style>
</style>
