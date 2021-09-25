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
</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.my-info {
	background-color: $bg-color;
	padding: $spcing-lg;
	@include row-center;
	.nickname {
		@include flex-column;
		height: 120rpx
	}
}
</style>
