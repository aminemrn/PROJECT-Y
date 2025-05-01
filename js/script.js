// Initialize dc object
var dc = {};

document.addEventListener("DOMContentLoaded", function() {
  // Load home page on startup
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    "https://davids-restaurant.herokuapp.com/categories.json",
    buildAndShowHomeHTML,
    true
  );
});

function buildAndShowHomeHTML(categories) {
  $ajaxUtils.sendGetRequest(
    "snippets/home-snippet.html",
    function(homeHtml) {
      // Pick random category
      var randomCategory = categories[Math.floor(Math.random() * categories.length)];
      var modifiedHtml = homeHtml.replace(
        "{{randomCategoryShortName}}", 
        "'" + randomCategory.short_name + "'"
      );
      document.querySelector("#main-content").innerHTML = modifiedHtml;
    },
    false
  );
}

// Other functions remain the same as starter code
dc.loadMenuCategories = function() { /* ... */ };
dc.loadMenuItems = function(categoryShort) { /* ... */ };
