//找到占位图片并且修改他的src值，
function showPic(whichpic){
	
	//检查ID为ph的元素是否存在
	if(!document.getElementById("ph")) return false;
	//获取ID为ph的元素
	var ph=document.getElementById("ph");
	//获取whichpic的href属性值
	var source=whichpic.getAttribute("href");
	//设置属性
	ph.setAttribute("src",source);
	alert("showPic"+2);
	//判断id为desc的存在并让它不要影响页面的可读性
	if(document.getElementById("description")){
		var desc=document.getElementsById("description");
		var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		if(desc.firstChild.nodeType==3){

		desc.firstChild.nodeValue=text;
		}

	}
	return false;
}
//onclick 事件处理函数
function prepareGallery(){
	alert("prepareGallery"+1);
	//1.检查当前浏览器是否支持javascript;
	if(!document.getElementsByTagName||!document.getElementById) return false;
	//检查ID为imageGallery是否存在
	if(!document.getElementById("imagegally")) return false;
	//得到无序列表集合
	var gallery=document.getElementById("imagegally");
	//得到a标签的元素节点数组
	links=gallery.getElementsByTagName("a");
	//遍历数组
	for(var i=0;i<links.length;i++){
		//触发事件并绑定动作
		links[i].onclick=function(){
			alert("调用showpic前");
			showPic(this);
			// return false;
		}
	}

	
}
//确保页面加载完成后才执行JavaScript脚本
//使用window.onload事件绑定方法
//创建一个方法共享onload事件addLoadEvent
function addLoadEvent(func){
	alert("addLoadEvent"+1);
	var oldonload = window.onload;
		//判断当前是否是在加载函数,若不是的话，直接加载函数
	if(typeof window.onload!='function'){
		
		window.onload=func;
	}else{//若是的话加入排队
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);
// alert(1);
// window.onload=prepareGallery;