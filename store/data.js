export const unusedList = [
	{
		_id: 'unu001',
		nickname: '派大星',
		avatar: '/static/avatar/017.jpg',
		title: '星巴克环保杯',
		content: '这是在星巴克最新发行的环保杯，通体白斩，还有好看的小图案点缀，创意满满。',
		imgs: ['/static/avatar/002.jpg', '/static/avatar/003.jpg'],
		tradeMethod: '自提',
		price: 108,
		time: '刚刚',
		reading: 10086,
		collect: 99,
		sort: 'wp'
	},
	{
		_id: 'unu007',
		nickname: '傻大星',
		avatar: '/static/avatar/018.jpg',
		title: '神仙水300ml',
		content: 'SK-II神仙水精华液 面部护肤品精华补水舒缓修护平衡水油skllsk2',
		imgs: ['/static/avatar/005.jpg'],
		tradeMethod: '派送',
		price: 1024,
		time: '1小时前',
		reading: 404,
		collect: 200,
		sort: 'hzp'
	}
]

export const cartList = [
	{
		_id: 'cart009',
		title: '一只海绵宝宝',
		content: '海绵BOO宝公仔毛绒玩具抱枕玩偶压床布娃娃',
		img: '/static/avatar/001.jpg',
		price: 59,
		count: 1,
		unused_id: 'unu555',
		isCheck: true
	},
	{
		_id: 'cart010',
		title: '珊迪·奇克斯',
		content: '珊迪·奇克斯是来自美国南部的德克萨斯州的雌性松鼠，身兼科学家、探险家和发明家',
		img: '/static/avatar/004.jpg',
		price: 99,
		count: 2,
		unused_id: 'unu333',
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
		seller_id: 'shandi110',
		seller_avatar: '/static/avatar/018.jpg',
		seller_nickname: '派大星',
		title: '标题',
		content: '这是内容内容内容内容内容内容内容内容',
		img: '/static/avatar/004.jpg',
		price: 199,
		discount: 12,
		count: 1,
		// reading: 500,
		unused_id: 'unu073',
		// 1 待付款，2 待发货，3 待收货，4 已收货
		state_code: 1,
		state_desc: '代付款'
	}
]
