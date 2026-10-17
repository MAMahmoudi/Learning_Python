import { Menu_Items, Resolve_Url } from "./Menu_Items.js";

var clicked = false;

function Is_Current_Page(url) {
  return new URL(url).pathname === window.location.pathname;
}

function Build_Nav_Bar() {
  var body = document.getElementsByTagName("body")[0];
  var Header = document.createElement("header");
  var Nav_Bar_Items = document.createElement("nav");
  Nav_Bar_Items.setAttribute("class", "Nav_Bar_Items");
  Nav_Bar_Items.setAttribute("id", "Nav_Bar_Items_ID");
  Header.appendChild(Nav_Bar_Items);
  body.insertBefore(Header, body.children[0]);

  var Nav_Bar_Logo = document.createElement("a");
  Nav_Bar_Logo.setAttribute("class", "Nav_Bar_Logo");
  Nav_Bar_Logo.setAttribute("id", "Nav_Bar_Logo_ID");
  Nav_Bar_Logo.setAttribute("href", Resolve_Url("index.html"));
  Nav_Bar_Logo.textContent = "Learning Python";

  var Menu_Icon = document.createElement("button");
  Menu_Icon.setAttribute("class", "Menu_Icon");
  Menu_Icon.setAttribute("id", "Menu_Icon_ID");
  Menu_Icon.setAttribute("aria-label", "Toggle menu");
  Menu_Icon.setAttribute("aria-expanded", "false");
  Menu_Icon.textContent = "☰";

  Nav_Bar_Items.appendChild(Nav_Bar_Logo);
  Nav_Bar_Items.appendChild(Menu_Icon);

  var Nav_Bar_Menu = document.createElement("ul");
  Nav_Bar_Menu.setAttribute("id", "Nav_Bar_Menu_ID");
  Nav_Bar_Menu.className = "Nav_Bar_Menu";

  Menu_Items.forEach((item) => {
    var Nav_Bar_Item = document.createElement("li");
    var Nav_Bar_Item_Link = document.createElement("a");
    var url = Resolve_Url(item.url);
    Nav_Bar_Item_Link.setAttribute("href", url);
    Nav_Bar_Item_Link.setAttribute("class", item.cName);
    Nav_Bar_Item_Link.textContent = item.title;
    Nav_Bar_Item.appendChild(Nav_Bar_Item_Link);

    var Is_Active = Is_Current_Page(url);
    if (item.subMenu != null && item.subMenu.length > 0) {
      Nav_Bar_Item.setAttribute("class", "Nav_Bar_Item_Sub_Menus");
      var Sub_Menus = document.createElement("ul");
      Sub_Menus.setAttribute("class", "Sub_Menu");
      item.subMenu.forEach((subItem) => {
        var Sub_Menu_Item = document.createElement("li");
        var Sub_Menu_Item_Link = document.createElement("a");
        var subUrl = Resolve_Url(subItem.url);
        Sub_Menu_Item_Link.setAttribute("href", subUrl);
        Sub_Menu_Item_Link.setAttribute("class", subItem.cName);
        Sub_Menu_Item_Link.textContent = subItem.title;
        if (Is_Current_Page(subUrl)) {
          Sub_Menu_Item_Link.classList.add("Active");
          Is_Active = true;
        }
        Sub_Menu_Item.appendChild(Sub_Menu_Item_Link);
        Sub_Menus.appendChild(Sub_Menu_Item);
      });
      Nav_Bar_Item.appendChild(Sub_Menus);
    }
    if (Is_Active) Nav_Bar_Item_Link.classList.add("Active");
    Nav_Bar_Menu.appendChild(Nav_Bar_Item);
  });
  Nav_Bar_Items.appendChild(Nav_Bar_Menu);
}

Build_Nav_Bar();

function handle_click() {
  clicked = !clicked;
  var Menu_Icon = document.getElementById("Menu_Icon_ID");
  document.getElementById("Nav_Bar_Menu_ID").className = clicked
    ? "Nav_Bar_Menu_Active"
    : "Nav_Bar_Menu";
  Menu_Icon.textContent = clicked ? "✕" : "☰";
  Menu_Icon.setAttribute("aria-expanded", String(clicked));
}

document
  .getElementById("Menu_Icon_ID")
  .addEventListener("click", function (event) {
    event.preventDefault();
    handle_click();
  });
