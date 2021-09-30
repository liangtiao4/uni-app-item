<template>
<view class="grid column-center">
	<view
		class="grid-item"
		v-for="(g, i) in list"
		:key="g.id"
		@click="$emit('toOrderPage', i + 1)"
	>
		<i :class='"iconfont mb-2 icon-" + g.icon'></i>
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
	font-size: $font-size-sm;
	&-item {
		@extend .flex-grow-1;
		text-align: center;
		margin: $spcing-sm $spcing-normal;
		.iconfont { font-size: 60rpx; }
	}
}
</style>
