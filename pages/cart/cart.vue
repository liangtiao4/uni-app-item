<template>
<view class="cart">
	<view class="cart-goods">
		<view class="cart-goods-item"
			v-for="c in cartList"
			:key="c._id"
		>
			<checkbox
				class="ml-2"
				color="#328ee3"
				:value="c.unused_id"
				:checked="c.isCheck"
				@click="checkUnused(c._id)"
			/>
			<card-goods class="flex-grow-1" :data='c' />
		</view>
	</view>
	<goods-submit />
</view>
</template>

<script>
import CardGoods from '@/components/CardGoods.vue'
import GoodsSubmit from '@/components/GoodsSubmit.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	components: { CardGoods, GoodsSubmit },
	computed: { 
		...mapState({ cartList: state => state.u.cartList })
	},
	methods: {
		...mapMutations(['checkUnused'])
	}
}
</script>

<style lang="scss">
.cart-goods {
	&-item {
		@extend .column-center;
		width: $ratio-100;
	}
	background-color: $bg-color;
	// margin-top: $spcing-normal;
}
</style>
