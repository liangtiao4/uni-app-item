<template>
<view class="card">
	<view class="card-item"
		v-for="u in list"
		:key="u._id"
		@click="toDetail(u._id)"
	>
		<view class="card-item-top">
			<text class="fs-3">{{u.title}}</text>
			<view class="text-desc">{{u.time}}</view>
		</view>
		<view class="card-item-middle">
			<view>
				<image :src="u.imgs[0]" class="img mr-2"/>
			</view>
			<view class="h-180 column-between">
				<text class="row-hidden-2">{{u.content}}</text>
				<price-format :price="u.price" color="origin"></price-format>
			</view>
		</view>
		<view class="card-item-bottom text-desc">
			<view class="mr-2">{{u.reading}} 人浏览</view>
			<view>{{u.collect}} 人收藏</view>
		</view>
	</view>
</view>
</template>

<script>
import PriceFormat from '@/components/PriceFormat.vue'

export default {
	name:"CardUnsed",
	props: ['list', 'toDetail'],
	components: { PriceFormat }
}
</script>

<style lang="scss">
.card-item {
	font-size: $font-size-normal;
	border: 1rpx solid $b-color;
	border-radius: 10rpx;
	box-shadow: 0 0 0 1 #EEEEEE;
	background-color: $bg-color;
	margin-bottom: $spcing-normal;
	padding: $spcing-sm $spcing-normal;
	&-top { @extend .row-between, .mb-1; }
	&-middle { @extend .column-center; }
	&-bottom { @extend .d-flex, .fs-1, .mt-1; }
}
</style>
