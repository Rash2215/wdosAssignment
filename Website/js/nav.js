// $("#includedNav").html(
//   "<div id='sideNav'>" +
//     "<nav>" +
//     "<ul>" +
//     "<li><a href='index.html'>HOME</a></li>" +
//     "<li><a href='Types.html'>TYPES OF TEA</a></li>" +
//     "<li><a href='Manufacturer.html'>SRI LANKAN TEA MANUFACTURES</a></li>" +
//     "<li><a href='purchase.html'>BUY NOW</a></li>" +
//     "<li><a href='contact.html'>CONTACT US</a></li>" +
//     "</ul>" +
//     "</nav>" +
//     "</div>" +
//     "<div id='menuBtn'>" +
//     "<img src='image/menu.png' id='menu' />" +
//     "</div>"
// );

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "image/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "image/menu.png";
  }
};
