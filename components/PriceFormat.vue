<template>
<view class="price-format" :class="color">
	<text class="mr-1" v-if="title">{{title}}:</text>
	<text class="fs-1">￥</text>
	<text class="price">
		<text>{{integer}}.</text>
		<text class="fs-0">{{decimal}}</text>
	</text>
</view>
</template>

<script>
export default {
	name:"PriceFormat",
	props: {
		title: { type: String },
		price: { type: Number, required: true },
		color: { 
			type: 'default' | 'origin' | 'grey',
			default: 'default'
		}
	},
	computed: {
		// 价格整数部分
		integer () {
			// console.log(typeof this.price)
			return this.price.toString().split('.')[0]
		},
		// 价格小数部分
		decimal () {
			const t = this.price.toString().split('.')[1] || '00'
			return t
		}
	}
}
</script>

<style lang="scss">
.price-format {
	display: inline-block;
	font-size: $font-size-normal;
}
.default { color: $color-default; }
.origin { color: $color-orange; }
.grey { color: $color-grey; }
</style>
