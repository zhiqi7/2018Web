// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return (arr instanceof Array);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return (fn instanceof Function);
}


// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
	//判断是否是函数或正则对象
	var clone;
	// if(src instanceof function || src instanceof RegExp){
	// 	alert("you can't input a function or a regexp");
	// 	return false;}
	if(typeof src ==="number" || typeof src==="string" || typeof src==="boolean"){//是否是数字布尔字符串
		clone = src;
		// return clone;
	}else if(isArray(src)){//如果是数组
		for(var i=0;i<src.length;i++){
			clone = [];
			clone[i]=cloneObject(src[i]);
		}
		// return clone;
	}else if(src instanceof Date){//如果是日期类型
		clone = new Date(src);
		// clone = src;
	}
	else if(typeof src ==="object" && src!==null){//如果是
		clone = {};
		for(var prop in src){
			clone[prop]=cloneObject(src[prop]);
		}
		// return clone;
	}
	// else{
	
	// 	// alert("the type is not correct");
	// 		// return false;
	// }
	return clone;
}





// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"
// alert(isArray(arra));
// alert(isFunction(isArray));
var date1 = new Date("13-12-2009");
alert(date1 instanceof Date);
