<template>
<view class="unused-detail">
	<view class="seller wrap-p">
		<image
			src="../../static/pro_item1.jpg"
			class="img-avatar-sm mr-1" />
		<text>两条4</text>
	</view>
	<view class="unused-desc wrap-p">
		<view class="fs-3 mb-2">海星标题</view>
		<view class="mb-1">这是一只海星内容</view>
		<view class="mb-1">交易方式：自提</view>
		<view class="showimg">
			<view class="mb-1 flex-row">
				<text>实物展示:</text>
				<view class="text-price">
					<text class="price-symbol">￥</text>199.00
				</view>
			</view>
			<image
				src="../../static/pro_item3.jpg"
				class="img-goods"
				mode="widthFix"
			/>
			<image
				src="../../static/pro_item3.jpg"
				class="img-goods"
				mode="widthFix"
			/>
		</view>
	</view>
	<goods-action />
</view>
</template>

<script>
import GoodsAction from '@/components/GoodsAction.vue'
export default {
	name: 'detail',
	components: { GoodsAction }
}
</script>

<style lang="scss">
.unused-detail {
	background-color: $bg-color;
	font-size: $font-size-normal;
	padding-bottom: 100rpx;
}
.seller {
	@include row-center;
	border-bottom: 1rpx solid $b-color;
}
</style>
