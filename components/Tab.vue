<template>
<view class="top-tab">
	<view class="tab-title">
		<view
			class="tab-title-item"
			v-for="(t, i) in tablist"
			:key="i"
			@click="changeTab(i)"
		>
			<text :class="i === cIndex ? tabactive : '' ">
				{{t}}
			</text>
		</view>
	</view>
</view>
</template>

<script>
export default {
	name:"Tab",
	props: {
		tablist: { type: Array, required: true },
		tabactive: {
			type: 'default-active' | 'state-active',
			required: true,
			default: 'default-active'
		}
	},
	data() { return { cIndex: 0 } },
	methods: {
		changeTab (i) {
			this.cIndex = i
			this.$emit('updatelist', i)
		}
	}
}
</script>

<style lang="scss">
.tab-title {
	@extend .column-center;
	height: 30rpx;
	font-size: $font-size-normal;
	padding-bottom: $spcing-normal;
	&-item {
		@extend .flex-grow-1;
		text-align: center;
	}
}
// 订单状态页面的行为
.state-active {
	font-size: $font-size-lg;
	color: $color-orange;
	font-weight: 600;
}
// 导航默认点击后行为
.default-active {
	border-bottom: 4rpx solid $color-orange;
	padding: 5rpx $spcing-normal;
}
</style>
