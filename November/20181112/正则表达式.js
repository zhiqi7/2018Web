// var text = "mom and dad and baby";
// var pattern = /mom( and dad( and baby)?)?/gi;
// var matchs = pattern.exec(text);
// // alert(matchs);
// alert(matchs.index);
// alert(matchs.input);
// alert(matchs[0]);
// alert(matchs[1]);
// alert(matchs[2]);
// console.log(matchs);
// var text = "cat,pat,bat,fat"
// var patterns = /.at/g;
// var matchs = patterns.exec(text);
// alert(matchs.index);
// alert(matchs[0]);
// alert(patterns.lastIndex);
// matchs = patterns.exec(text);
// alert(matchs.index);
// alert(matchs[0]);
// alert(patterns.lastIndex);
// console.log(matchs);
//上面的正则表达式还是不太明白
//函数的操作
// function createComparisonFunction(properyName){
// 	return function(obj1,obj2){
// 		var value1 = obj1[properyName];
// 		var value2 = obj2[properyName];
// 		if(value1<value2){return -1;}
// 		else if(value1>value2){return 1;}
// 		else{return 0;}
// 	}
// }
// var data = [{name:"ZhangSan",age:24},{name:"Lisi",age:34}];
// data.sort(createComparisonFunction("name"));
// alert(data[0].name);
// data.sort(createComparisonFunction("age"));
// alert(data[0].name);

