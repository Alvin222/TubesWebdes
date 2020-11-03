const img = ["images/drummer.jpg","images/guitarist.jpg","images/pianist.jpg","images/singer.jpg"];
var media = window.matchMedia("(max-width: 700px)");
var content = document.querySelector(".content");

/*Multiple picture content*/
/*Buat media hp cuman belom responsive, harus di reload*/
if (media.matches){
    index = 0;
	content.innerHTML += "<img class='index_image' src='" + img[index] + "' width='291' height='700'/>" ;
	setInterval(function(){
		if (index > img.length-1) index = 0;
		document.querySelector(".index_image").src = img[index];
		index++;
	},2000)
/*Buat media laptop, cuman belom responsive, harus di reload*/
} else {
	for (var i=0; i < img.length; i++){
		content.innerHTML += "<img class='index_image' src='" + img[i] + "' width='" + (content.clientWidth/4-((1.1/100) * content.clientWidth )) + "' height='"+((content.clientWidth/4-((1.1/100) * content.clientWidth ))*2)+"'/>";
	}
}