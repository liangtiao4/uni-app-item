<template>
<view class="detail">
	<view class="nd-tab">
		<tab :tablist="tabList" @updatelist="updateList"/>
	</view>
	<view class="used-item" v-if="unusedList.length !== 0">
		<card-unused :list="unusedList" :toDetail='toDetail'/>
	</view>
	<nothing v-else/>
</view>
</template>

<script>
import Tab from '@/components/Tab.vue'
import CardUnused from '@/components/CardUnused.vue'
import Nothing from '@/components/Nothing.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	components: { Tab, CardUnused, Nothing },
	data () {
		return { tabList: ['全部', '换妆品', '物品', '其他'] }/*  */
	},
	computed: {
		...mapState({
			unusedList: state => state.u.unusedList
		})
	},
	mounted () {
		this.getUnusedListBySort('')
	},
	methods: {
		...mapMutations(['getUnusedListBySort']),
		toDetail (id) {
			uni.navigateTo({
				url: `./detail?id=${id}`
			})
		},
		updateList (i) {
			const sort = ['', 'hzp', 'wp', 'qt'];
			this.getUnusedListBySort(sort[i])
		}
	}
}
</script>

<style lang="scss">
.detail {
	.nd-tab {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: $bg-color;
		padding-top: $spcing-normal;
		border-bottom: 1rpx solid $b-color;
	}
	.used-item {
		padding: 100rpx $spcing-lg $spcing-normal;
	}
}
</style>
