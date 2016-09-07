exports.config = {
	framework: 'jasmine2'
	, specs: ['specs/*.js']
 	, seleniumAddress: 'http://localhost:4444/wd/hub'
	,  capabilities: {
		browserName: 'chrome'
		, shardTestFiles: true
		, maxInstances: 5
	}
	, getPageTimeout: 180000
	, allScriptsTimeout: 180000
	, onPrepare: function () {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
	}
	, jasmineNodeOpts: {
		defaultTimeoutInterval: 300000
	}
};