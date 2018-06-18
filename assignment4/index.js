
function upload(){
    var imgsrc = prompt("enter image path");
    var autname = prompt("enter auther name");
    var caption  =  prompt("enter your caption");
    var bg = prompt("enter your background image");
    var card= $("#mycard1").clone();
    card.attr("id","newcard");
    card.appendTo("#mycardrow");
    $("#newcard #myimage").attr("src",imgsrc);
    $("#newcard #mybgimage").css("background-image",'url('+bg+')');
    $("#newcard #myimage").attr("alt",'Pic by  '+ autname);
    $("#newcard #myname").text(autname);
    $("#newcard #mycaption").text(caption);
    
    //$("#mycard1").remove();

}

function doit_onkeypress(event){
    var captionvar;
    if (event.keyCode == 13 || event.which == 13){
        captionvar = $("#mysearch").val();
        
    }
    console.log(captionvar);
}