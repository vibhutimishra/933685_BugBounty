// when a task is clicked when its done

$("ul").on("click","li",function(){
  $(this).toggleClass("taskDone");
});

// when X is clicked to delete the entry from the list
$("ul").on("click",".fa-trash-alt",function(event){
    $(this).parent().parent().fadeOut(500,function(){
        $(this).remove();
    });
   
});

// when add button is clicked
$(".fa-minus").click(function(){
    $("input").hide();
    $(".fa-minus").hide();
    $(".fa-plus").show();
    
});

$(".fa-plus").click(function(){
    $("input").show();
    $(".fa-minus").show();
    $(".fa-plus").hide();
});


$("input[type='text']").keypress(function(event){
    if(event.which===13)
    {
        $(".to_do").append("<li ><span><i class='fa fa-trash-alt'></i></span> " + $(this).val() + "<span style='float:right'><i class='fa fa-heart'></i></span></li>");
        $(this).val("");
    }
});

$("ul").on("click",".fa-heart",function(event){
    
    var v=$(this).parent().parent().text();
        $(".fav-list").append("<li><span><i class='fa fa-trash-alt'></i></span> " + v+ "</li>");
    
    event.stopPropagation();
});