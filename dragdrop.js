
const circle = document.querySelector('.circle');
const coloredBlocks = document.querySelector('.ColorBlue','.ColorPurple','.ColorYellow','.ColorOrange','.ColorRed','.ColorGreen');

//Circle Listeners
circle.addEventListener('dragstart', dragStart);
circle.addEventListener('dragend', dragEnd);

//Colorblock Listeners





//Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0)
}

function dragEnd(){
    this.className = 'fill';
} 





