<template>
<view class="my">
	<view class="my-info">
		<image
			src="../../static/pro_item1.jpg"
			class="img-avatar-lg mr-2"
		/>
		<view class="nickname">
			<text>落日余晖</text>
			<text class="text-desc">这个家伙很懒，什么都没留下。</text>
		</view>
	</view>
	<view class="my-goods-status">
		<text class="text-title">我的订单</text>
		<grid :list='gridList' />
	</view>
	<view class="my-cell">
		<view v-for="item in myList" :key="item.id">
			<cell :icon="item.icon" :title="item.name" />
		</view>
	</view>
</view>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Cell from '@/components/Cell.vue'

export default {
	components: { Grid, Cell },
	data() {
		return {
			gridList: [
				{ id: 1, name: '待付款', icon: 'icon-daifukuan' },
				{ id: 2, name: '待发货', icon: 'icon-daifahuo' },
				{ id: 3, name: '待收货', icon: 'icon-daishouhuo' }
			],
			myList: [
				{ id: 1, name: '闲置', icon: 'icon-xianzhi' },
				{ id: 2, name: '收藏', icon: 'icon-shoucang' },
				{ id: 3, name: '联系客服', icon: 'icon-kefu' }
			]
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.my-info {
	background-color: $bg-color;
	padding: $spcing-normal $spcing-slg;
	@include row-center;
	.nickname {
		@include flex-column;
		height: 120rpx
	}
}
.my-goods-status, .my-cell {
	background-color: $bg-color;
	margin: $spcing-normal;
	border-radius: 20rpx;
}
.my-cell {
	& > view:not(:last-child) {
		border-bottom: 1rpx solid $b-color;
	}
}
</style>
