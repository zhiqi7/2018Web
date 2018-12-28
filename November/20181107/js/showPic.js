//窗口加载函数
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!="function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

//在当前元素之后插入元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//占位符函数
function preparePlaceholder(){
	
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
		// alert(0);
	if(!document.getElementById) return false;
		// alert(1);
	if(!document.getElementById("imagegally")) return false;
		// alert(0);
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gally");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var destext = document.createTextNode("choose an image");
	description.appendChild(destext);
	var gally = document.getElementById("imagegally");

	insertAfter(placeholder,gally);
	insertAfter(description,placeholder);

}

//获取a标签节点的元素
function prepareGally(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegally")) return false;
	var gallery = document.getElementById("imagegally");
	var links = gallery.getElementsByTagName("a"); 
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
}

//替换图片函数
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	}else{
		var text = "";
	}
	var description = document.getElementById("description");
	if(description.firstChild.nodeType==3){
		description.firstChild.nodeValue=text;
	}
	return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGally);