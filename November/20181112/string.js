var str = "hello world";//length为11
console.log(str.slice(1,3));//el
console.log(str.substr(1,3));//ell
console.log(str.substring(1,3));//el
console.log(str.slice(-2,-1));//l
console.log(str.substr(-2,-1));//空
console.log(str.substring(-2,-1));//空
console.log(str.slice(-2));//ld
console.log(str.substr(-2));//ld
console.log(str.substring(-2));//hello world
console.log(str.lastIndexOf("o",6));//7
var text="cat,bat,sat,fat";
// alert(text.search("bat"));
// var result = text.replace(/at/g,"ond");
// alert(result);
var result = text.replace(/(.at)/g,"word ($1)");
alert(result);
function htmlEscape(text){
	return text.replace(/[<>"&]/g,function(match,pos,orignalText){
		switch(match){
			case "<":
			return "&alt";
			// break;
			case ">":
			return "&gt";
			// break;
			case "&":
			return "&amp";
			case "\"":
			return "&quot"
		}
	});
}
alert(htmlEscape("<p class=\"greeting\">Hello World!</p>"));

var colors="red,blue,green,yellow";
var colors1=colors.split(",");
var colors2=colors.split(",",2);
var colors3=colors.split(/[^\,]+/);
console.log(colors1);
console.log(colors2);
console.log(colors3);
var str1 = "abc";
var str2 = "aac";
var result = str1.localeCompare(str2);
console.log(result);