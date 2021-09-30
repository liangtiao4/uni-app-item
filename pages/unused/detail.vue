<template>
<view class="unused-detail">
	<view class="seller wrap-p column-center">
		<image
			:src="unused.avatar"
			class="img-avatar ia-sm mr-1" />
		<text>{{unused.nickname}}</text>
	</view>
	<view class="unused-desc wrap-p">
		<view class="fs-3 mb-2">{{unused.title}}</view>
		<view class="mb-1">{{unused.content}}</view>
		<view class="mb-1">交易方式：{{unused.tradeMethod}}</view>
		<view class="showimg">
			<view class="mb-1 flex-row">
				<text>实物展示:</text>
				<price-format :price="unused.price" />
			</view>
			<image
				v-for="(item, i) in unused.imgs"
				:key="i"
				:src="item"
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
import PriceFormat from '@/components/PriceFormat.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'detail',
	components: { GoodsAction, PriceFormat },
	computed: {
		...mapState({ unused: state => state.u.unused })
	},
	methods: {
		...mapMutations(['getUnusedById'])
	},
	onLoad (options) {
		this.getUnusedById(options.id)
	}
}
</script>

<style lang="scss">
.unused-detail {
	background-color: $bg-color;
	font-size: $font-size-normal;
	padding-bottom: 100rpx;
}
.seller {
	border-bottom: 1rpx solid $b-color;
}
</style>
