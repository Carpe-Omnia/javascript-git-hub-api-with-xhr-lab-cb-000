document.getElementById("username").addEventListener('change', function(e) {
  getRepositories(e) ;
})
function getRepositories(e) {
  console.log(e.value)
}
