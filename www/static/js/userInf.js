
	var author_match = location.href.match(/[\?\&]sid=([\da-z]{32})/);
		var author_md5 = "";
		if(author_match && author_match.length == 2){
			author_md5 = author_match[1];
		}

	function getData(url,data,callback){
		data.sid = author_md5||"";
		$.ajax({
			"url":url,
			"data":data
		}).done(function(data){
			if (callback){
				console.log(data);
				callback(data);
			}
			
		}).fail(function(err){
			console.log(err);
		})
	}
	