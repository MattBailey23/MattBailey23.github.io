var weatherContainer;
var btn;
var password;

function initialize(){
	weatherContainer = document.getElementById("weatherContainer");
	btn = document.getElementById("btn");
	btn.addEventListener('click', fetchData);
}

/*function renderHTML(data){
	
	for (var i = 0; i < data.length; i++){
		console.log(data[i].clouds);
		var node = document.createElement("p");
		var textnode = document.createTextNode(data[i].weather.main);
		node.appendChild(textnode);
		weatherContainer.appendChild(node);
		
	}
}*/

function fetchData(){
	console.log('123');
	var username = '';
	var password = '';
	
	var request = new XMLHttpRequest();
	request.open('GET', 'https://telematics-e2e.visualsutdio.com/DefaultCollection/Telematics-E2E-Program/_apis/wit/queries/2feca7d1-ebbe-48ff-b64f-3aad4dcf0d43');
	request.withCredentials = true;
	request.setRequestHeader("Authorization", "Basic " + window.btoa(username + ":" + password));
	request.onload = function(){
		var queryData = JSON.parse(request.responseText);
		console.log(queryData);
		//renderHTML(queryData);
		};
	request.send();
}
//https://telematics-e2e.visualstudio.com/Telematics-E2E-Program/_queries?id=a2108d31-086c-4fb0-afda-097e4cc46df4&_a=query
//https://telematics-e2e.visualsutdio.com/DefaultCollection/Telematics-E2E-Program/_apis/wit/queries/75b3b70c-7b40-48d0-b677-42a05ad120d6?api-version=1.0