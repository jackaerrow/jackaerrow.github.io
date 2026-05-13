const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) 

/*
const text = 'about me'

let index = 0

function writeText() {
  document.body.innerText = text.slice
  (0,index);
  index++;

  if (index > text.length - 1){
    index = 0
  }
}
setInterval (writeText, 100);
*/