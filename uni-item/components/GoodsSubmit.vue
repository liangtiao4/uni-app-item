<template>
<view class="cart-footer fixed-b">
	<label class="select-all">
		<radio
			value="all"
			color="#328ee3"
			:checked="isAll"
			@click="selectAll"
		/>
		<text>全选</text>
	</label>
	<view class="cart-footer-right">
		<view class="text-price">
			总计:
			<text class="price-symbol">￥</text>
			10086.00
		</view>
		<view class="btn btn-submit ml-2">结算</view>
	</view>
</view>
</template>

<script>
	export default {
		name:"GoodsSubmit",
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

<style lang="scss" scoped>
.cart-footer {
	.select-all, &-right {
		@include row-center;
	}
}
</style>
