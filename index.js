document.getElementById("username").addEventListener('change', function(e) {
  getRepositories(e) ;
})
function getRepositories(e) {
  console.log(e.target.value) ; 
  const repoPath = "https://api.github.com/users/" + e.target.value + "/repos"
  const req = new XMLHttpRequest();
  //add the callback trigger here
  req.open("GET",repoPath) ; 
}
