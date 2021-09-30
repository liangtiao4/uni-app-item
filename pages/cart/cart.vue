<template>
<view class="cart">
	<view class="cart-goods">
		<checkbox-group @change='getGoods'>
			<view class="cart-goods-item"
				v-for="c in cartList"
				:key="c._id"
			>
				<checkbox class="ml-2" color="#328ee3" :value="c.unused_id" :checked="goods.includes(c.unused_id)"/>
				<card-goods class="flex-grow-1" :data='c' />
			</view>
		</checkbox-group>
	</view>
	<goods-submit :isAll='isAll' @setisall='setIsAll' />
</view>
</template>

<script>
import CardGoods from '@/components/CardGoods.vue'
import GoodsSubmit from '@/components/GoodsSubmit.vue'
import { mapState } from 'vuex'

export default {
	components: { CardGoods, GoodsSubmit },
	data () {
		return {
			isAll: false,
			goods: []
		}
	},
	computed: { ...mapState(['cartList']) },
	methods: {
		getGoods (ev) {
			// 判断是否全选
			const selectGoods = ev.detail.value
			this.goods = selectGoods
			this.isAll = selectGoods.length === this.cartList.length
		},
		setIsAll (flag) {
			this.isAll = flag
			let list = []
			if (flag) {
				this.cartList.forEach(item => list.push(item.unused_id))
			}
			this.goods = list
		}
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
