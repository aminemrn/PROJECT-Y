var dc = {};

function showLoading(selector) {
  document.querySelector(selector).innerHTML = '<div class="text-center">Loading...</div>';
}

document.addEventListener("DOMContentLoaded", function() {
  // HARDCODED TEST - REMOVE LATER
  document.querySelector("#main-content").innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <a href="#" onclick="dc.loadMenuItems('L')">
          <div class="tile">TEST MENU</div>
        </a>
      </div>
      <div class="col-md-4">
        <a href="#" onclick="dc.loadMenuItems('D')">
          <div class="tile">TEST SPECIALS</div>
        </a>
      </div>
    </div>
  `;
  
  // Uncomment this later when basic layout works
  // showLoading("#main-content");
  // $ajaxUtils.sendGetRequest("categories.json", buildAndShowHomeHTML, true);
});

dc.loadMenuItems = function(cat) {
  alert("Would load category: " + cat); // Test if clicks work
};
