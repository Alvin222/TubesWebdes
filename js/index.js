const img = ["images/drummer.jpg","images/guitarist.jpg","images/pianist.jpg","images/singer.jpg"];
var media = window.matchMedia("(max-width: 700px)");
var content = document.querySelector(".content");

if (media.matches){
    index = 0;
	content.innerHTML += "<img class='featured_image' src='" + img[index] + "' width='291' height='700'/>" ;
	setInterval(function(){
		if (index > img.length-1) index = 0;
		document.querySelector(".featured_image").src = img[index]
		index++;
	},2000)
} else {
	for (var i=0; i < img.length; i++){
		content.innerHTML += "<img class='featured_image' src='" + img[i] + "' width='291' height='700'/>";
	}
}
