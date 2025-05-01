var dc = {};

function showLoading(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  document.querySelector(selector).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
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

dc.loadMenuCategories = function() {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    "https://davids-restaurant.herokuapp.com/categories.json",
    buildAndShowCategoriesHTML
  );
};

dc.loadMenuItems = function(categoryShort) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShort,
    buildAndShowMenuItemsHTML
  );
};

// Helper functions (keep these at the bottom)
function buildAndShowCategoriesHTML(categories) {
  /* ... existing code ... */
}

function buildAndShowMenuItemsHTML(categoryMenuItems) {
  /* ... existing code ... */
}
