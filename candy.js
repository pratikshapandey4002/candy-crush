let candies = ['Blue','Orange', 'Green' , 'Yellow','Red','purple'];
let board = [];
var row = 9;
var column = 9;
var score = 0;

var currTile;
var otherTile;

window.onload = function(){
    startGame();

    //every 1/10th of a second its going to call the crushcandy function
    window.setInterval(function(){
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
}
function randomCandy(){
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame(){
    for(let r=0; r < row; r++){
        let row=[];
        for(let c=0; c< column ; c++)
        {
            let tile = document.createElement('img');
            tile.id = r.toString() + '-'+ c.toString();
            tile.src = "./images/"+ randomCandy() +".png";

            tile.addEventListener("dragstart", dragStart); //click on a candy, initialize drag process
            tile.addEventListener("dragover", dragOver);  //clicking on candy, moving mouse to drag the candy
            tile.addEventListener("dragenter", dragEnter); //dragging candy onto another candy
            tile.addEventListener("dragleave", dragLeave); //leave candy over another candy
            tile.addEventListener("drop", dragDrop); //dropping a candy over another candy
            tile.addEventListener("dragend", dragEnd); //after drag process completed, we swap candies

            
            document.getElementById('board').append(tile);
            row.push(tile);

        }
        board.push(row);
    }
    console.log(board);
}

function dragStart(){
    //this refers to tile that was clicked on for dragging
    currTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    //this regers to the target tile that was dropped on
    otherTile = this;
}

function dragEnd(){

    if (currTile.src.includes('blank') || otherTile.src.includes('blank')){
        return;
    }
    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r2 == r;
    let moveRight = c2 == c+1 && r2 ==r;

    let moveUp = c2 == c && r2 == r-1;
    let moveDown = c2 == c && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    if(isAdjacent)
    {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        let validMove = checkValid();
        if (!validMove){
            let currImg = currTile.src;
            let otherImg = otherTile.src;
            currTile.src = otherImg;
            otherTile.src = currImg;  
        

    }
   
}
}

function crushCandy(){
    crushFive()
    crushFour()
    crushThree();
    document.getElementById('score').innerText = score;

}

function crushThree(){
    //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score+=30;
            }
        }
    }

    //check columns
    for (let c = 0; c < column; c++) {
        for (let r = 0; r < row-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score+=30
            }
        }
    } 

}

function crushFour(){
    //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column-3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/choco.png";
                candy4.src = "./images/blank.png";
                score+=40;
            }
        }
    }

    //check columns
    for (let c = 0; c < column; c++) {
        for (let r = 0; r < row-4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src &&  candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/choco.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score+=50
            }
        }
    } 

}

function crushFive(){
    //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column-4; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            let candy5 = board[r][c+4];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/choco.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";

                score+=50;
            }
        }
    }

    //check columns
    for (let c = 0; c < column; c++) {
        for (let r = 0; r < row-4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src &&  candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/choco.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score+=50
            }
        }
    } 

}


function checkValid(){
    //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    //check columns
    for (let c = 0; c < column; c++) {
        for (let r = 0; r < row-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    } 

    return false;

}



function slideCandy(){
    for(let c =0 ; c< column ; c++){
        let ind = row -1;
        for(let r = column -1 ; r >=0 ; r--){
            if(!board[r][c].src.includes('blank')){
                board[ind][c].src = board[r][c].src;
                ind -=1;
            }
        }

        for(let r = ind ; r>=0 ; r--)
        {
            board[r][c].src = './images/blank.png';
        }

    }
}

function generateCandy(){
    for(let c=0 ; c< column ; c++){
        if (board[0][c].src.includes('blank')){
            board[0][c].src = "./images/" + randomCandy() + ".png";
        }
    }
}















