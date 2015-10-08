jobs-feed
===
jobs-feed is a simple slider with jobs. The list of jobs is retrieved from a database via ajax in json format. This data is expanded and used to fill in the interface template. Finally if 2 or more items are presented, the slider controls are initiated and the slider starts. All the bower modules (except font-awesome) were built by me and are available separately in github. Another alternative would be to use AngularJS, but given that this is a small exercise in which the primary intention is to show js skills, I went the vanilla way. 

## install
#### tools
```
npm install -g json-server
npm install -g grunt-cli
```
> test server and task runner

#### dependencies
```
npm install
bower install
```
> task runner and project dependencies

## run
#### server
```
json-server data/db.json
```
> db.json contains the test data

#### project
```
grunt
open app/index.html
```
> build and open in the browser

## optimization
```
grunt pack
open app/index.html
```
> will compress html, css and js

## tools
- Atom.io (+linter)
- Terminal
- Safari + Web Dev Tools
