$(document).ready(function(){
    $("#sltScaleTime").change(function(){
        var scaleNum = $(this).val();
        $("#display").html(" ");
        for (let i=0; i < scaleNum; i++){
            $("#display").append('<div class="square"></div>')
        }
    })
})