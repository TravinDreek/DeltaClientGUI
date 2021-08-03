// 测试环境
var java = {
	importClass: function(classname) {
		if(classname == "api.delta.APIManager") return APIManager;
	}
}

var APIManager = {
	getAPI: function() {
		return API;
	}
}

var API = {
	getModuleList: function() {
		console.log('getModuleList() is called');
		return JSON.stringify({ // 'name': 'description'
			'Animations': 'Change animation properties',
			'ArmorStatus': 'Display your armor durability',
			'AutoGG': 'Send "gg" automatically after a match',
			'AutoTip': 'Automatically tip players on Hypixel',
			'BlockOverlay': 'Change colors when hovering on blocks',
			'CPS': 'Display your clicks per second',
			'Crosshair': 'Customize your in-game crosshair',
			'Direction': 'Display your direction',
			'SomeMoreMods': 'No space should be contained in the mod names'
		});
	},
	getModuleStatus: function(module) {
		console.log('getModuleStatus("' + module + '") is called');
		return Math.random() > 0.5;
	},
	setModuleStatus: function(module, enabled) {
		console.log('setModuleStatus("' + module + '", ' + enabled + ') is called');
	},
	getModuleConfig: function(module) {
		console.log('getModuleConfig("' + module + '") is called');
		return JSON.stringify({ // 先在 ['widgets'] 里声明控件, 然后在 ['config'] 里传递各值 (title 控件无需传值)
			'widgets': { // 声明控件 (可用控件: radio, slider, switch, key, title. 用法见下.)
				'Mode': { // 控件名
					'type': 'radio', // 单选
					'choices': ['AAC', 'NCP', 'Vanilla'] // 选项
				},
				'FOV': {
					'type': 'slider', // 滑块
					'step': 5, // 精度
					'min': 0, // 最小值
					'max': 360 // 最大值
				},
				'CPS': {
					'type': 'slider',
					'step': 1,
					'min': 1,
					'max': 20
				},
				'Targets': {
					'type': 'title' // 标题 (无需传值, 只会在 ClickGUI 显示文字标题, 主要是为了给开关分组)
				},
				'Players': {
					'type': 'switch' // 开关
				},
				'Animals': {
					'type': 'switch'
				},
				'Monsters': {
					'type': 'switch'
				},
				'Options': {
					'type': 'title'
				},
				'AutoBlock': {
					'type': 'switch'
				},
				'AntiBot': {
					'type': 'switch'
				},
				'Keybind': {
					'type': 'key' // 按键输入 (传的是 JavaScript 的按键码, 也就是 ASCII 码)
				}
			},
			'config': { // 传递各项配置
				'Mode': 1, // 直接使用在 choices 里的索引 (从 0 开始)
				'FOV': 90,
				'CPS': 15,
				'Players': true,
				'Animals': false,
				'Monsters': true,
				'AutoBlock': false,
				'AntiBot': true,
				'Keybind': 19
			}
		});
	},
	setModuleConfig: function(module, config) {
		console.log('setModuleConfig("' + module + '", ' + config + ') is called');
	},
	getNextKey: function() { // (阻塞) 用于获取一个按键输入. 返回 MC 中的 keyIndex.
		console.log('getNextKey() is called');
		for(var t = Date.now(); Date.now() - t <= 2000;); // 阻塞 2 秒
		console.log('Key [F] is pressed');
		return 33;
	},
	getKeyNameByIndex: function(keyIndex) {
		console.log('getKeyNameByIndex(' + keyIndex + ') is called');
		return {19: 'R', 33: 'F'}[keyIndex];
	}
}