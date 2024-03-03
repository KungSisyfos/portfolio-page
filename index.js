let element =  document.querySelector('body');
let imageClick = document.getElementById('header');

function turnDarkMode(){
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
}

imageClick.onclick = turnDarkMode;
