<template>
<view class="detail">
	<view class="nd-tab">
		<tab
			:tablist="tabList"
		  @updatelist="updateList"
		/>
	</view>
	<view class="used-item">
		<card-unused
			:list="unusedList"
		  :toDetail='toUnusedDetail'/>
	</view>
</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardUnused from '@/components/CardUnused.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	components: { Tab, CardUnused },
	data() {
		return { tabList: ['全部', '换妆品', '物品', '其他'] }
	},
	computed: {
		...mapState(['unusedList'])
	},
	methods: {
		...mapMutations(['setUnusedList']),
		toUnusedDetail () {
			uni.navigateTo({
				url: './detail'
			})
		},
		updateList (i) {
			const sort = ['', 'hzp', 'wp', 'qt'];
			this.setUnusedList(sort[i])
		}
	}
}
</script>

<style lang="scss">
.detail {
	.nd-tab {
		background-color: $bg-color;
		padding-top: $spcing-normal;
	}
	.used-item { padding: $spcing-lg; }
}
</style>
