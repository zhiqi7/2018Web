// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    listener(event);
}

// 例如：
function clicklistener(event) {
    event.onclick = function(){
    	return 1;
    }
}
// alert(addEvent($("#id1"), "click", clicklistener));
