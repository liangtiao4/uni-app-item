<template>
<view class="goods-card">
	<image src="../static/pro_item1.jpg" class="img mr-2"></image>
	<view class="gc-desc">
		<view class="column-between">
			<text class="fs-2">标题标题</text>
			<text class="mt-1 text-desc">这是一只海星</text>
		</view>
		<view class="row-between">
			<price-format price="20" color="origin" />
			<slot><text class="column-center text-desc">×1</text></slot>
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'

export default {
	name:"GoodsCard",
	components: { PriceFormat }
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
