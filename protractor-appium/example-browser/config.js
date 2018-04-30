var env = require('../environment');

exports.config = {
    specs: ["../spec.js"],
    seleniumAddress : "http://0.0.0.0:4723/wd/hub",
    capabilities : {
        deviceName : 'emulator-5554', // replace it with your device name
        platformName : 'Android',
        browserName : 'Chrome',
        noReset : true,
    },
    onPrepare :function () {
        browser.get(env.url + "/ng1/calculator");
    }
};