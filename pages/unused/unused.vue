<template>
	<view>
		<tab />
		<view class="used-item">
			<card :toDetail='toUnusedDetail' />
			<card />
		</view>
	</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import Card from '@/components/Card.vue'

export default {
	data() {
		return {
			
		}
	},
	components: { Tab, Card },
	methods: {
		toUnusedDetail () {
			uni.navigateTo({
				url: './unusedDetail'
			})
		}
	}
}
</script>

<style lang="scss">
.used-item {
	padding: $spcing-lg;
}
</style>
