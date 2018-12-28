// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    var clone;
    if (typeof src === "number" || typeof src === "string" || typeof src === "boolean") {
        clone = src;
    }
    else if (src instanceof Date) {
        clone = new Date(src);
    }
    else if (isArray(src)) {
        clone = [];
        for (var i = 0; i < src.length; ++i) {
            clone[i] = cloneObject(src[i]);
        }
    }
    else if (typeof src === "object" && src !== null){
        clone = {};
        for (var prop in src) {
            clone[prop] = cloneObject(src[prop]);
        }
    }
    return clone;
}

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    // return Object.prototype.toString.call(arr) === "[object Array]";
    return arr instanceof Array;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // 首先对数组进行排序
    if (arr.length === 0) return arr;

    var ret;
    if (typeof arr[0] === "string") {
        ret = cloneObject(arr);
        ret.sort();
    }
    else if(typeof arr[0] === "number") {
        ret = cloneObject(arr);
        ret.sort(function(a, b){return a - b;});
    }
    else {
        throw new Error("only accept array of number and string!");
    }

    // 进行去重
    var pos = 0;
    for (var j = 0; j < ret.length; ++j) {
        if (j === 0 || ret[j] !== ret[j - 1]) ret[pos++] = ret[j];
    }
    return ret.slice(0, pos);
}
// 使用示例
var a = [1,"b","c","a","b","c",2,3,3,2,1];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]