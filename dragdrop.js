
const circle = document.querySelector('.circle');
const coloredBlocks = document.querySelector('.ColorPurple');

//Circle Listeners
circle.addEventListener('dragstart', dragStart);
circle.addEventListener('dragend', dragEnd);

//Colorblock Listeners


    coloredBlocks.addEventListener('dragover', dragOver);
    coloredBlocks.addEventListener('dragenter', dragEnter);
    coloredBlocks.addEventListener('dragleave', dragLeave);
    coloredBlocks.addEventListener('drop', dragDrop);



//Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0)
}

function dragEnd(){
    this.className = 'circle';
} 

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hover';
}

function dragLeave(){
    this.className = 'ColorPurple';
}

function dragDrop(){
    this.className = 'ColorPurple';
    this.append(circle);
}






