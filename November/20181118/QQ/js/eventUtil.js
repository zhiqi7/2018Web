//事件的添加和移除
var EventUtil = {
	//添加
	//完善，跨浏览器解决
	//获取时间对象
	getEvent:function(event){
		return event?event:window.event;
	},
	//获取事件的目标对象
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	//获取相关元素
	getRelatedTarget:function(event){
		if(event.relatedTarget){
			return event.relatedTarget;
		}else if(event.toElement){
			return event.toElement;
		}else if(event.fromElement){
			return event.fromElement;
		}else{
			return null;
		}
	},
	//获取鼠标按钮事件（DOM和IE8之前的浏览器版本）
	getButton:function(event){
		if(document.implementation.hasFeature("MouseEvents","2.0")){
			return event.button;
		}else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;

				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	//获取鼠标滚轮事件wheelDelta
	getWheelDelta:function(event){
		if(event.wheelDelta){
			return (client.engine.opera && client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
		}else{
			return -event.detail*40;
		}
	},
	//获取键盘的charcode值
	getCharCode:function(evnt){
		if(typeof event.charCode=="number"){
			return event.charCode;
		}else{
			return event.keyCode;
		}
	},


	//取消时间得默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			element.returnValue=false;
		}
	},
	//阻止冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			element.stopPropagation();
		}else{
			element.cancelBubble=true;
		}
	},

	addHandler:function(element,type,handler){
		//实现对0级DOM。2级DOM以及HTML 事件的处理
		//判断2级DOM
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);

		}else{
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);

		}else{
			element["on"+type]=null;
		}
	}

};
var div = document.getElementById("myDiv");
// var handler = function(){
// 	alert("onmouseout");
// }
// alert(1);
// var flags=["mouseout","mouseover"];
// EventUtil.addHandler(div,"mouseout",function(event){

// 		event = EventUtil.getEvent(event);
// 		var target = EventUtil.getTarget(event);
// 		var relatedTarget = EventUtil.getRelatedTarget(event);
// 		alert("mouse out of from"+target.tagName+"to"+relatedTarget.tagName);
	
		
	
// });
// EventUtil.addHandler(div,"mouseover",function(event){
// 		event = EventUtil.getEvent(event);
// 		var target = EventUtil.getTarget(event);
// 		var relatedTarget = EventUtil.getRelatedTarget(event);
// 		alert("mouse enter into "+target.tagName+"from"+relatedTarget.tagName);
	
	
// });
// EventUtil.addHandler(document,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "mousewheel",function(event){
// 	event = EventUtil.getEvent(event);
// 	alert(event.wheelDelta);
// });
EventUtil.addHandler(window,"load",function(event){

	var myDiv = document.getElementById("myDiv");
	var myMenu = document.getElementById("myMenu");
	EventUtil.addHandler(myDiv,"contextmenu",function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		myMenu.style.left=event.clientX+"px";
		myMenu.style.top=event.clientY+"px";
		myMenu.style.visibility="visible";

	});
	EventUtil.addHandler(myDiv,"click",function(event){
		myMenu.style.visibility="hidden";
	});
});