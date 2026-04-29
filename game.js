// geting elements

let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let btn = document.querySelector("#btn")
let turnO = true;
let count = 0;
let gameOver = false;
let winP = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) =>{
    box.addEventListener("click" ,()=>{
     if(box.innerText !== "" || gameOver) return
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
            count++
        }else{
            box.innerText = "X";
            turnO = true;
            count++
        }
    checkWinner();
    if(count === 9 && !gameOver ){
        msg.innerText = "MATCH DRAW"
        gameOver = true;
    }
})
})
function checkWinner() {
    for(let pat of winP){
       let val1 = boxes[pat[0]].innerText;
       let val2 = boxes[pat[1]].innerText;
       let val3 = boxes[pat[2]].innerText;
    
        if (val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2 && val2 ===val3){
                msg.innerText = `Player ${val1} is the WINNER !!!`;
                alert(`WINNER IS PLAYER  ${val1}`)
                gameOver = true;
            }
            
        }
    
    }
    
}
btn.addEventListener("click",() => {
    turnO = true;
    gameOver = false;
    count = 0 ;
    msg.innerText="";

    boxes.forEach((box) => {
        box.innerText ="";
    })
})