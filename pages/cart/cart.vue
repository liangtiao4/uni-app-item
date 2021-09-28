<template>
<view class="cart">
	<view class="cart-goods">
		<radio-group v-model="goods" @change="handleGoods">
			<view class="cart-goods-item column-center">
				<radio class="ml-2" color="#328ee3" value="111" />
				<card-goods class="flex-grow-1" />
			</view>
		</radio-group>
	</view>
	<goods-submit />
</view>
</template>

<script>
import CardGoods from '@/components/CardGoods.vue'
import GoodsSubmit from '@/components/GoodsSubmit.vue'
export default {
	data() {
		return {
			goods: []
		}
	},
	components: { CardGoods, GoodsSubmit },
	onLoad (options) {
		console.log('options', options)
	},
	methods: {
		handleGoods (ev) {
			console.log(ev)
		}
	}
}
</script>

<style lang="scss">
.cart-goods {
	background-color: $bg-color;
	margin-top: $spcing-normal;
}
</style>
