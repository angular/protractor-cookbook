export class Environment {
    public seleniumAddress: string;
    public capabilities: any;
    public webServerDefaultPort: number;
    public interactiveTestPort: number;
    public baseUrl: string;

    constructor() {
        this.seleniumAddress = (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub');
        this.capabilities = {
            'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
            'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
        }
        this.webServerDefaultPort = 8080;
        this.interactiveTestPort = 6969;
        this.baseUrl = 'http://' + (process.env.HTTP_HOST || 'localhost') +
            ':' + (process.env.HTTP_PORT || this.webServerDefaultPort);
    }
}