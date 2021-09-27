<template>
<view class="grid">
	<view
		class="grid-item"
		v-for="g in list"
		:key="g.id"
	>
		<i class='iconfont mb-2' :class='g.icon'></i>
		<text>{{g.name}}</text>
	</view>
</view>
</template>

<script>
export default {
	name:"Grid",
	props: ['list'],
	methods: {
		getIcon: (name) => {
			return 'iconfont icon-' + name
		}
	}
}
</script>

<style lang="scss">
.grid {
	@include row-center;
	font-size: $font-size-normal;
	&-item {
		flex-grow: 1;
		text-align: center;
		margin: $spcing-sm $spcing-normal;
		.iconfont {
			font-size: 60rpx;
		}
	}
}
</style>
