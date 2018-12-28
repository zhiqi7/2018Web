// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var i = 0;
	for(var prop in obj){
		i++;
	}
	return i;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    },
    d:["a","b","c"]
};
console.log(getObjectLength(obj)); // 3