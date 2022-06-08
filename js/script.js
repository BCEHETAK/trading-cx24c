const menuListItems = document.querySelectorAll(
  ".menu_list table tr"
);
const mainTabs = document.querySelector(".main .main .main_top ul");
const mainTabItems = document.querySelectorAll(".main .main .main_top ul li");

const menu = document.querySelector(".main .menu");
const main = document.querySelector(".main .main");
const menuToggle = document.querySelector(".main .menu .menu_tools .toggle");
const menu_list = document.querySelector(".main .menu .menu_list");
const quotes = document.querySelector(".main .menu .quotes");
const addButton = document.querySelector(".main .menu .addButton");

tab(menuListItems);

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

menuToggle.addEventListener("click", function () {
  if (menu.style.width === "") {
    menu.style.width = "40px";
    menu_list.style.display = "none";
    addButton.style.display = "none";
    quotes.style.display = "none";
    menuToggle.style.transform = "rotate(180deg)";
  } else {
    menu.style.width = "";
    menu_list.style.display = "block";
    addButton.style.display = "flex";
    quotes.style.display = "block";
    menuToggle.style.transform = "rotate(0deg)";
  }
});

const tradingMenuHeader = document.querySelector(".trading-menu__top");

tradingMenuHeader.addEventListener("click", function () {
  var tradingContent = document.querySelector(".trading-menu__body");
  tradingContent.classList.toggle("active");
});

// const .main = document.querySelector("..main");
// const menuLeft = document.querySelector("..main .menu");
// const menuRight = document.querySelector("..main .main");

// const splitterBar = new SplitterBar(.main, menuLeft, menuRight);
