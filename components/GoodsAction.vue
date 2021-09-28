<template>
<view class="fixed-b">
	<view class="column-center">
		<view class="icons-con center-column">
			<uni-icons type="person" size="20"></uni-icons>
			<text>卖家</text>
		</view>
		<view class="icons-con center-column">
			<uni-icons type="star" size="20"></uni-icons>
			<text>收藏</text>
		</view>
	</view>
	<view class="column-center">
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
.icons-con {
	font-size: $font-size-sm;
	margin: 0 $spcing-normal;
}
</style>
