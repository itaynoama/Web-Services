'use strict'

var events = require('events');
var eventsConfig = require("../config");

//Global variable for logger file
var logFile = " ";

//Class Hotel for ES6 
module.exports = class Hotel extends events {
    
    //---Hotel Object Constructor---
    constructor(NameOfHotel, kindOfHotel) {
        super();
        this.name = NameOfHotel;
        this.kind = kindOfHotel;
        this.likes = 0;
    }
    
    //---likes +/- ---
    unlike() {
        this.likes--;
        if(this.likes < 0) {
            this.likes = 0;
        }
        this.emit(eventsConfig.changeLike); //emit (=fire) event
    }
    
    addLike() {
        this.likes++;
        this.emit(eventsConfig.changeLike); //emit (=fire) event
    }
    
    getMsg() {
        var msg = " ## Hotel Information ##\n\nHotel Name: " + this.name + "\nKind of Hotel: " + this.kind + "\nNumber of Likes: " + this.likes;
        return msg;
    }
    
    getLogFile() {
        return logFile;
    }
    
    displayInfo() {
        var info = this.name + ", " + this.kind + " | Number of *likes is " + this.likes;
        logFile += info + "\n";
        console.log(info);
    }   
}