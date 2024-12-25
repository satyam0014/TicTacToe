let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let turn0 = true;//player0 or playerX
let msgContainer = document.querySelector(".msg-container")
let msgs = document.querySelector("#msg");
let startnewgame = document.querySelector(".newgame")
let content = document.querySelector("main");
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

const compgen = () => {
    let comp = Math.floor(Math.random() * 9);
    return comp;
}

const compchoice = () => {
    let computergen = compgen();
    while (btns[computergen].innerText === "O" || btns[computergen].innerText === "X") {
        computergen = compgen();
    }
    return computergen;

}

const compresponse = () => {
    let choice = compchoice();
    if (!turn0) {
        btns[choice].innerText = "X";
        btns[choice].classList.add("textcolor");
        btns[choice].disabled = true;
        console.log(btns[choice]);
        count++;
    }
}

msgContainer.classList.add("hide");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText = "O";
            btn.classList.remove("textcolor");
            // console.log("player0");
            count++;
            turn0 = false;
            btn.disabled = true;
            console.log(btn);
            if (count < 9) {
                compresponse();
                turn0 = true;
            }
        }

        // else {
        //     btn.innerText = "X";
        //     btn.classList.add("textcolor");
        //     // console.log("playerX");
        //     // console.log(btn);
        //     turn0 = true;

        // }





        let iswinner = checkWinner();
        if (count === 9 && !iswinner) {
            console.log("draw");
            msgs.innerText = "Match - Draw"
            msgContainer.classList.remove("hide");
            // content.classList.add("hide");


        }

    })
})


const resetgame = () => {
    for (i of btns) {
        i.disabled = false;
        i.innerText = "";
        turn0 = true;
        count = 0;
        msgs.innerText = "Winner";
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
                // content.classList.add("hide");
                return true;


            }
            else if (pos1 === pos2 && pos2 === pos3 && pos1 === "X") {
                disabled();
                msgs.innerText = "Congratulation, Winner is X";
                msgContainer.classList.remove("hide");
                // content.classList.add("hide");
                return true;

            }
        }


    }
}


