// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    if(element.className==newClassName){
    	return;
    }else{
    	element.className = element.className +" "+ newClassName;
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    // oldClassName = " ";
    var str = element.className;
    var newstr = str.replace(oldClassName,"");
    element.className = newstr;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return (element.parentNode===siblingNode.parentNode);
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    
    var pos={
        x: element.style.left,
        y: element.style.top,
    };
    return pos;
    // your implement
}
// your implement
var pid = document.getElementById("pid");
var divid = document.getElementById("divid");
var pid1 = document.getElementById("pid1");
// addClass(pid,"new");
// alert(pid.className);
// removeClass(pid,"old");
// alert(pid.className);
// alert(isSiblingNode(pid,divid));
console.log(getPosition(pid));