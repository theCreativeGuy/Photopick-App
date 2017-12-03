
navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

var webcamStream;
var video
var count = 0;		
var video;
var webcamStream;
      
function startWebcam() {
if (navigator.getUserMedia) {
   navigator.getUserMedia (

      // constraints
      {
         video: true,
         audio: false
      },

      // successCallback
      function(localMediaStream) {
          video = document.querySelector('video');
         video.src = window.URL.createObjectURL(localMediaStream);
         webcamStream = localMediaStream;
      },

      // errorCallback
      function(err) {
         console.log("The following error occured: " + err);
      }
   );
} else {
   console.log("getUserMedia not supported");
}  
}
      
function stopWebcam() {
	webcamStream.stop();
	}
	  
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx, data, hiddenCanvas, hiddenctx;
var firstTime = false;
function init() {
  // Get the  2 canvas and obtain a context for
  // drawing in it
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');
  
  hiddenCanvas = document.getElementById("myHiddenCanvas");
  hiddenctx = hiddenCanvas.getContext('2d');
  
}

function snapshot() {
	hiddenctx.drawImage(video, 0,0, hiddenCanvas.width, hiddenCanvas.height);
	ctx.drawImage(video, count,0, canvas.width/6, canvas.height);
	if(count>=600){
		count=0;
		} else {
			count = count + 120;
			}
			
    data = hiddenCanvas.toDataURL("image/png");
	//data = data.replace("image/png","image/octet-stream");
	//data = data + ".png";
	saveSelfy(data);
	//document.location.href = data;
	//alert(data);
   // Draws current image from the video element into the canvas
   
   //img = ctx.drawImage(video, 0,0, canvas.width/6, canvas.height);
   
   //document.body.appendChild(data);
  
}

function saveSelfy() {

	var link = document.createElement('a');
    link.download = "selfy.png";
    link.href = data;
	link.click();
}


 
 