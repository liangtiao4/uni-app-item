<template>
<view class="goods-card" @click="click(data.unused_id)">
	<view class="mr-2">
		<image :src="data.img" class="img"/>
	</view>
	<view class="gc-desc">
		<view class="column-between">
			<text class="fs-2">{{data.title}}</text>
			<text class="mt-1 text-desc row-hidden-1">{{data.content}}</text>
		</view>
		<view class="row-between">
			<price-format :price="data.price" color="origin" />
			<slot><text class="column-center text-desc">×{{data.count}}</text></slot>
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'

export default {
	name:"GoodsCard",
	components: { PriceFormat },
	props: {
		data: { type: Object, required: true },
		click: { type: Function }
	}
}
</script>

<style scoped lang="scss">
.goods-card {
	@include card-wrap;
	.gc-desc {
		@extend .column-between, .flex-grow-1, .h-180;
	}
}

</style>
