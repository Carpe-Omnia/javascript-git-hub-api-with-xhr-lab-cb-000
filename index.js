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
console.log(testRepo);
const repoText = testRepo.name + "\n" + testRepo.html_url;
console.log(repoText)
}
