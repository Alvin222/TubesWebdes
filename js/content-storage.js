var index = sessionStorage.getItem("song");

// Store Content Value
var title = [ "Cantik", "Tolong", "Sedang Sayang-sayangnya", "Cinta Karena Cinta", "Payung Teduh", "Fix You",
    "For The Night", "You Look So Good In Love", "Just The Way You Are", "Heaven" ];
var singer = [ "Eclat Story", "Reza Darmawangsa", "Della Firdatia", "Michela Thea", "Falah Akbar", "J.Fla",
    "Conor Maynard", "Teddy Swims", "Music Travel Love", "Boyce Avenue" ];
var duration = [ "04:20", "03:55", "04:28", "02:59", "02:54", "03:21", "03:22", "03:12", "04:08", "04:32" ];
var original = [ "Kahitna", "Budi Doremi", "Mawar de Jongh", "Judika", "Akad", "Coldplay", "Conor Maynard",
    "George Strait", "Bruno Mars", "Bryan Adams"];
var source =
[
    "https://www.youtube.com/embed/eLD6crse074",
    "https://www.youtube.com/embed/8C7mpE35ZyE",
    "https://www.youtube.com/embed/Qruo9UewG6Y",
    "https://www.youtube.com/embed/0t6KrkDjY34",
    "https://www.youtube.com/embed/RnswOPzSQfg",
    "https://www.youtube.com/embed/V6f7d_RkUnc",
    "https://www.youtube.com/embed/vbq74HHsaBA",
    "https://www.youtube.com/embed/E3471Ib4bL8",
    "https://www.youtube.com/embed/RHT8gNLRFtU",
    "https://www.youtube.com/embed/E0wW9RwpG7M"
]
var link =
[
    "https://www.youtube.com/watch?v=MAu23hR2z_k",
    "https://www.youtube.com/watch?v=Yf-dfwYWTOw",
    "https://www.youtube.com/watch?v=PlwqnE5eYX0",
    "https://www.youtube.com/watch?v=FZjk56FfdJY",
    "https://www.youtube.com/watch?v=viW0M5R2BLo",
    "https://www.youtube.com/watch?v=k4V3Mo61fJM",
    "https://www.youtube.com/watch?v=pC2r-0vf7Rw",
    "https://www.youtube.com/watch?v=gX55kDRVkVo",
    "https://www.youtube.com/watch?v=LjhCEhWiKXk",
    "https://www.youtube.com/watch?v=s6TtwR2Dbjg"
]
// ------------------------------------------


$(document).ready(function(){
    document.getElementById("song-title").innerHTML = title[index];
    document.getElementById("singer").innerHTML = singer[index];
    document.getElementById("duration").innerHTML = duration[index];
    document.getElementById("ori").innerHTML = original[index];
    document.getElementById("iframe").src = source[index];
    document.getElementById("original-link").innerHTML = link[index];
    document.getElementById("link").href = link[index];
});