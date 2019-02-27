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
// console.log(data) ;
// console.log(event) ;
var repos = JSON.parse(this.responseText);
console.log(repos[0]);
var testRepo = repos[0] ;
const repoTex = testRepo.name ;
}
