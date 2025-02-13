var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	console.log("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	console.log("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	console.log("resume");
    }


var key = "pen";
var value = "blue";

window.localStorage.setItem(key, value);

var value = window.localStorage.getItem(key);

$("#values").text(value);
