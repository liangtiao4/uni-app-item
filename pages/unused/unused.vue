<template>
	<view>
		<tab />
		<view class="used-item">
			<card-unused :toDetail='toUnusedDetail' />
			<card-unused />
		</view>
	</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardUnused from '@/components/CardUnused.vue'

export default {
	components: { Tab, CardUnused },
	methods: {
		toUnusedDetail () {
			uni.navigateTo({
				url: './detail'
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
