// var h2 = $('h2').first(),
// 	start = $('#start'),
// 	stop = $('#stop'),
// 	seconds = 0,
// 	minutes = 0,
// 	hours = 0,
// 	t;

// function add() {
//     seconds++;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes >= 60) {
//             minutes = 0;
//             hours++;
//         }
//     }
    
//     h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

//     timer();
// }

// function timer() {
// 	// console.log("started")
//     t = setTimeout(add, 1000);
// }
// timer();

// start.onclick = timer;

// stop.onclick = function() {
//     clearTimeout(t);
// }

// clear.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }