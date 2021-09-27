<template>
<view class="cart">
	<view class="cart-goods">
		<radio-group v-model="goods" @change="handleGoods">
			<view class="cart-goods-item">
				<label class="radio">
					<radio
						color="#328ee3"
						value="111"
					/>
				</label>
				<goods-card class="card" />
			</view>
		</radio-group>
		
	</view>
	<goods-submit />
</view>
</template>

<script>
import GoodsCard from '@/components/GoodsCard.vue'
import GoodsSubmit from '@/components/GoodsSubmit.vue'
export default {
	data() {
		return {
			goods: []
		}
	},
	components: { GoodsCard, GoodsSubmit },
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
	&-item {
		@include row-center;
		.radio { margin-left: $spcing-normal; }
		.card { flex-grow: 1; }
	}
}
</style>
