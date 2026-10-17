import { Menu_Items, Resolve_Url } from "./Menu_Items.js";

// Create and populate the content table.
// <div class="Content"> lists every chapter; <div class="Content" data-chapter="Intermediate">
// lists only that chapter's pages (used by the chapter landing pages).
export function Build_Content_Table() {
  var contentDiv = document.querySelector(".Content");
  if (!contentDiv) return;
  var chapter = contentDiv.dataset.chapter;
  var contentTable = document.createElement("ul");
  contentTable.setAttribute("class", "Chapter_List");

  Menu_Items.forEach((item) => {
    if (chapter && item.title !== chapter) return;
    if (!item.subMenu) return;
    var listItem = document.createElement("li");
    var itemLink = document.createElement("a");
    itemLink.setAttribute("href", Resolve_Url(item.url));
    itemLink.setAttribute("class", "Chapter_List_Element");
    itemLink.textContent = item.title;
    listItem.appendChild(itemLink);
    if (item.description) {
      var description = document.createElement("p");
      description.setAttribute("class", "Chapter_Description");
      description.textContent = item.description;
      listItem.appendChild(description);
    }
    var subMenuList = document.createElement("ul");
    subMenuList.setAttribute("class", "Section_List");
    item.subMenu.forEach((subItem) => {
      var subListItem = document.createElement("li");
      var subItemLink = document.createElement("a");
      subItemLink.setAttribute("href", Resolve_Url(subItem.url));
      subItemLink.setAttribute("class", "Section_List_Element");
      subItemLink.textContent = subItem.title;
      subListItem.appendChild(subItemLink);
      subMenuList.appendChild(subListItem);
    });
    listItem.appendChild(subMenuList);
    contentTable.appendChild(listItem);
  });
  contentDiv.appendChild(contentTable);
}

Build_Content_Table();
