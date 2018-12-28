var data = ["iphone xr","iphone8","ipad","ipad watch","平衡车","ipod","ipenceil"];
var play = document.getElementById("start");
var stop = document.getElementById("stop");
var title = document.getElementById("title");
var clt=null;
var flag=0;
window.onload = function(){
	//鼠标事件
	play.onclick = playFun;
	stop.onclick = stopFun;
	// 键盘事件
   // document.onkeyup=function(event){
   //    event = event || window.event;
   //    if(event.keyCode==13){
   //       if(flag==0){
   //         playFun();
   //         flag=1;
   //       }else{
   //         stopFun();
   //         flag=0;
   //       }
   //    }
   // }
	function playFun(){
	
	clearInterval(clt);
			clt = setInterval(function(){

			title.innerHTML =  data[Math.floor(Math.random()*data.length)];
			play.style.background="#999";
		// console.log();
		},50);
	}
	function stopFun(){
		clearInterval(clt);
		play.style.background="#036";
	}
	
document.onkeydown = function(event){
	// var flag=0;
	event = event||window.event;
	if(event.keyCode==13){
		if(flag==0){
			flag=1;
			playFun();
			
		}else{
			flag=0;

			stopFun();
			
		}
	}
}

}
