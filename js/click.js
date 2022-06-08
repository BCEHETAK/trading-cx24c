var firstIcon = document.querySelector(".fa-displayList");
var absolute = document.querySelector(".menu-right");
var secondIcon = document.querySelector(".fa-chart-lineList");
var modal = document.querySelector(".clicked-block");
var thirdIcon = document.querySelector(".fa-clockList");
var WTMenu = document.querySelector(".clockList-two");
var fourthIcon = document.querySelector(".fa-chart-columnList");
var WTMenu1 = document.querySelector(".block-cart-columns");
var fivethIcon = document.querySelector(".fa-circle-nodesList");
var WTMenu2 = document.querySelector(".fa-circle-nodesList .circles");
var sixthIcon = document.querySelector(".fa-slidersList");
var WTMenu3 = document.querySelector(".fa-slidersList .actives_Chart");
var seventhIcon = document.querySelector(".fa-gearList");
// var WTMenu4 = document.querySelector(".WTMenu4");
var input = document.querySelector(".WTInputField");
const block2 = document.querySelector(".clicked-block2");
// var TPinput = document.querySelector('.WTInputField2asd')
const mainTabAdd = document.querySelector(".main .graph .graph_top .add");
var WTMenu4 = document.querySelector(".clicked-block1");

var Scroller = document.querySelector(".scroller-content-wrapper");
var Type = document.querySelector(".Type");
var clickedBlocks = document.querySelectorAll(".clicked-block .left .cart");
var clickedBlocks1 = document.querySelectorAll(".clicked-block1 .left .cart");
var clickedBlocks2 = document.querySelectorAll(".clicked-block2 .left .cart");

const spanTrueFalse = document.querySelectorAll(
  ".main .menu .menu_list td span"
);

const BuyDive = document.querySelector(".order-window");

mainTabAdd.addEventListener("click", function () {
  if (WTMenu4.classList.contains("active")) {
    WTMenu4.classList.remove("active");
  } else {
    WTMenu4.classList.add("active");
    WTMenu3.classList.remove("active");
    BuyDive.classList.remove("active");
    WTMenu2.classList.remove("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    block2.classList.remove("active");
  }
});

firstIcon.addEventListener("click", function () {
  if (absolute.classList.contains("Active")) {
    absolute.classList.remove("Active");
  } else {
    absolute.classList.add("Active");
    BuyDive.classList.remove("active");
    modal.classList.remove("active");
    WTMenu2.classList.remove("active");
    WTMenu3.classList.remove("active");
    WTMenu4.classList.remove("active");
    block2.classList.remove("active");
    WTMenu.classList.remove("active");
  }
});

secondIcon.addEventListener("click", function () {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  } else {
    modal.classList.add("active");
    WTMenu.classList.remove("active");
    WTMenu3.classList.remove("active");
    BuyDive.classList.remove("active");
    WTMenu4.classList.remove("active");
    WTMenu2.classList.remove("active");
    block2.classList.remove("active");
    WTMenu1.classList.remove("active");
  }
});

thirdIcon.addEventListener("click", function () {
  if (WTMenu.classList.contains("active")) {
    WTMenu.classList.remove("active");
  } else {
    WTMenu.classList.add("active");
    modal.classList.remove("active");
    WTMenu2.classList.remove("active");
    WTMenu4.classList.remove("active");
    WTMenu3.classList.remove("active");
    BuyDive.classList.remove("active");
    block2.classList.remove("active");
    WTMenu1.classList.remove("active");
  }
});

fourthIcon.addEventListener("click", function () {
  if (WTMenu1.classList.contains("active")) {
    WTMenu1.classList.remove("active");
  } else {
    WTMenu1.classList.add("active");
    modal.classList.remove("active");
    WTMenu2.classList.remove("active");
    WTMenu3.classList.remove("active");
    BuyDive.classList.remove("active");
    WTMenu4.classList.remove("active");
    block2.classList.remove("active");
    WTMenu.classList.remove("active");
  }
});

fivethIcon.addEventListener("click", function () {
  if (WTMenu2.classList.contains("active")) {
    WTMenu2.classList.remove("active");
  } else {
    WTMenu2.classList.add("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    WTMenu4.classList.remove("active");
    block2.classList.remove("active");
    BuyDive.classList.remove("active");
    WTMenu3.classList.remove("active");
  }
});

sixthIcon.addEventListener("click", function () {
  if (WTMenu3.classList.contains("active")) {
    WTMenu3.classList.remove("active");
  } else {
    WTMenu3.classList.add("active");
    WTMenu2.classList.remove("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    block2.classList.remove("active");
    BuyDive.classList.remove("active");
    WTMenu4.classList.remove("active");
  }
});

// for (var i = 0; i < clickedBlocks.length; i++) {
//   clickedBlocks[i].addEventListener("click", function (e) {
//     console.log(this.classList.add("active"));
//   });
// }
tab(clickedBlocks);
tab(clickedBlocks1);
tab(clickedBlocks2);

function tab(items) {
  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}

// seventhIcon.addEventListener("click", function () {
//   if (WTMenu4.style.opacity == "0") {
//     WTMenu4.style.opacity = "1";
//     WTMenu4.style.transition = "0.3s";
//   } else {
//     WTMenu4.style.opacity = "0";
//   }
// });

// Type.addEventListener("click", function () {
//   if (Scroller.style.opacity == "0") {
//     Scroller.style.opacity = "1";
//     Scroller.style.transition = ".3s";
//     Scroller.style.zIndex = "1";
//   } else {
//     Scroller.style.opacity = "0";
//     Scroller.style.zIndex = "-10";
//   }
// });

const searchInp = document.getElementById("search");
const searchInp1 = document.getElementById("search1");
const searchInp2 = document.getElementById("search2");

searchInp.addEventListener("input", function (e) {
  var FilterValue, input, ul, li, i;
  FilterValue = e.target.value.toUpperCase();
  ul = document.getElementById("searchRight");
  li = ul.getElementsByClassName("right-divs");

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("span")[0];
    if (a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});

searchInp1.addEventListener("input", function (e) {
  var FilterValue, ul, li, i;
  FilterValue = e.target.value.toUpperCase();
  ul = document.getElementById("searchRight1");
  li = ul.getElementsByClassName("right-divs");

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("span")[0];
    if (a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
searchInp2.addEventListener("input", function (e) {
  var FilterValue, ul, li, i;
  FilterValue = e.target.value.toUpperCase();
  ul = document.getElementById("searchRight2");
  li = ul.getElementsByClassName("right-divs");

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("span")[0];
    if (a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});

const mainTabAdd1111 = document.querySelectorAll(".right .right-divs");
for (var i = 0; i < mainTabAdd1111.length; i++) {
  mainTabAdd1111[i].addEventListener("click", function () {
    const newTab = document.createElement("li");
    const newTabP = document.createElement("p");
    const newTabI = document.createElement("i");
    newTabP.innerText = "New Tab";
    newTabI.setAttribute("class", "fa-solid fa-xmark");
    newTab.append(newTabP);
    newTab.append(newTabI);
    mainTabs.append(newTab);

    tab(document.querySelectorAll(".main .menu .menu_list table tr"));
    tab(document.querySelectorAll(".main .graph .graph_top ul li"));

    WTMenu3.classList.remove("active");
    WTMenu2.classList.remove("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    WTMenu4.classList.remove("active");
    BuyDive.classList.remove("active");
    block2.classList.remove("active");
  });
}

const addBtn = document.querySelector(".main .menu .addButton");

addBtn.addEventListener("click", function () {
  if (block2.classList.contains("active")) {
    block2.classList.remove("active");
  } else {
    block2.classList.add("active");
    WTMenu2.classList.remove("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    WTMenu4.classList.remove("active");
    BuyDive.classList.remove("active");
  }
});

const menuListItems1 = document.querySelectorAll(
  ".main .menu .menu_list table tr"
);

const closeOrder = document.querySelector(".order__close");

for (var i = 0; i < menuListItems1.length; i++) {
  menuListItems1[i].addEventListener("dblclick", function () {
    if (BuyDive.classList.contains("active")) {
      BuyDive.classList.remove("active");
    } else {
      WTMenu2.classList.remove("active");
      modal.classList.remove("active");
      WTMenu1.classList.remove("active");
      WTMenu.classList.remove("active");
      WTMenu4.classList.remove("active");
      absolute.classList.remove("Active");
    }
  });
}

closeOrder.addEventListener("click", function () {
  if (BuyDive.classList.contains("active")) {
    BuyDive.classList.remove("active");
  } else {
    WTMenu2.classList.remove("active");
    modal.classList.remove("active");
    WTMenu1.classList.remove("active");
    WTMenu.classList.remove("active");
    WTMenu4.classList.remove("active");
  }
});
