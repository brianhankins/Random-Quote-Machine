$(document).ready(function() {
		var url = '/data';
		
		$.getJSON(url,  function(data) {
			console.log(data);
			
			isAuthorEmpty(data.author);
			
			$('#quote').html(data.quoteText + " ~ " + data.quoteAuthor);
		}) 
		
		$('#getQuote').click(function() {
			var btn = $(this);
    		btn.prop('disabled',true);
		    window.setTimeout(function(){ 
		        btn.prop('disabled',false);
		    }, 5500);

			$.getJSON(url,  function(data) {
			console.log(data.quoteAuthor);

			isAuthorEmpty(data.quoteAuthor);

			$('#quote').html(data.quoteText + " ~ " + data.quoteAuthor);
			})
		})
		
		//This fails and throws console errors
		function isAuthorEmpty(author) {
			if (author === "") {
				data.quoteAuthor = "Unknown";
			}

			return;
		}
})