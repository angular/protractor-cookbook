Running Protractor Tests on  Docker
========================================

This is a simple tutorial that shows how to use docker to run Protractor tests. We would setup a Selenium Grid and run the tests.

Prerequisites
-------------
Docker needs to be installed on your machine. One can download it from [Docker's website](https://www.docker.com) and follow the [documentation](https://docs.docker.com/) accordingly.
It is assumed that , one knows the basics of Docker for this tutorial.

Setup
-----------
To ensure Docker is installed sucessfully , type :
``` shell
docker -v
```
and one  would see a similar output , depending on the version of docker installed :
``` shell
Docker version 1.12.0-rc4, build e4a0dbc, experimental
``` 

Step 0 - Download the docker images for Selenium Hub and Selenium Node
-----------------------------------------------------------------------------

``` shell
docker pull selenium/hub:latest
docker pull selenium/node-chrome:latest
```
One could pull 'node-firefox' if they want to work with firefox node. 
For more information about the different images one can work with , please look at [Docker Selenium Images List](https://github.com/SeleniumHQ/docker-selenium/blob/master/README.md)


Step 1 - Starting the Selenium Grid
-----------------------------------------------------------------------------
``` shell
docker run -d -p 4444:4444 --name selenium-hub selenium/hub:latest
```

One can change the tag from 'latest' to '2.53.0' or any other version as they see fit.

Step 2 - Starting the Selenium Nodes
-----------------------------------------------------------------------------
``` shell
docker run -d --link selenium-hub:hub selenium/node-chrome:latest
```

The above would create a chrome node and link it to the Selenium hub/grid created earlier.

Step 3 - Running the tests
-----------------------------------------------------------------------------

Update the seleniumAddress to the url of the hub in your protractor config file.

``` js
seleniumAddress: 'http://localhost:4444/wd/hub'
```
and run your tests. 

``` shell
./node_modules/.bin/protractor <config-file>
```

- Maximising the browser window 

    - Depending on the webpage, the element needs to be scrolled to , in order for it to be visible, 
    by maximising the window , the number of times , one would have to use  the util method for it, decreases.

    - Also useful for debugging tests.

- Specifying implicit wait

    - By specifying the implicit wait , protractor waits before throwing an error for performing an action. Especially useful 
    when the page load time fluctuates due to network.

``` js
browser.manage().window().maximize();
browser.manage().timeouts().implicitlyWait(5000);
```

Step 4 - Debugging the tests
-----------------------------------------------------------------------------
At this point you would be able to see the output of the tests and  will not be able to visually confirm that the tests are running.

Install [RealVNC](https://www.realvnc.com) viewer.

One needs to add a node-chrome-debug ( which has a vnc server set up )  to the selenium grid instead of node-chrome
to be able to view the tests running . This can not be acheived with a node-chrome because the vnc server is 
not setup , in the node-chrome docker image.

One can also use the standalone-chrome-debug for the same.

``` shell
docker run -d -p <port>:5900 --link selenium-hub:hub selenium/node-chrome-debug:latest
```

Find the port that VNC server exposes for the container :

``` shell
docker port <container-name or container-id> 5900
```

  and view it using the vnc viewer using the output of the above command.


Using Docker Compose
---------------------------------------------------------------------------
Till this point , the selenium hub and nodes were created by typing commands in the CLI. This approach would work on one's machine , but is not a scalable solution.
That's where [Docker Compose](https://docs.docker.com/compose/) comes into picture.
We would do the above the steps , by specifying a .yml file and see the results.

Create a docker-compose.yml 

``` yaml
version: '3.5'
services:
  chrome:
    image: selenium/node-chrome-debug:3.11.0-californium
    volumes:
      - /dev/shm:/dev/shm
    environment:
      HUB_HOST: hub
    ports:
      - "5900:5900"  
    networks:
      - protractortest
  hub:
    image: selenium/hub:3.11.0-californium
    ports:
      - "4444:4444"
    networks:
      - protractortest
  angular:
    image: node:6-alpine
    ports:
      - 8000:8000
    volumes:
      - ./app:/var/www
    working_dir: /var/www
    command: ["npm", "start"]
    networks:
      - protractortest
networks:
  protractortest:
    name: protractortest
```

Then in the terminal, enter the command

``` shell
docker-compose up -d
```

``` shell
docker run -it --rm --network=protractortest -v /dev/shm:/dev/shm -v $(pwd):/protractor jozzhart/node-6-protractor ./docker-selenium-grid-conf.js
```
or use the shortcut

``` shell
npm test
```
Where to go next
----------------

This should get you started with  writing tests using Docker and Protractor . To learn more, see the documentation for [Docker](https://docs.docker.com) and [Protractor](http://www.protractortest.org/#/).
