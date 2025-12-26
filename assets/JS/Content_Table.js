import { Menu_Items } from "./Menu_Items.js";

// Create and populate the content table
export function Build_Content_Table() {
  var contentDiv = document.querySelector(".Content");
  if (!contentDiv) return;
  var contentTable = document.createElement("ul");
  contentTable.setAttribute("class", "Chapter_List");

  Menu_Items.forEach((item) => {
    var listItem = document.createElement("li");
    var itemLink = document.createElement("a");
    itemLink.setAttribute("href", item.url);
    itemLink.setAttribute("class", "Chapter_List_Element");
    itemLink.textContent = item.title;
    listItem.appendChild(itemLink);
    contentTable.appendChild(listItem);
    if (item.subMenu) {
      var subMenuList = document.createElement("ul");
      subMenuList.setAttribute("class", "Section_List");
      item.subMenu.forEach((subItem) => {
        var subListItem = document.createElement("li");
        var subItemLink = document.createElement("a");
        subItemLink.setAttribute("href", subItem.url);
        subItemLink.setAttribute("class", "Section_List_Element");
        subItemLink.textContent = subItem.title;
        subListItem.appendChild(subItemLink);
        subMenuList.appendChild(subListItem);
      });
      listItem.appendChild(subMenuList);
    }
  });
  contentDiv.appendChild(contentTable);
}

Build_Content_Table();
