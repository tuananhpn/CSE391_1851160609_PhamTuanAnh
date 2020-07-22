$(document).ready(function(){
    $('.square-click').on("click",function(){
        $(this).css({'width':'50px','height':"50px"});
    })
      $('.rectangle-click').on('click',function(){
          $(this).css("margin-bottom","10px");
      })
        $(".circle-click").on('click', function(){
          $(this).css("background-color","#16A085");
      })
  })