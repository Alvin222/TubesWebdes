//Javascript For History
$(document).ready(function(){

	$(".BannerText1, BannerText2").hide();
	$(".box10").hide();
	$(".BannerText1").show(2000);
	$(".BannerText2").show(2000);
	setTimeout(function(){
		$(".box10").slideDown(2000);
		}, 2000);



});
//Javascript For OurTeam

$(document).ready(function(){
	$(".cek1, .cek2, .cek3, .cek4").hide();

	$("#kartu1").dblclick(function(){
	$("#kartu2, #kartu3, #kartu4").hide(1000);
	$(".expand").hide(1000);
	setTimeout(function(){
		$(".cek1").show(1000);
		}, 1500);

	});
	$("#kartu1").click(function(){
		$("#kartu2, #kartu3, #kartu4").show(1000);
		$(".cek1").hide();
		$(".expand").show(1000);
	});
	$("#kartu2").dblclick(function(){
		$("#kartu1, #kartu3, #kartu4").hide(1000);
		$(".expand").hide(1000);
		setTimeout(function(){
			$(".cek2").show(1000);
			}, 1500);
	});
	$("#kartu2").click(function(){
		$("#kartu1, #kartu3, #kartu4").show(1000);
		$(".cek2").hide();
		$(".expand").show(1000);
	});
	$("#kartu3").dblclick(function(){
		$("#kartu2, #kartu1, #kartu4").hide(1000);
		$(".expand").hide(1000);
		setTimeout(function(){
			$(".cek3").show(1000);
			}, 1500);
	});
	$("#kartu3").click(function(){
		$("#kartu2, #kartu1, #kartu4" ).show(1000);
		$(".cek3").hide();
		$(".expand").show(1000);
	});
	$("#kartu4").dblclick(function(){
		$("#kartu2, #kartu3, #kartu1").hide(1000);
		$(".expand").hide(1000);
		setTimeout(function(){
			$(".cek4").show(1000);
		}, 1500);
	});
	$("#kartu4").click(function(){
		$("#kartu2, #kartu3, #kartu1").show(1000);
		$(".cek4").hide();
		$(".expand").show(1000);
	});

});









			

		