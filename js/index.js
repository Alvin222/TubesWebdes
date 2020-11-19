ids = ["#welcome","#kalimat1","#kalimat2","#kalimat3"]
index = 0
for(var id of ids){
	$(id).hide();
}
$(document).ready(()=>{
	$(ids[index]).slideDown(2000);
	$("#next").click(()=>{
		index = index < ids.length ? index:-1; 
		$(ids[index]).hide();
		$(ids[index+1]).fadeIn(2000)
		index++;
	});
	$("#prev").click(()=>{
		index = index > -1 ? index:ids.length-1;
		$(ids[index]).hide();
		$(ids[index-1]).fadeIn(2000)
		index--;
	});
});