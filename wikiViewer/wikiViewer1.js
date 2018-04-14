var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=';

var keyword = document.getElementById('searchText');
var submit = document.getElementById('searchButton');
var links = document.getElementById('morePages');






submit.addEventListener('click', function() {
		var miso = document.getElementById('top');
		
	
	if(keyword.value === '') {

		miso.style.display = 'none';
	} else if (keyword.value != ''){
		
		miso.classList.remove('hide');
		miso.classList.add('unhide');
		miso.style.display = 'block';
	}
	

});




submit.addEventListener('click', function(e) {
	console.log('submit');
	
	fetch(url + keyword.value)
.then (function(r){
	console.log(r.status);
	return r.json();
})
.then (function (j) {
	console.log(j);
	console.log('chicken');
		

	
	var obj = j.query.pages;

	
	for(const prop in obj) {	
	 var listItem = document.createElement('li');
	var aTag = document.createElement('a');
		
		
		aTag.setAttribute('class', 'results');
		aTag.setAttribute('target', '_blank')
		
		aTag.setAttribute('href', 'https://en.wikipedia.org/?curid=' + `${prop}`);

		aTag.innerHTML = obj[prop].title;

	listItem.appendChild(aTag);
	links.appendChild(listItem);

}
	
	})
.catch (function (err) {
	console.log('mushroom');
})
	

	

	keyword.value = '';
	
	


while(links.firstChild){
    links.removeChild(links.firstChild);
}
	
});

