var query = { active: true, currentWindow: true };

function callback(tabs) {
    var currentTab = tabs[0].url.toLowerCase().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    document.getElementById("pageurl").innerHTML = currentTab;
    if (db[currentTab]) {
      let issues = db[currentTab].issues;
      for(let i = 0, len =issues.length; i<len; i++) {
        var subject     = "<div class=\"darkitem\"><div class=\"subject\">" + issues[i].topic + "</div>",
            daterep     = "<div class=\"date\">Reported: " + issues[i].date + "</div>",
            description = "<div class=\"description\">" + issues[i].description + "</div>",
            platform    = "<div class=\"tag\">" + issues[i].platform + "</div>"
            solution = "";
            if (issues[i].solution) {
              solution = "<div class=\"solution\"><h4>Solution:</h4><div>" + issues[i].solution + "</div></div>"
            }
        document.getElementById("content").innerHTML += subject + daterep + platform + description + solution + "</div>";
      }
        
    } else {
      document.getElementById("content").innerHTML = "<div class=\"darkitem\"><div class=\"good\"><div class=\"message\"><span>Great news!</span>There aren’t any known dark patterns found here.</div></div></div>";
    }
  }

chrome.tabs.query(query, callback);

document.addEventListener('DOMContentLoaded', function() {
  var info = document.getElementById('info');
  // onClick's logic below:
  info.addEventListener('click', function() {
    var element = document.getElementsByClassName("info-details");
    var e = element[0];
    e.classList.toggle("active");
  });
});