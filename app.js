var form = document.getElementById('add-item')
var input = document.getElementById('input')
var list= document.getElementById('list')
function addItem(e){
  //this precents page reloads and loss of form data
  e.preventDefault()
  //grabs in user input
  var item =input.value

  //puts user input into a ul
  list.innerHTML +="<li> " + item + "</li>"

  form.reset() 
}

form.addEventListener('submit', addItem)