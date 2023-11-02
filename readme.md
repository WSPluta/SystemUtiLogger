# Node system resources logger

Little app that monitors utilisation of:  
        `CPU Usage: 2.50%, Memory Usage: 31.05%, Network Received: 0 bytes`  
it takes reading ever 15 seconds and writes it to the `system_stats.log`  

## Requirements

    - Node 18 

![Alt text](images/app.png?raw=true "app")

## Instructions

- git clone this repo
- run `npm install` in the root of the cloned folder
- initiate logging with `node index.js`