var fruit = document.getElementById('txtFruit');
var showFruit = document.getElementById('btnShowFruit');
var imgFruit = document.getElementById('imgFruit');
showFruit.addEventListener('click', showResult);
function showResult(){
    var getFruit = fruit.value;
    imgFruit.setAttribute('src', 'images/'+getFruit+'.jpg')
}
//jquery 
// $(document).ready(function(){
//     $("#btnShowFruit").click(function(){
//         let getFruit = fruit.value;
//         imgFruit.setAttribute('src', 'images/'+getFruit+'.jpeg')
//     })
// })