Running Protractor Tests on  Docker (without Selenium)
========================================

This is a simple tutorial that shows how to use docker to run Protractor tests. 
This example is an alternative to using Selenium Grid and as such provides a simpler setup

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
Docker version 18.05.0-ce, build f150324
``` 

Using Docker Compose
---------------------------------------------------------------------------

Create a docker-compose.yml 

``` yaml
version: '2.4'

services:

  app:
    image: node:6.14-slim
    working_dir: /src
    command: node index.js
    volumes: 
      - "../testapp:/src"

  e2e:
    image: webnicer/protractor-headless
    command: ./conf.js
    shm_size: 2g
    volumes: 
      - "./:/protractor"
      - "tests-output:/test-output"
    depends_on:
      - app

volumes: 
  tests-output:
```

Then in the terminal, enter the command

``` shell
npm test
```

The above command performs the following:
* installs node_modules for the testapp and any test jasmine reporters useful for end-to-end testing
* starts the testapp inside of a container ('app')
* runs protractor tests in another container ('e2e') against the testapp in the same private docker network
* outputs the results of the tests to a named volume thus making them available outside of the test container