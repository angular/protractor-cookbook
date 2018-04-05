exports.config = {
	framework: 'jasmine2',
	specs: ['specs/*.spec.js'],
	seleniumAddress: 'http://hub:4444/wd/hub',
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ["headless", "disable-gpu", "window-size=800,600"]
		}
	},
	getPageTimeout: 180000,
	allScriptsTimeout: 180000,
	jasmineNodeOpts: {
		defaultTimeoutInterval: 300000
	}
};