// Site root, resolved from this file's location (assets/JS/Menu_Items.js),
// so links work from any page depth and when opened via file://.
export const SITE_ROOT = new URL("../../", import.meta.url);

export function Resolve_Url(path) {
  return new URL(path, SITE_ROOT).href;
}

export const Menu_Items = [
  {
    title: "Home",
    url: "index.html",
    cName: "Nav_Bar_Menu_Item",
  },
  {
    title: "Basics",
    url: "Basics/Basics.html",
    cName: "Nav_Bar_Menu_Item",
    description:
      "Installing Python and the core language: variables, types, strings, control flow, collections, functions and classes.",
    subMenu: [
      { title: "Basics", url: "Basics/Basics.html", cName: "Sub_Menu_Item" },
      { title: "Exercises", url: "Basics/Exercises.html", cName: "Sub_Menu_Item" },
      { title: "Solutions", url: "Basics/Solutions.html", cName: "Sub_Menu_Item" },
    ],
  },
  {
    title: "Intermediate",
    url: "Intermediate/Intermediate.html",
    cName: "Nav_Bar_Menu_Item",
    description:
      "Working with files and exceptions, then writing idiomatic Python: data structures, functions, generators, classes and metaprogramming.",
    subMenu: [
      { title: "Files", url: "Intermediate/Files.html", cName: "Sub_Menu_Item" },
      { title: "Exceptions", url: "Intermediate/Exceptions.html", cName: "Sub_Menu_Item" },
      { title: "Files Exercises", url: "Intermediate/File_Exercises.html", cName: "Sub_Menu_Item" },
      { title: "Files Solutions", url: "Intermediate/File_Solutions.html", cName: "Sub_Menu_Item" },
      { title: "Lists and Dictionaries", url: "Intermediate/Lists_and_Dictionaries.html", cName: "Sub_Menu_Item" },
      { title: "Functions", url: "Intermediate/Functions.html", cName: "Sub_Menu_Item" },
      { title: "Comprehensions and Generators", url: "Intermediate/Comprehensions_and_Generators.html", cName: "Sub_Menu_Item" },
      { title: "Classes and Interfaces", url: "Intermediate/Classes_and_Interfaces.html", cName: "Sub_Menu_Item" },
      { title: "Metaclasses and Attributes", url: "Intermediate/Metaclasses_and_Attributes.html", cName: "Sub_Menu_Item" },
      { title: "Testing and Debugging", url: "Intermediate/Testing_and_Debugging.html", cName: "Sub_Menu_Item" },
    ],
  },
  {
    title: "Django",
    url: "Django/Django.html",
    cName: "Nav_Bar_Menu_Item",
    description:
      "Building a web application with Django: projects, apps, models, user accounts, styling and deployment to Vercel.",
    subMenu: [
      { title: "Getting Started with Django", url: "Django/Getting_Started_with_Django.html", cName: "Sub_Menu_Item" },
      { title: "User Accounts", url: "Django/User_Accounts.html", cName: "Sub_Menu_Item" },
      { title: "Styling and Deploying an App", url: "Django/Styling_and_Deploying_an_App.html", cName: "Sub_Menu_Item" },
    ],
  },
  {
    title: "Advanced",
    url: "Advanced/Advanced.html",
    cName: "Nav_Bar_Menu_Item",
    description:
      "Concurrency, robustness, performance, advanced testing and working on Python code with other people.",
    subMenu: [
      { title: "Concurrency and Parallelism", url: "Advanced/Concurrency_and_Parallelism.html", cName: "Sub_Menu_Item" },
      { title: "Robustness and Performance", url: "Advanced/Robustness_and_Performance.html", cName: "Sub_Menu_Item" },
      { title: "Testing and Debugging", url: "Advanced/Testing_and_Debugging.html", cName: "Sub_Menu_Item" },
      { title: "Collaboration", url: "Advanced/Collaboration.html", cName: "Sub_Menu_Item" },
    ],
  },
];
