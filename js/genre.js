$(document).ready(function(){
    $("#second-content").hide();
    $("#third-content").hide();
    $("#button").hide();

    $(".genre-Indonesia").click(listIndonesia);
    $(".genre-Barat").click(listBarat);

    function listIndonesia(){
        if($("#first-content").is(':visible')){
            $("#first-content").slideUp(function(){
                $("#second-content").slideDown(function(){
                    $("#button").show();
                });
                listHover();
            });
        } else if ($("#third-content").is(':visible')){
            $("#third-content").slideUp(function(){
                $("#second-content").slideDown(function(){
                    $("#button").show();
                });
                listHover();
            });
        }

        $("#switch").text("Genre Barat");
        $("#switch").click(listBarat);
    };    

    function listBarat(){
        if($("#first-content").is(':visible')){
            $("#first-content").slideUp(function(){
                $("#third-content").slideDown(function(){
                    $("#button").show();
                });
                listHover();
            });
        } else if($("#second-content").is(':visible')){
            $("#second-content").slideUp(function(){
                $("#third-content").slideDown(function(){
                    $("#button").show();
                });
                listHover();
            });
        }        

        $("#switch").text("Genre Indonesia");
        $("#switch").click(listIndonesia);
    };

    $('.preview').mouseover(function(){
        var i = $('.preview').index(this);
        $(this).css("background-color", "white");
        $(this).css("border-color", "transparent #93f01a white");
        $('.triangle:eq('+i+')').css("border-color", "transparent transparent transparent #93f01a");
    })

    $('.preview').mouseout(function(){
        var i = $('.preview').index(this);
        $(this).css("background-color", "transparent");
        $(this).css("border-color", "white");
        $('.triangle:eq('+i+')').css("border-color", "transparent transparent transparent #fff");
    })
});

var audioIsPlaying = false;
var previewStatus = [false, false, false, false, false, false, false, false, false, false];
var j;
var audio = document.getElementsByTagName('audio');

//Function untuk hover list lagu
function listHover(){
    $('.list').mouseover(function(){
        $(this).css("background-image", "linear-gradient(to right,#93f01a, #1ab126)");
    });

    $('.list').mouseout(function(){
        $(this).css("background-image", "linear-gradient(to right,#f08915, #d83d45");
    });
}

//Switch on-off hover mouse
function allowListHover(i){
    $('.list:eq('+i+')').on('mouseover mouseout');
}
function dontAllowListHover(i){
    $('.list:eq('+i+')').off('mouseover mouseout');
}

//Preview Audio
function audioPreview(i){
    listHover();
    if(audioIsPlaying && previewStatus[i]){
        audioStop(i);
    } else if(audioIsPlaying && !previewStatus[i]){
        audioStop(j);
        audioPlay(i);
        j = i;
        audio[i].onended = function(){
            listHover();
            audioIsPlaying = false;
            allowListHover(i);
            audio[i].pause();
            audio[i].currentTime = 0;
            $('.list:eq('+i+')').css("background-image", "linear-gradient(to right,#f08915, #d83d45");
            previewStatus[i] = false;
        }
    } else {
        audioPlay(i);
        j = i;
        audio[i].onended = function(){
            listHover();
            audioIsPlaying = false;
            allowListHover(i);
            audio[i].pause();
            audio[i].currentTime = 0;
            $('.list:eq('+i+')').css("background-image", "linear-gradient(to right,#f08915, #d83d45");
            previewStatus[i] = false;
        }
    }
}

function audioPlay(i){
    audioIsPlaying = true;
    dontAllowListHover(i);
    audio[i].play();
    previewStatus[i] = true;
    $('.list:eq('+i+')').css("background-image", "linear-gradient(to right, #15abf0, #d110d1)");
}

function audioStop(i){
    audioIsPlaying = false;
    allowListHover(i);
    audio[i].pause();
    audio[i].currentTime = 0;
    $('.list:eq('+i+')').css("background-image", "linear-gradient(to right,#f08915, #d83d45");
    previewStatus[i] = false;
}