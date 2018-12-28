function trim(str){
	var rex = /^\s+|\s+$/g;
	return str.replace(rex,"");
}
// 实现一个简单的Query
function $(selector) {
	selector  = trim(selector);
    var selhead = selector[0];
    switch(selhead){
    	case "#":
    	// var rex = /^#\S+\.\S+$/g;
    	// if(selector.match(rex)){
    		
    	// }

	    	var pos = selector.indexOf(".");
	    	if(pos===-1){//只是ID选择器
	    		return document.getElementById(selector.slice(1));
	    	}else{//ID选择器加上类选择器
	    		// alert("#+.");
	    		// alert(pos);
	    		var idstr = trim(selector.slice(1,pos));
	    		console.log(idstr);
	    		var classstr = trim(selector.slice(pos+1));
	    		console.log(classstr);
	    		var ele = document.getElementById(idstr);
	    		
	    		return ele.getElementsByClassName(classstr)[0];

	    	}
	    	break;
	    case ".":
	    	return document.getElementsByClassName(trim(selector.slice(1)))[0];
	    	break;
	    case "[":
	    	var flag = selector.indexOf("=");
	    	var attrstr;
	    	var eles = document.getElementsByTagName("*");
	    	if(flag===-1){//返回第一个包含属性data-log的对象
	    		 attrstr = trim(selector.slice(1,selector.length-1));
	    		for(var i=0;i<eles.length;i++){
	    			if(eles[i].attributes[attrstr]){
	    				return eles[i];
	    			}
	    		}
	    	}else{// 返回第一个包含属性data-time且值为2015的对象
	    		attrstr = trim(selector.slice(1,flag));
	    		valstr = trim(selector.slice(flag+1));
	    		for(var i=0;i<eles.length;i++){
	    			if(eles[i].attributes[attrstr]===valstr){
	    				return eles[i];
	    			}
	    		}
	    	}
	    	break;
	    default:
	    	if(/\w+/.test(selector)){
	    		return document.getElementsByTagName(selector)[0];
	    	}else{
	    		return null;
	    	}
	    	
    }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    
}

// 例如：
function clicklistener(event) {
    event.onclick = function(){
    	return 1;
    }
}
alert(addEvent($("#id1"), "click", A));


// 可以通过id获取DOM对象，通过#标示，例如
//$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
//$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
//$(".classa"); // 返回第一个样式定义包含classa的对象

//$("[data-log]"); // 返回第一个包含属性data-log的对象

//$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
//$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
// alert($("p"));