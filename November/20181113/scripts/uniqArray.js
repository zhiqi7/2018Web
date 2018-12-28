// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
	var ret=[];
	var pos = 0;
	arr.sort();
	for(var i=0;i<arr.length;i++){
		if(arr[i]!==arr[i+1]){
			
			ret.push(arr[i]);
		}
	}
	return ret;
    // your implement
    //我需要遍历数组，遍历后的数组需要前后比较，若有相等的则要删掉一个，同时需要一个新数组接收
    //使用slice方法和sort方法，有两个参数，start与end,还有push方法
    // var ret = [];
   //  var ret=[];
   //  if(arr.length===0){
   //  	return arr;
   // }
   // switch(typeof arr[0]){
   // 	case "string":
   // 		// ret = cloneObject(arr);
   // 		newarr=arr.sort();
   // 	case "number":
   // 		// ret = cloneObject(arr);
   // 		newarr=arr.sort(function(v1,v2){return v1-v2;});
   // 	break;
   // }
   //去重
   // var pos=0;//新的数组长度
   // for(var j=0;j<newarr.length;j++){

   // 		if(newarr[j]!==newarr[j+1]){
   // 			// pos++;
   // 			newarr[pos]=newarr[j];
   			
   // 		}
   // }

   // // arr.sort(compare);
   // 	return ret;

    // return newarr;
}
// 使用示例
var a = [1,3,5,7,5,6,7,3,2,1];
var b = uniqArray(a);
console.log(b); 