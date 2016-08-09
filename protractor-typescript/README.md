Setup
=====

```
npm install
```

- Installs node modules
  - Protractor node module with TypeScript support
- Installs ambient typing dependencies.

Testing with TypeScript
=======================

```
npm test
```

- Transpiles TypeScript
- Runs `webdriver-manager update` to download the ChromeDriver
- Runs the test directly with ChromeDriver

Note
----

Currently, Protractor typings do not include selenium-webdriver ambient
typings. There is also an ambient typings file for Protractor on Definitely
Typed. Although this does not match up with the current API, this ambient
typings file can still be used to write Protractor with TypeScript.
