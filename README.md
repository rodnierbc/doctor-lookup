# _Better Doctor Finder_

#### search a doctor near you

##### by Rodnier Borrego Clavero 2/19/2018

## Description

This application allows users to find a list of doctors close to them who can meet their medical needs. It also provides important information for the location of the doctors.

## Setup
* First, clone this repo:

```sh
$ git clone https://github.com/rodnierbc/doctor-lookup.git
```
* Open terminal and create _.env_ file at the top of the project directory
* Aquire and copy API key from _betterdoctor.com_
* Aquire and copy API key accessing the following link: _https://developers.google.com/maps/documentation/javascript/get-api-key_
* Inside the _.env_ file add the following 2 lines of code:
```sh
exports.apiKey = "Paste api key from better doctor here";
```
```sh
exports.apiKeyMap = "paste api key from google maps here";
```
* Save the changes in the .env file
* Initialize NPM via  ```npm init```
* Install npm dependencies ```npm install```
* Initialize Bower (run ```bower init```)
* Install bower dependencies ```bower install``` to
* Initialize Karma (run ```karma init```)
* View chrome based jasmine results through karma with ```npm test```
* Run development server that will update when changes are made to css or js files with ```gulp serve```
* View the webapp either with the development server or open ```index.html``` in your browser of choice

## Known bugs
* jasmine V3 and above can cause issues

##Future Functionality
* allow user to search by specialty, as of now the dropdown populates but does not yet execute searches

## Technologies Used
* JavaScript
* html
* gulp
* jasmine
* Karma


### License
*This application is provided as-is under the MIT license.*

Copyright (c) **_Rodnier Borrego Clavero_**
