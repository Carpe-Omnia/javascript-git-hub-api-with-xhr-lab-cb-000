var useName ; 
document.getElementById("username").addEventListener('change', function(e) {
  getRepositories(e) ;
})
function getRepositories(e) {
  console.log(e.target.value) ;
  const repoPath = "https://api.github.com/users/" + e.target.value + "/repos"
  useName = e.target.value ; 
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
 + "<a href='#' " + "data-repo='" + r.name + "' " + "onclick='getCommits(this) '>"  + 'commits ' + "</a> "
 + "</li> "
)
.join("")} `
 repoText += "</ul>"
//console.log(repoText)
document.getElementById("repositories").innerHTML = repoText ;
}

function getCommits(el) {
  console.log(el.dataset.repo) ;
  const name = el.dataset.repo ;
  const req = new XMLHttpRequest() ;
  req.addEventListener("load", displayCommits) ;
  req.open("GET", "https://api.github.com/repos/octocat/" + name + "/commits");
  req.send();
}
