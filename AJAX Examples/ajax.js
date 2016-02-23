function buttonClicked(){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState === 4 && http.status=== 200){
			console.log(http.responseText);
			json = http.responseText;
			console.log(json);
			var obj = JSON.parse(json);
		}
	};
	http.open("GET","books.json",true);
	http.send();
}