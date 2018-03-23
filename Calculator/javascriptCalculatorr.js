var numbah = document.getElementsByClassName('number');
var showScreen = document.getElementById('display');
var lilScreen = document.getElementById('smallDisplay');
var addition = document.getElementById('plus');
var result;

//numbah.forEach( element => {
//	element.addEventListener('click', numbaClick);
//})
//
//function numbaClick(e) {
//	let value = e.target.value;
//	showScreen.innerHTML = value;
//	console.log('ketchup');
//}

for(var i =0; i< numbah.length; i++) {
numbah[i].addEventListener('click', doStuff);
}

function doStuff(e) {
//	var answer;
//	let value = e.target.value;
//	
//	addition.addEventListener('click', adding);
//	showScreen.innerHTML = value;
//	lilScreen.innerHTML += value;
//	console.log('ketchup');
	
	var pressed = e.target.value;
	var equation = lilScreen.innerHTML;
//	document.getElementById('divide').value = '/';

	if (pressed === '='){
		showScreen.innerHTML = eval(equation);
		lilScreen.innerHTML = showScreen.innerHTML;
			if(eval(equation)) {

			}

	} else if (pressed === 'AC'){
		showScreen.innerHTML = '0';
		lilScreen.innerHTML = '0';
	} else if (pressed === 'CE') {
		console.log('momo');
				var goBack = showScreen.innerHTML;
				var backSpace = lilScreen.innerHTML;
		showScreen.innerHTML = goBack.substr(0, goBack.length -1);
		lilScreen.innerHTML = backSpace.substr(0, backSpace.length -1);
						 } else if (pressed === '/'){
			showScreen.innerHTML += '&#247';
			lilScreen.innerHTML += pressed;		
												} else if (pressed === "*"){
			showScreen.innerHTML += '&times';
			lilScreen.innerHTML += pressed;							 
																	 }else {
		if (showScreen.innerHTML === '0' || lilScreen.innerHTML === '0') {
			showScreen.innerHTML = pressed;
			lilScreen.innerHTML = pressed;
		} else {
			showScreen.innerHTML += pressed;
			lilScreen.innerHTML += pressed;
		}
	}
	
}

//
//function adding(r) {
//		var ped = r.target.value;
//		lilScreen.innerHTML += ped;
//		var n = showScreen.value;
//	var m = showScreen.vaule;
//		result = +n + +n;
//}
//
//function equalResult(){
//	
//}