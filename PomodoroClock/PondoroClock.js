const timer = document.getElementById('time');


//-------Cat Break Time

var numbre = document.getElementById('breakTime');
var meLeft =document.getElementById('catLeft');
var i = document.getElementById('breakTime').value;

meLeft.addEventListener('click', function(){
	i--;
	numbre.value = i;
	console.log('monkey');
	
	if (numbre.value === '0') {
		meLeft.disabled = true;
	}
})

document.getElementById('catPlus').addEventListener('click', function(){
	i++;
	numbre.value = i;
	console.log('chicken');
	
meLeft.disabled = false;
})



//-----------Pikachu Activity Time




var activity = document.getElementById('activityTime');
var pikaM =document.getElementById('Minun');
//var j = document.getElementById('activityTime').value;
var j = document.getElementById('activityTime').value;
var m;

pikaM.addEventListener('click', function(){
	j--;
	activity.value = j;
	timer.innerHTML = j + ':00';
	console.log('panda');
	m = activity.value;

	
	if (activity.value === '0') {
		pikaM.disabled = true;
	}
})

document.getElementById('Plusle').addEventListener('click', function(){
	j++;
	activity.value = j;
	timer.innerHTML = j + ':00'
	console.log('chicken');
	
pikaM.disabled = false;
})






//------------Countdown Timer

var timerId;
var pika;
var timerrr;


	
	function timeTime(j){
		
		
		var timeLeft = j;
		var counter = timeLeft * 60;

		
	timerId = setInterval(countdown, 1000);
//		return countdown;
	
	function countdown(){
	
	pika = counter--;
		
		if (counter < 0) {
			clearTimeout(timerId);
			alert('Finished');
		}  else {
			
//			var realTime = parseInt(counter/60) + ':' + (counter % 60);
//
//			timer.innerHTML = realTime;
			
			var m = Math.floor(counter/60);
			var s = counter-(m*60);
				if(s < 10) {
					s = '0' + s;
				}
			var realTime = m + ':' + s;

			timer.innerHTML = realTime;

		}
	}

	}

















//================Stop Button

document.getElementById('startButton').addEventListener('click', function() {
	
	timeTime(j);
//	startTimer(j);
	
		console.log('time');
	
	document.getElementById('startButton').classList.add('sButton');
	
	
		document.getElementById('startButton').disabled = true;
});


document.getElementById('stop').addEventListener('click', function(){
	clearInterval(timerId);
	
//clearInterval(x);
	document.getElementById('startButton').disabled = true;
});

document.getElementById('reset').addEventListener('click', function(){
//	clearInterval(timeTime);
	j = Math.floor(pika/60 || 30) + 1;
	timer.innerHTML = j + ':00';
	document.getElementById('startButton').disabled = false;
	document.getElementById('startButton').classList.remove('sButton');
	
});



document.getElementById('resume').addEventListener('click', function(){
//	countDownTimer();
// resumeTimer();
	
	document.getElementById('startButton').disabled = true;
	  j = pika/60 || 30;
  timerrr = timeTime(j);
});






//
//var paused = false;
//var seconds = 60;
//
//function countDownTimer(counter){
//    //before create another timer, remember to cancel the previous one, if has
//    clearInterval(timerId);
//    timerId = setInterval(function(){
//        if(!paused){
//          counter--;
//          console.log(counter);
//          //you can do display or whatever things here.
//        }
//    }, 1000)
//}
//function pauseOrResumeTimer(){
//    paused = !paused;
//}
//


//var time2;
//var timerrr;
//function startTimer(j) {
//  var countDown = 0;
//  var time1 = j * 60;
//  x = setInterval(function() {
//    time2 = time1--;
//    if (time2 > 0) {
//			
//			
//			var m = Math.floor(time2/60);
//			var s = time2-(m*60);
//				if(s < 10) {
//					s = '0' + s;
//				}
//			var realTime = m + ':' + s;
//
//			timer.innerHTML = realTime;
//			
//			
////      document.getElementById("time").innerHTML = time2;
//    } else if (time2 == 0) {
//      clearInterval(x);
//    }
//  }, 1000);
//  return x;
//}
//
//function pauseTimer() {
//  clearInterval(timerrr);
//}
//function resumeTimer() {
//  j = time2/60 || 30;
//  timerrr = startTimer(j);
//}
