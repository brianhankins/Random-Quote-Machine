let express = require('express');
let app = express();
var axios = require('axios');
app.use(express.static(__dirname + '/public'));
app.get('/data', function (req, resp) {
	axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
	.then(function (res) {
		console.log(res.data)
		resp.send(res.data)
	});
})
app.listen(3000,() =>console.log('express server started'));


