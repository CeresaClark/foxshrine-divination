var video = document.getElementById("video")
$(".button").on("click",function(){
    $("#video").fadeIn(500)
    $(".button").fadeOut(100)
    video.play()
    $(".white").delay(4000).fadeIn(100)
    $(".white").delay(200).fadeOut(1000)
    $("#video").delay(4100).fadeOut(200)
    $(".black").delay(4500).fadeIn(500)
    $(".re").fadeIn(500)
    $(".re").delay(4500).animate({
        top: "150px"
    },{duration: 500, easing: "linear" });
    $(".re").css("background-image" , "url(img/result/"+ random() +".png)")
})

$(".black").on("click",function(){
    $(".re").fadeOut(500)
    $(".re").css("top","-700px")
    $(".black").fadeOut(500)
    $(".button").fadeIn(200)
})

function random(){
    return Math.floor(Math.random() * 15);
}