
function getByClass(classname,parent){
	var oParent = parent?document.getElementById(parent):document;
	eles = [];
	var elements = oParent.getElementsByTagName("*");
	// var ele[] = document.getElementsByTagName("*");
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==classname){
			eles.push(elements[i]);
		}
	}
	// alert(eles);
	return eles;
}
function stopPropagation(event){
	if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
}
window.onload = drag;
function drag(){
	var oTitle = getByClass("login_logo_webqq","loginPanel")[0];
	// alert(oTitle.parentNode);
	//拖拽
	oTitle.onmousedown = fnDown;
	//关闭
	var hiddenbtn = document.getElementById("ui_boxyClose");

	hiddenbtn.onclick = function(){
		document.getElementById("loginPanel").style.display = "none";
	}
	//切换状态
	var loginState = document.getElementById("loginState");
	var loginStatePanel = document.getElementById("loginStatePanel");
	var lis = getByClass("statePanel_li","loginStatePanel");
	var is = document.getElementById("loginStateShow");
	var st = document.getElementById("login2qq_state_txt");
	// var nodeArr[];
	loginState.onclick = function(event){
		event = event||widow.event;
		stopPropagation(event);
		loginStatePanel.style.display = "block";

		for(var i=0;i<lis.length;i++){
			// alert(lis[i].nodeName);
			lis[i].onmousemove = function(){
				this.style.background="#567";
			}

			lis[i].onmouseout = function(){
				// event = event||widow.event;
				this.style.backgroundColor="#fff";
			}
			lis[i].onclick = function(e){
				e = e||window.event
				stopPropagation(e);
				var id = this.id;
				var str;
				var newNo = new Array;
				st.innerHTML = getByClass("stateSelect_text",id)[0].innerHTML;
				nodeArr = this.childNodes;
				for(var j=0;j<nodeArr.length;j++){
					if(nodeArr[j].nodeType==1){
						newNo.push(nodeArr[j]);
					}
				}
				
				str = newNo[0].className.slice(17);
				// alert(str);
				is.className = "";
				is.className = "login-state-show "+str;

				// alert(is.className);
				loginStatePanel.style.display="none";

			}
		// 	lis[i].onmouseout = function(){
		// 		lis[i].backgroundColor="#fff";
		// 	}
		}
	}

}
function fnDown(event){
	event = event || window.event;
  	var oDrag=document.getElementById('loginPanel'),
    // 光标按下时光标和面板之间的距离
    disX=event.clientX-oDrag.offsetLeft,
    disY=event.clientY-oDrag.offsetTop;
 	// 移动
  	document.onmousemove=function(event){
	  	event = event || window.event;
	  	fnMove(event,disX,disY);
  	}
  	// 释放鼠标
  	document.onmouseup=function(){
	  	document.onmousemove=null;
	  	document.onmouseup=null;



	// 	// event = event||window.event;
	// 	var oDrag = document.getElementById("loginPanel");
	// 	var t,l;
	// 	disY = event.clientY-oDrag.offsetTop;
	// 	disX = event.clientX-oDrag.offsetLeft;
	// 	// alert(1);
		
	// document.onmousemove = function(event){fnMove(event,disX,disY);}
	// document.onmouseup = function(){
	// 	document.onmousemove = null;
	// 	document.onmouseup = null;
	}
}
// function fnMove(e,posx,posy){
// 	var oDrag = document.getElementById("loginPanel");
// 	var l = e.clientX-posx,
// 		t = e.clientY-posy,
// 		winW = document.documentElement.clientWidth||document.body.clientWidth,
// 		winH = document.documentElement.clientHeight||document.body.clientHeight,
// 		maxW = winW-oDrag.offsetWidth,
// 		maxH = winH - oDrag.offsetHeight;
// 		if(l<0){
// 			l=0;
// 		}else if(l>maxW){
// 			l=maxW;
// 		}
// 		if(t<0){
// 			t=0;
// 		}else if(t>maxH){
// 			t=maxH;
// 		}
// 		oDrag.style.left = l+"px";
// 		oDrag.style.top = t+"px";
	
	
// }
function fnMove(e,posX,posY){
  var oDrag=document.getElementById('loginPanel'),
      l=e.clientX-posX,
      t=e.clientY-posY,
      winW=document.documentElement.clientWidth || document.body.clientWidth,
      winH=document.documentElement.clientHeight || document.body.clientHeight,
      maxW=winW-oDrag.offsetWidth-10,
      maxH=winH-oDrag.offsetHeight;
  if(l<0){
    l=0;
  }else if(l>maxW){
    l=maxW;
  }
  if(t<0){
    t=10;
  }else if(t>maxH){
    t=maxH;
  }
  oDrag.style.left=l+'px';
  oDrag.style.top=t+'px';
}



