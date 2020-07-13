function TinhTong(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var tong = Number(a.value)+ Number(b.value);
    var kq = document.getElementById("kq");
    kq.value = tong;
}