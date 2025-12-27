var sections = document.querySelectorAll(".Section_Title");
var sideBar = document.querySelector(".Sections_Tab");

function Build_Side_Bar(sections, sideBar) {
  for (i = 0; i < sections.length; i++) {
    var sectionLink = document.createElement("a");
    sectionLink.setAttribute("class", "Side_Bar_Menu_Item");
    sectionLink.href = "#" + sections[i].id;
    sections[i].textContent = i + 1 + ". " + sections[i].textContent;
    sectionLink.textContent = sections[i].textContent;
    sideBar.appendChild(sectionLink);
  }
}

Build_Side_Bar(sections, sideBar);
