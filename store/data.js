export const unusedList = [
	{
		_id: 'unu001',
		seller: '派大星',
		seller_avatar: '/static/avatar/017.jpg',
		seller_id: '001',
		title: '星巴克环保杯',
		content: '这是在星巴克最新发行的环保杯，通体白斩，还有好看的小图案点缀，创意满满。',
		imgs: ['/static/avatar/002.jpg', '/static/avatar/003.jpg'],
		trade_method: '自提',
		service: '7天无理由退款',
		price: 108,
		time: '刚刚',
		reading: 10086,
		collect: 99,
		sort: 'wp'
	},
	{
		_id: 'unu007',
		seller: '阿迪',
		seller_avatar: '/static/avatar/018.jpg',
		seller_id: '002',
		title: '神仙水',
		content: 'SK-II神仙水精华液 面部护肤品精华补水舒缓修护平衡水油skllsk2',
		imgs: ['/static/avatar/005.jpg'],
		trade_method: '上门派送',
		service: '7天无理由退款',
		price: 1024,
		time: '1小时前',
		reading: 404,
		collect: 200,
		sort: 'hzp'
	},
	{
		_id: 'unu009',
		seller: '阿迪',
		seller_avatar: '/static/avatar/017.jpg',
		seller_id: '002',
		title: '一只海绵',
		content: '海绵BOO宝公仔毛绒玩具抱枕玩偶压床布娃娃',
		imgs: ['/static/avatar/001.jpg'],
		trade_method: '中通快递',
		service: '7天无理由退款',
		price: 59,
		time: '2小时前',
		reading: 404,
		collect: 200,
		sort: 'wp'
	},
	{
		_id: 'unu010',
		seller: '哈迪斯',
		seller_avatar: '/static/avatar/017.jpg',
		seller_id: '003',
		title: '珊迪·奇克斯',
		content: '它是来自美国南部的德克萨斯州的雌性松鼠，身兼科学家、探险家和发明家',
		imgs: ['/static/avatar/004.jpg'],
		trade_method: '中通快递',
		service: '7天无理由退款',
		price: 99,
		time: '1天前',
		reading: 404,
		collect: 200,
		sort: 'wp'
	},
	{
		_id: 'unu012',
		seller: '哈迪斯',
		seller_avatar: '/static/avatar/017.jpg',
		seller_id: '003',
		title: '标题',
		content: '这是内容内容内容内容内容内容内容内容',
		imgs: ['/static/avatar/004.jpg', '/static/avatar/005.jpg'],
		trade_method: '中通快递',
		service: '7天无理由退款',
		price: 199,
		time: '2天前',
		reading: 500,
		collect: 404,
		sort: 'wp'
	}
]

export const cartList = [
	{
		_id: 'cart009',
		seller: '阿迪',
		seller_avatar: '/static/avatar/017.jpg',
		title: '一只海绵',
		content: '海绵BOO宝公仔毛绒玩具抱枕玩偶压床布娃娃',
		img: '/static/avatar/001.jpg',
		trade_method: '中通快递',
		service: '7天无理由退款',
		price: 59,
		count: 1,
		unused_id: 'unu009', // 闲置物品id
		isCheck: true
	},
	{
		_id: 'cart010',
		seller: '哈迪斯',
		seller_avatar: '/static/avatar/017.jpg',
		title: '珊迪·奇克斯',
		content: '珊迪·奇克斯是来自美国南部的德克萨斯州的雌性松鼠，身兼科学家、探险家和发明家',
		img: '/static/avatar/004.jpg',
		trade_method: '中通快递',
		service: '7天无理由退款',
		price: 99,
		count: 2,
		unused_id: 'unu010',
		isCheck: true
	}
]

export const recommendList = [
	{
		_id: 'cart173',
		title: '章鱼哥',
		content: '店铺推荐KAPPA卡帕鞋男女情侣款跑步鞋时尚运动休闲板鞋K0865CC55',
		img: '/static/avatar/003.jpg',
		price: 129,
		reading: 666,
		unused_id: 'unu384'
	},
	{
		_id: 'cart429',
		title: '书包',
		content: '书包女中学生初中生高中学生大学生ins风原宿潮大容量日系双肩包',
		img: '/static/avatar/006.jpg',
		price: 18,
		reading: 500,
		unused_id: 'unu087'
	}
]

export const myOrder = [
	{
		_id: 'order943',
		user_id: 'daimao007',
		seller: '派大星',
		seller_id: '002',
		seller_avatar: '/static/avatar/018.jpg',
		title: '标题',
		content: '这是内容内容内容内容内容内容内容内容',
		img: '/static/avatar/004.jpg',
		price: 199,
		discount: 12,
		count: 1,
		// reading: 500,
		tradeMethod: '中通快递',
		service: '7天无理由退款',
		unused_id: 'unu012',
		// 1 待付款，2 待发货，3 待收货，4 已收货
		state_code: 1,
		state_desc: '代付款'
	}
]
