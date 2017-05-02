var index=0;

function carousel_before(){
	if(index<=0){
		index=2;
	}else{
		index--;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
}

function carousel_before(){
	if(index>=2){
		index=0;
	}else{
		index++;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
}

function carousel_li(icon_index){
	index=icon_index;
	document.getElementById("carousel_img").src="img/banner"+(index)+".jpg";
}
