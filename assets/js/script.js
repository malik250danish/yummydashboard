// console.log("this is sript");

// var currentPageUrl = window.location.href;
// var navItems = document.querySelectorAll("nav-item a");

// for (var i = 0; i < navItems.length; i++) {
//   var navItem = navItems[i];
//   var navItemUrl = navItem.getAttribute("href");
//   console.log(navItemUrl);
//   if (currentPageUrl.indexOf(navItemUrl) > -1) {
//     console.log("in if");
//     navItem.classList.add("navActive");
//   }
// }

// Get the current page URL
// var currentPageUrl = window.location.href;

// // Select all navigation items
// var navItems = document.getElementsByClassName("nav-item");

// // Loop through the navigation items
// for (var i = 0; i < navItems.length; i++) {
//   var navItem = navItems[i];

//   // Get the href attribute of the navigation item link
//   var navItemUrl = navItem.querySelector("a").getAttribute("href");
//   console.log(navItemUrl);
//   // Check if the current page URL matches the navigation item URL
//   if (currentPageUrl.indexOf(navItemUrl)) {
//     console.log("in if");
//     // Add the "active" class to the matched navigation item
//     this.navItem.classList.add("navActive");
//   }
// }
// var currentPagePath = window.location.pathname;
// var navItems = document.getElementsByClassName("nav-item");

// for (var i = 0; i < navItems.length; i++) {
//   var navItem = navItems[i];
//   var navItemUrl = navItem.querySelector("a").href;

//   // Check if the current page URL matches the navigation item URL
//   if (currentPagePath === navItemUrl) {
//     navItem.classList.add("navActive");
//   }
// }
const currentPagePath = window.location.pathname;
const navItems = document.querySelectorAll(".nav-item");

for (const navItem of navItems) {
  const navItemUrl = navItem.querySelector("a").href;
  console.log(navItemUrl);
  console.log(navItemUrl.includes(currentPagePath));
  // Check if the current page URL matches the navigation item URL
  if (navItemUrl.endsWith(currentPagePath)) {
    console.log(navItem);
    navItem.classList.add("navActive");
  }
}
