<template>
<view class="content">
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(item,index) in swiperList" :key="index">
			<image :src="item.imgUrl" class="swiper-img"></image>
		</swiper-item>
	</swiper>
	<view class="title">精选项目</view>
	<view class="products">
		<view
			class="products-item"
			v-for="(item, i) in productsList"
			:key='item.id'
			@click="toItemPage(i)"
		>
			<image :src="item.imgUrl" alt="项目图片"></image>
			<text>{{item.name}}</text>
		</view>
	</view>
	<view class="recommend">
		<text class="recommend-title">推荐</text>
		<card-goods
			v-for="r in recommendList"
			:key="r._id" :data="r"
			@todetail='toDetail'
		>
			<text class="column-center text-desc">
				浏览{{r.reading}}
			</text>
		</card-goods>
	</view>
</view>
</template>

<script>
import CardGoods from '@/components/CardGoods.vue'
import { mapState } from 'vuex'

export default {
	components: { CardGoods },
	data() {
		return {
			swiperList: [
				{ imgUrl: '../../static/swiper1.jpg' },
				{ imgUrl: '../../static/swiper2.jpg' },
				{ imgUrl: '../../static/swiper3.jpg' }
			],
			productsList: [
				{ id: 1, name: '闲置', imgUrl: '../../static/pro_item1.jpg' },
				{ id: 2, name: '实习兼职', imgUrl: '../../static/pro_item2.jpg' },
				{ id: 3, name: '帮帮', imgUrl: '../../static/pro_item3.jpg' }
			]
		}
	},
	computed: {
		...mapState({
			recommendList: state => state.u.recommendList
		})
	},
	methods: {
		toItemPage (index) {
			const routes = ['unused', '', '']
			const route = routes[index]
			if (route) {
				const url = `../${route}/${route}`
				uni.navigateTo({ url })
			} else {
				uni.showToast({
					title: '无更多逻辑！',
					icon: 'none'
				})
			}
		},
		// 到推荐详情
		toDetail () {
			uni.showToast({ icon: 'none', title: '暂无推荐逻辑！' })
		}
	}
}
</script>

<style lang="scss">
.swiper {
	width: $ratio-100;
	&-img {
		width: $ratio-100;
		height: $ratio-100;
	}
}

.title {
	text-align: center;
	font-size: $font-size-lg;
	color: $color-commond;
	background-color: $bg-color;
	padding-top: $spcing-sm;
}
.products {
	@extend .d-flex;
	padding: $spcing-normal 0;
	background-color: $bg-color;
	&-item {
		@extend .flex-grow-1, .center-column;
		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: $ratio-50;
			border: 4rpx solid $b-color;
		}
		text {
			margin-top: $spcing-normal;
			font-size: $font-size-normal;
		}
	}
}

.recommend {
	margin-top: $spcing-normal;
	padding: $spcing-normal 0;
	background-color: $bg-color;
	&-title {
		display: block;
		padding: 0 $spcing-lg;
		font-size: $font-size-normal;
		font-weight: 500;
		color: $color-commond;
	}
}
</style>
