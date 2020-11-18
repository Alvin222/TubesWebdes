var song = document.getElementsByClassName("song");

$(document).ready(function(){
    $(song[0]).click(function(){
        sessionStorage.setItem("song", 0);
    });
    $(song[1]).click(function(){
        sessionStorage.setItem("song", 1);
    });
    $(song[2]).click(function(){
        sessionStorage.setItem("song", 2);
    });
    $(song[3]).click(function(){
        sessionStorage.setItem("song", 3);
    });
    $(song[4]).click(function(){
        sessionStorage.setItem("song", 4);
    });
    $(song[5]).click(function(){
        sessionStorage.setItem("song", 5);
    });
    $(song[6]).click(function(){
        sessionStorage.setItem("song", 6);
    });
    $(song[7]).click(function(){
        sessionStorage.setItem("song", 7);
    });
    $(song[8]).click(function(){
        sessionStorage.setItem("song", 8);
    });
    $(song[9]).click(function(){
        sessionStorage.setItem("song", 9);
    });
});