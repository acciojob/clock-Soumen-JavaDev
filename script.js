//your JS code here. If required.
let display=document.getElementById('timer');

function time() {
	let currtime=new Date();

	display.innerHTML =currtime.toLocaleString();
	
}
setInterval(time,1000);
time();