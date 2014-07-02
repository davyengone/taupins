var express = require('express'),
	app 	= express(),
	path 	= require('path'),
	port = process.env.PORT || 3000,
	fullpath = path.join(__dirname, '../client');

app.use(express.static(fullpath));

app.listen(port);