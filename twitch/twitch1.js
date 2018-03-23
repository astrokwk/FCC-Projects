var twitchUser = ['MissAyalah','Trick2g','boxbox','primevideo','Quantum702','TwitchPresents','Machinima','Guude','PKMNcast','KemilynnTV','LoLNatsumiii'];

var url = 'https://wind-bow.glitch.me/twitch-api/';
var twitchBox = document.getElementById('streamerBox');
var allButton = document.getElementById('all_tab');
var onlineButton = document.getElementById('online_tab');
var offlineButton = document.getElementById('offline_tab');
var logo = document.getElementById('streamerBox');

var clientID = 'ucx7rk29wgkqt60ov128y8bhfn940t';





function onlineOrOffline() {
	for(var i = 0; i < twitchUser.length; i++) {

fetch(url + 'streams/' + twitchUser[i] + '?callback=')
.then(function(r) {
	console.log(r.status);
	return r.json();
	})
.then(function(j){
	console.log(j);
	var obj = j.stream.channel.logo;
	if(j.stream === null) {
		console.log('poo');
				
		
	} else {
		console.log('woof woof');
			
	

	
	var listItem = document.createElement('div');
	var logoPic = document.createElement('img');
	var onlineName = document.createElement('a');
		
		onlineName.innerHTML = j.stream.channel.display_name;
		onlineName.setAttribute('href', j.stream.channel.url);
		onlineName.setAttribute('target', '_blank');
		listItem.appendChild(onlineName);
	
	listItem.setAttribute('class', 'listy');	
	logoPic.setAttribute('src', obj);
	
	listItem.appendChild(logoPic);
	logo.appendChild(listItem);
		
		
	}
	})
.catch (function (err) {
	console.log('mushroom');
})
			while(logo.firstChild){
    logo.removeChild(logo.firstChild);
	
}
	}
}


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function orOffline() {
	for(var i = 0; i < twitchUser.length; i++) {
		

fetch(url + 'streams/' + twitchUser[i] + '?callback=')
.then(function(r) {
	console.log(r.status);
	return r.json();
	})
.then(function(j){
	console.log(j);
	
	let offlineUrl = j._links.channel;
		
	if(j.stream === null) {
		console.log('poo');
		
			
fetch(offlineUrl + '?client_id='+ clientID)
.then(function(r){
	return r.json();
	})
.then (function(j){
	console.log(j);
				
	var obj = j.logo;	
		
	var listItem = document.createElement('div');
	var logoPic = document.createElement('img');
	var offlineName = document.createElement('a');
	
	offlineName.innerHTML = j.display_name;
	offlineName.setAttribute('href', j.url);
	offlineName.setAttribute('target', '_blank');
	listItem.appendChild(offlineName);
	
	listItem.setAttribute('class', 'listy');	
	logoPic.setAttribute('src', obj);
	
	listItem.appendChild(logoPic);
	logo.appendChild(listItem);
		
	})
}

		
	 else if (j.stream === undefined) {
		console.log('woof woof');
		document.getElementsByClassName('listy').style.display = 'none';


		
	}
	})

			while(logo.firstChild){
    logo.removeChild(logo.firstChild);
	
}
	}
}

/////////////////////////////////////////////////


function allTwitch() {
	for(var i = 0; i < twitchUser.length; i++) {
		

fetch(url + 'streams/' + twitchUser[i] + '?callback=')
.then(function(r) {
	console.log(r.status);
	return r.json();
	})
.then(function(j){
	console.log(j);
	
	let offlineUrl = j._links.channel;
	const sumText = document.createElement('div');
	
	
	
		
			if(j.stream === null) {
		console.log('poo');
		var offlineStatus = document.createElement('p');
		var offlineBox = document.createElement('div');
		
				offlineStatus.setAttribute('class', 'offlineStyle')
			offlineStatus.innerHTML = 'Offline';
			sumText.appendChild(offlineStatus);
		}
	 else if (j.stream != null) {
		console.log('woof woof');
		 
		 		var onlineStatus = document.createElement('p');
		var onlineBox = document.createElement('div');
		
		 onlineStatus.setAttribute('class', 'onlineStyle')
			onlineStatus.innerHTML = 'Online';
			sumText.appendChild(onlineStatus);
		}
	
	
			
fetch(offlineUrl + '?client_id='+ clientID)
.then(function(r){
	return r.json();
	})
.then (function(j){
	console.log(j);
				
	var obj = j.logo;	
		
	var listItem = document.createElement('div');
	var logoPic = document.createElement('img');
	var offlineName = document.createElement('a');
	
	offlineName.innerHTML = j.display_name;
	offlineName.setAttribute('class', 'nameMargin');
	offlineName.setAttribute('href', j.url);
	offlineName.setAttribute('target', '_blank');
	sumText.style.display = 'inline-block';
	
	sumText.appendChild(offlineName);
	listItem.appendChild(sumText);
	
	listItem.setAttribute('class', 'listy');	
	logoPic.setAttribute('src', obj);
	
	listItem.appendChild(logoPic);
	logo.appendChild(listItem);
	
		
	})
	
	})

			while(logo.firstChild){
    logo.removeChild(logo.firstChild);
	
}
	}
}



//----------------------Event Below---------------------

allButton.addEventListener('click', function(){
allTwitch();
	allButton.disabled = true;
onlineButton.disabled = false;
	offlineButton.disabled = false;
})


onlineButton.addEventListener('click', function() {
	onlineOrOffline();
	onlineButton.disabled = true;
	allButton.disabled = false;
	offlineButton.disabled = false;
})


offlineButton.addEventListener('click', function(){
	orOffline();
	offlineButton.disabled = true;
	allButton.disabled = false;
	onlineButton.disabled = false;
})