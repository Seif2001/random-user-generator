var btn = document.querySelector("#btn")
var Name = document.querySelector("#Name")
var tag = document.querySelector("#tag")
var email = document.querySelector("#email")
var city = document.querySelector("#city")
var pic = document.querySelector("#pic")

url = "https://randomuser.me/api"


btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(showError)
});

function handleErrors(res){
  if(!res.ok){
    throw error(res.status)
  }
  return res;
}

function parseJSON(data){
  result = data.json()
  return result;
}

function updateProfile(data){
  user = data.results[0];
  var fullName = user.name.first + ' ' + user.name.last;
  Name.innerHTML = fullName;
  tag.innerHTML = user.login.username;
  email.innerHTML = user.email;
  city.innerHTML = user.location.city;
  pic.src = user.picture.large;
  console.log(fullName);
  return data;
}
function showError(error){
 console.log(error);
}