var express =               require('express');
var app =                   express();
const path = require('path');

app.use(express.static('dist'));                                                      //For external styling and functionality + js, we can enable our server with express to provide the requested files to anybody

app.listen( 3000, function() {
// app.listen(process.env.PORT, process.env.IP, function() {
    console.log('CV Website went online on port 3000');
});                                                                                     // Tells express to listen to a certain port, which c9.io is telling to listen, on IP which c9.io is telling

// Todo to allocate here the users ts
app.get('*', function(req, res) {
	const pathVariable = path.join(__dirname +  '/dist/index.html');
	res.sendFile(pathVariable);
});
