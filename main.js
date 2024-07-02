
var c = 0
var video = document.getElementById("video")
$(".button").on("click",function(){
    $(".bg").addClass("bg2")
    if(c == 0){
        $("#video").delay(500).fadeIn(500)
    }else{
        $("#video2").delay(500).fadeIn(500)
    }
    $(".button").fadeOut(100)
    if(c == 0){
        $("#video").get(0).play()
    }else{
        $("#video2").get(0).play()
    }
    $(".white").delay(4000).fadeIn(100)
    $(".white").delay(100).fadeOut(1000)
    if(c == 0){
        $("#video").delay(3500).fadeOut(200)
    }else{
        $("#video2").delay(3500).fadeOut(200)
    }
    $(".black").delay(4200).fadeIn(500)
    $(".re").fadeIn(500)
    $(".re").delay(4500).animate({
        top: "150px"
    },{duration: 500, easing: "linear" });
    if(c == 2){
        $(".re").css("background-image" , "url(img/qixi/result/CP/"+ random() +".png)")
    }else if(c == 1){
        $(".re").css("background-image" , "url(img/qixi/result/s/"+ random() +".png)")
    }else if(c == 0){
        $(".re").css("background-image" , "url(img/result/"+ random() +".png)")
    }
    
})

$(".black").on("click",function(){
    $(".re").fadeOut(500)
    $(".bg").removeClass("bg2")
    $(".re").css("top","-700px")
    $(".black").fadeOut(500)
    $(".button").fadeIn(200)
})


$(".qixibtn").on("click",function(){
    if(c == 1){
        c = 2;
        $(".bg").css("background-image" , "url(img/qixi/bg/CP.png)")
    }else if(c == 0){
        c = 1;
        $(".star").show()
        $(".skylight").show()
        $(".qixi-bg2").show()
        $(".bg").css("background-image" , "url(img/qixi/bg/bg.png)")
        $(".ringL1").css("background-image" , "url(img/qixi/bg/L1.png)")
        $(".ringL2").css("background-image" , "url(img/qixi/bg/L2.png)")
        $(".ringL3").css("background-image" , "url(img/qixi/bg/L3.png)")
        $(".ringL4").css("background-image" , "url(img/qixi/bg/L4.png)")
        $(".ringR1").css("background-image" , "url(img/qixi/bg/R1.png)")
        $(".ringR2").css("background-image" , "url(img/qixi/bg/R2.png)")
        $(".ringR3").css("background-image" , "url(img/qixi/bg/R3.png)")
        $(".ringR4").css("background-image" , "url(img/qixi/bg/R4.png)")
        $(".cloudL").css("background-image" , "url(img/qixi/bg/cloudL.png)")
        $(".cloudR").css("background-image" , "url(img/qixi/bg/cloudR.png)")
        $(".cloudBig").css("opacity" , "0.2")
        $(".white").css("background-color" , "#0D3542")
    }else if(c == 2){
        location.reload();
    }
})

function random(){
    return Math.floor(Math.random() * 15);
}