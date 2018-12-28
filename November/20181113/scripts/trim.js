 //实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
	var result = [];
	var j = str.length-1;
	var i=0;
	var start;
	var end;
	// if(str[0]==" " || str[j]==" "){
		if(str[0]==" " ){
			for(i;i<str.length;i++){
				if(str[i]==" " && str[i+1]!=" "){
					start = i+1;
					break;
				}
			}
		}else{
			start = 0;
		}
		if(str[j]==" "){

			for(j;j>start;j--){
				if(str[j]==" " && str[j-1]!=" "){
					end = j;
					break;
				}
			}
		}
		else{
			end = str.length-1;
		}
	
	
	
		// for(j;j>start;j--){
	// 	if(str[j]===" "&& str[j-1]!==" "){
	// 		end = j;
	// 		break;
	// 	}
	// }
	// result = str.slice(start,end);
	alert(end);
	alert(start);
	result = str.slice(start,end);
	return result;
}
// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    var reg = /^\s+|\s+$/g;
    var result = str.replace(reg,"");
    return result;
}

var str = "                   ab c d    ";
console.log(trim(str));
// console.log(simpleTrim(str));
// alert(111);