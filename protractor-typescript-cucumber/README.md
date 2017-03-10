###Protractor-Cucumber-TypeScript Setup Guide   

This project demonstrates the basic protractor-cucumber-typescript framework project setup.

###Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with Typescript2.0 & Cucumber2.0
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios


###To Get Started

####Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

####Setup Scripts
* run following command from terminal/command prompt
```
   npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

####Setup & Run TestApp
```
cd ..
cd testapp/

    npm install

    npm start 
```

####Run Scripts
```
    npm test
```
* The above command should create an output folder named 'tmp' and transpile the .ts files.
* It launches the Firefox Browser and run the scripts

##Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.