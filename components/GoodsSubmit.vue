<template>
<view class="fixed-b">
	<view class="select-all-wrap">
		<label class="column-center" v-if="showAll">
			<radio
				value="all"
				color="#328ee3"
				:checked="isAll"
				@click="selectAll(!isAll)"
			/>
			<text>全选</text>
		</label>
	</view>
	<view class="column-center">
		<text class="text-desc mr-1" v-if="count">共{{count}}件，</text>
		<price-format title="合计" :price="price" />
		<view class="btn btn-submit ml-2" @click="submit(price)">
			{{btnText}}
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
	name:"GoodsSubmit",
	components: { PriceFormat },
	props: {
		// 是否显示全选按钮, 默认为否
		showAll: { type: Boolean, default: false },
		isAll: { type: Boolean, default: true },
		selectAll: { type: Function },
		// 数量，默认为0
		count: { type: Number, default: 0 },
		// 价钱
		price: { type: Number, default: 0 },
		// 按钮文本
		btnText: { type: String, default: '结算' },
		// 按钮事件
		submit: { type: Function }
	}
}
</script>

<style>
</style>
