const img = ["images/drummer.jpg","images/guitarist.jpg","images/pianist.jpg","images/singer.jpg"];
var media = window.matchMedia("(max-width: 700px)");
var content = document.querySelector(".content");
index = 0;

/*Multiple picture content*/
$(document).ready(()=>{
	if ($(window).width() <= 700) {
		content.innerHTML += "<img class='index_image' src='" + img[index] + "' width='291' height='700'/>" ;
	} else {
		content.innerHTML += "<img class='index_image' src='" + img[index] + "' width='" + (1290) + "' height='"+800+"'/>";
	}
	setInterval(()=>{
		if (index > img.length-1) index = 0;
		$(".index_image").fadeOut(600);
		$(".index_image").attr('src',img[index]);
		$(".index_image").fadeIn(1300);
		index++
	},2000);
});