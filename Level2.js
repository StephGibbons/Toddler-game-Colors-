const square = document.getElementById('square');
const circle = document.getElementById('circle');
const star = document.getElementById('star');
const triangle = document.getElementById('triangle');
const heart = document.getElementById('heart');
const pentagon = document.getElementById('pentagon');

const heartOutline = document.getElementById('heartOutline');
const circleOutline = document.getElementById('circleOutline');
const squareOutline = document.getElementById('squareOutline');
const triangleOutline = document.getElementById('triangleOutline');
const starOutline = document.getElementById('starOutline');
const pentagonOutline = document.getElementById('pentagonOutline');

var score = 0;



//Circle Listeners

//square
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
//cricle
    circle.addEventListener('dragstart', dragStart);
    circle.addEventListener('dragend', dragEnd);
//heart
    heart.addEventListener('dragstart', dragStart);
    heart.addEventListener('dragend', dragEnd);
//pentagon
    pentagon.addEventListener('dragstart', dragStart);
    pentagon.addEventListener('dragend', dragEnd);
//triangle
    triangle.addEventListener('dragstart', dragStart);
    triangle.addEventListener('dragend', dragEnd);
//star
    star.addEventListener('dragstart', dragStart);
    star.addEventListener('dragend', dragEnd);


//Colorblock Listeners

//heart
    heartOutline.addEventListener('dragover', dragOver);
    heartOutline.addEventListener('dragenter', dragEnter);
    heartOutline.addEventListener('dragleave', dragLeaveHeart);
    heartOutline.addEventListener('drop', dragDropHeart);
   
//circle
    circleOutline.addEventListener('dragover', dragOver);
    circleOutline.addEventListener('dragenter', dragEnter);
    circleOutline.addEventListener('dragleave', dragLeaveCircle);
    circleOutline.addEventListener('drop', dragDropCircle);
//square
    squareOutline.addEventListener('dragover', dragOver);
    squareOutline.addEventListener('dragenter', dragEnter);
    squareOutline.addEventListener('dragleave', dragLeaveSquare);
    squareOutline.addEventListener('drop', dragDropSquare);

//triangle
    triangleOutline.addEventListener('dragover', dragOver);
    triangleOutline.addEventListener('dragenter', dragEnter);
    triangleOutline.addEventListener('dragleave', dragLeaveTriangle);
    triangleOutline.addEventListener('drop', dragDropTriangle);
//Star
    starOutline.addEventListener('dragover', dragOver);
    starOutline.addEventListener('dragenter', dragEnter);
    starOutline.addEventListener('dragleave', dragLeaveStar);
    starOutline.addEventListener('drop', dragDropStar);
//Pentagon
    pentagonOutline.addEventListener('dragover', dragOver);
    pentagonOutline.addEventListener('dragenter', dragEnter);
    pentagonOutline.addEventListener('dragleave', dragLeavePentagon);
    pentagonOutline.addEventListener('drop', dragDropPentagon); 





//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd(){
    this.className = 'shape';
} 

function dragOver(e){
    e.preventDefault();
    this.classList.add('glow');

}

function dragEnter(e){
    e.preventDefault();
}

//shapespecificfunctions

//heart
function dragLeaveHeart(){
    this.elementId = 'heartOutline';
    this.classList.remove('glow');

}

function dragDropHeart(e){
    if(mouseOver = "heartOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "heart"){
    this.elementId = 'heartOutline';
    this.append(heart); 
    this.classList.remove('glow')
    
    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }
        }
    }  
}
//circle
function dragLeaveCircle(){
    this.elementId = 'circleOutline';
    this.classList.remove('glow');
}

function dragDropCircle(e){
    if(mouseOver = "circleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circle"){
    this.elementId = 'circleOutline';
    this.append(circle);
    this.classList.remove('glow')

    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }
        }
    }
}

//Triangle
function dragLeaveTriangle(){
    this.elementId = 'triangleOutline';
    this.classList.remove('glow');
}

function dragDropTriangle(e){
    if(mouseOver = "triangleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "triangle"){
    this.elementId = 'triangleOutline';
    this.append(triangle);  
    this.classList.remove('glow')

    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }
        }
    }
}

//Square
function dragLeaveSquare(){
    this.elementId = 'squareOutline';
    this.classList.remove('glow');
}

function dragDropSquare(e){
    if(mouseOver = "squareOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "square"){
    this.elementId = 'squareOutline';
    this.append(square); 
    this.classList.remove('glow')

    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }
        }
    }
}

//Star
function dragLeaveStar(){
    this.elementID = 'ColorStar';
    this.classList.remove('glow');
}

function dragDropStar(e){
    if(mouseOver = "starOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "star"){
    this.elementId = 'starOutline';
    this.append(star); 
    this.classList.remove('glow')

    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    } 
        }
    }
}

//Pentagon
function dragLeavePentagon(){
    this.elementId = 'pentagonOutline';
    this.classList.remove('glow');
}

function dragDropPentagon(e){
    if(mouseOver = "pentagonOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "pentagon"){
    this.elementId = 'pentagonOutline';
    this.append(pentagon);
    this.classList.remove('glow') 
   
    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }
        }
    }
}