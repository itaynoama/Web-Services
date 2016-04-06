var http = require('http');
var Hotel = require('./app');
var eventsConfig = require("./config");


//---Here we create new hotel with (Name,Kind). start with 0 likes
var Hotel = new Hotel("7 Season", "Spa resort club");
Hotel.on(eventsConfig.changeLike, Hotel.displayInfo);



//Create response & listen on port 8080
http.createServer(function(request,response) {
    var msg = Hotel.getMsg() + "\n\n ---logger file---\n\n" + Hotel.getLogFile();
    response.writeHeader(200, {'Content-Type': 'text/plain'}); //status code in header + response body
    response.write(msg);
    response.end(); //close connection
}).listen(8080); //listen for connection on this port

//Actions for this Hotel
Hotel.addLike();
Hotel.addLike();
Hotel.addLike();
Hotel.unlike();
Hotel.unlike();
