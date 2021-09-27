<template>
<view class="top-tab">
	<view class="tab-title">
		<view
			class="tab-title-item"
			v-for="(t, i) in tabList"
			:key="i"
		>
			<text :class="i === cIndex ? 'tab-active' : '' ">
				{{t}}
			</text>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		name:"Tab",
		data() {
			return {
				tabList: ['换妆品', '书籍', '杂物', '其他'],
				cIndex: 0
			};
		}
	}
</script>

<style lang="scss">
.tab-title {
	@include row-center
	height: 30rpx;
	background-color: $bg-color;
	padding: $spcing-sm;
	font-size: $font-size-normal;
	&-item {
		flex-grow: 1;
		text-align: center;
	}
}
.tab-active {
	border-bottom: 4rpx solid $color-orange;
	padding: 5rpx $spcing-normal;
}
</style>
