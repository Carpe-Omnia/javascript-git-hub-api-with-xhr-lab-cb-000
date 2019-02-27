document.getElementById("username").addEventListener('change', function(e) {
  getRepositories(e) ;
})
function getRepositories(e) {
  console.log(e.target.value) ;
  const repoPath = "https://api.github.com/users/" + e.target.value + "/repos"
  console.log(repoPath) ;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET",repoPath) ;
  req.send() ;
}

function showRepositories(event, data) {
var repos = JSON.parse(this.responseText);
var testRepo = repos[0] ;
//console.log(testRepo);
// console.log(repos) ;
var repoText = "<ul>"
 repoText += ` ${repos.map( r => "<li>"
 + "name: " + r.name + "<br>"
 + r.html_url + "<br>"
 + "<a href='#' " + "data-repo='" + r.name + "' " + "onclick='displayCommits(this) '>"  + 'commits ' + "</a> "
 + "</li> "
)
.join("")} `
 repoText += "</ul>"
//console.log(repoText)
document.getElementById("repositories").innerHTML = repoText ;
}

function displayCommits(el) {
  console.log(el.dataset) ;
}
