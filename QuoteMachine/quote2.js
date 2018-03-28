
var button = document.getElementById('btnQuote');

button.addEventListener('click', function(){
	
	var message = document.getElementById('message');
	var author = document.getElementById('another');
	var tweeter = document.getElementById('tweet');
	var randomNumber = Math.floor(Math.random()*80);
	
			
	console.log('chicken');
	
	//------------------------------------
	
	fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
.then(function(r) {
	console.log(r.status);
	return r.json();
})
.then(function(j) {
			console.log(j);
		message.innerHTML = '" ' + j[randomNumber].quote + ' "';
		another.innerHTML = '-' + j[randomNumber].author; 
			});
	
	//------------------------
	
	tweet.addEventListener('click', function(e) {
		
		console.log('tweet bird');
		e.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + message.innerHTML + ' ' +another.innerHTML, '_blank');
	});

																									
});

