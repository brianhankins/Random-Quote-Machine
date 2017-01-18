$('#getQuote').click(function() {
	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
		.done(update)
		.fail(errorHandler);
});  

function update(response) {
	console.log(response)
}

function errorHandler(textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

