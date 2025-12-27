var sections = document.querySelectorAll(".Section_Title");
var sideBar = document.querySelector(".Sections_Tab");

function Build_Side_Bar(sections, sideBar) {
  i = 1;
  for (section of sections.values()) {
    console.log(section.textContent);
    var sectionLink = document.createElement("a");
    sectionLink.setAttribute("class", "Side_Bar_Menu_Item");
    sectionLink.href = "#" + section.id;
    section.textContent = i + ". " + section.textContent;
    sectionLink.textContent = section.textContent;
    i += 1;
    sideBar.appendChild(sectionLink);
  }
}

Build_Side_Bar(sections, sideBar);
