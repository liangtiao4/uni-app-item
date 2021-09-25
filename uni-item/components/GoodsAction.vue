<template>
<view class="fixed-b">
	<view class="goods-icons">
		<view class="icons-con">
			<uni-icons type="person" size="20"></uni-icons>
			<text>卖家</text>
		</view>
		<view class="icons-con">
			<uni-icons type="star" size="20"></uni-icons>
			<text>收藏</text>
		</view>
	</view>
	<view class="goods-btns">
		<view class="btn btn-left">加入购物车</view>
		<view class="btn btn-right">立即购买</view>
	</view>
</view>
</template>

<script>
import UniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		name:"GoodsAction",
		components: { UniIcons },
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.goods-icons, .goods-btns {
	@include row-center;
}
.icons-con {
	@include column-center;
	font-size: $font-size-sm;
	margin: 0 $spcing-normal;
}
</style>
