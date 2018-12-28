function getNewContent(){
	var request = getHttpObjects();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange=function(){
			if(request.radyState==4){
				var para = document.createElement("p");
				var text = document.createTextNode(request.responseText);
				para.appendChild("text");
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert("sorry,your browser dosen\'t support XMLHttpRequest");
	}
}
addLoadEvent(getNewContent);