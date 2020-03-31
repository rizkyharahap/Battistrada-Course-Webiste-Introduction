// Pendeklarasian document html yang akan dimanipulasi
var img = document.getElementsByClassName('content-img');
var modal = document.getElementById("Modal");
var modalImg = document.getElementById("modal-img");
var btnClose = document.getElementById("btnClose");

for (let i = 0, length = img.length; i < length; i++) {
    img[i].onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
}

btnClose.onclick = function() { 
    modal.style.display = "none";
  }
