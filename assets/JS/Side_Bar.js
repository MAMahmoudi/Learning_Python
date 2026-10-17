var sections = document.querySelectorAll(".Section_Title");
var sideBar = document.querySelector(".Sections_Tab");

function Build_Side_Bar(sections, sideBar) {
  if (!sideBar) return;
  for (let i = 0; i < sections.length; i++) {
    // Give headings without an id one derived from their text, so the links work
    if (!sections[i].id) {
      var id =
        sections[i].textContent.trim().replace(/[^A-Za-z0-9]+/g, "_") ||
        "Section_" + (i + 1);
      while (document.getElementById(id)) id += "_Title";
      sections[i].id = id;
    }
    var sectionLink = document.createElement("a");
    sectionLink.setAttribute("class", "Side_Bar_Menu_Item");
    sectionLink.href = "#" + sections[i].id;
    sections[i].textContent = i + 1 + ". " + sections[i].textContent;
    sectionLink.textContent = sections[i].textContent;
    sideBar.appendChild(sectionLink);
  }
}

Build_Side_Bar(sections, sideBar);
