let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let turn0 = true;//player0 or playerX
let msgContainer = document.querySelector(".msg-container")
let msgs = document.querySelector("#msg");
let startnewgame = document.querySelector(".newgame")
let content=document.querySelector("main");
console.log(content);
let count = 0;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

msgContainer.classList.add("hide");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText = "O";
            btn.classList.remove("textcolor");
            // console.log("player0");
            // console.log(btn);
            turn0 = false;
        }
        else {
            btn.innerText = "X";
            btn.classList.add("textcolor");
            // console.log("playerX");
            // console.log(btn);
            turn0 = true;

        }
        count++;
        btn.disabled = true;

        let iswinner = checkWinner();
        if (count === 9 && !iswinner) {
            console.log("draw");
            msgs.innerText = "Match - Draw"
            msgContainer.classList.remove("hide");
            content.classList.add("hide");


        }

    })
})


const resetgame = () => {
    for (i of btns) {
        i.disabled = false;
        i.innerText = "";
        turn0 = true;
        count=0;
        msgContainer.classList.add("hide");
        content.classList.remove("hide");
    }
};

resetbtn.addEventListener("click", resetgame);

startnewgame.addEventListener("click", resetgame);

const disabled = () => {
    for (k of btns) {
        k.disabled = true;
    }
}

const checkWinner = () => {
    for (a of winPatterns) {
        let pos1 = btns[a[0]].innerText;
        let pos2 = btns[a[1]].innerText;
        let pos3 = btns[a[2]].innerText;

        if (pos1 === pos2 && pos2 === pos3) {
            if (pos1 === pos2 && pos2 === pos3 && pos1 === "O") {
                disabled();
                msgs.innerText = "Congratulation, Winner is O";
                msgContainer.classList.remove("hide");
                content.classList.add("hide");
                return true;


            }
            else if (pos1 === pos2 && pos2 === pos3 && pos1 === "X") {
                disabled();
                msgs.innerText = "Congratulation, Winner is X";
                msgContainer.classList.remove("hide");
                content.classList.add("hide");
                return true;

            }
        }


    }
}