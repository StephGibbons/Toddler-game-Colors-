
const coloredCircles = document.querySelectorAll('.circles');
const coloredBlocks = document.querySelectorAll('.ColorBlue',".ColorPurple",'.ColorYellow','.ColorOrange','.ColorRed','.ColorGreen');

//Circle Listners
coloredCircles.addEventListener('dragstart', dragStart);
coloredCircles.addEventListener('dragend', dragEnd);

//Drag Functions

function dragStart(){
    setTimeout(()=>(this.className='invisible',0));
}

function dragEnd(){
    console.long('end');
} 