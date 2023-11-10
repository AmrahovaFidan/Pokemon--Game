const pokemon = ["e", "w", "f"];
let play1Scor = 0;
let play2Scor = 0;


function isWin(player1Win) {
    if (player1Win) {
        playerFirstTitle.innerText = "WIN";
        playerFirstTitle.style = "color:darkgreen";
        playerSecoundTitle.innerText = "LOSE";
        playerSecoundTitle.style = "color:red";
    }
    else {
        playerFirstTitle.innerText = "LOSE";
        playerFirstTitle.style = "color:red";
        playerSecoundTitle.innerText = "WIN";
        playerSecoundTitle.style = "color:darkgreen";

    }
}



function showPokemon(p1, p2) {
    playerFirstScore.innerText = `Score: ${play1Scor}`;
    playerSecoundScore.innerText = `Score: ${play2Scor}`;

    playerFirstPokemon.src = `./assets/${p1}.jpg`;
    playerSecoundPokemon.src = `./assets/${p2}.jpg`;
}


function startGame(e) {
    let firstPlayerChoose = e.key;
    if (!pokemon.includes(firstPlayerChoose)) {
        alert("zehmet olmasa duzgun secim edin: w f e");
        return;
    }

    let comPlayerChoose = randomElement(pokemon);
    console.log(firstPlayerChoose);
    console.log(comPlayerChoose);

    if (
        (firstPlayerChoose == "e" && comPlayerChoose == "w") ||
        (firstPlayerChoose == "w" && comPlayerChoose == "f") ||
        (firstPlayerChoose == "f" && comPlayerChoose == "e")
    ) {
        console.log("You WIN");
        console.log("Computer LOSE");
        play1Scor = play1Scor + 1;
        isWin(true);
        showPokemon(firstPlayerChoose, comPlayerChoose);

    }
    else if (
        (firstPlayerChoose == "e" && comPlayerChoose == "e") ||
        (firstPlayerChoose == "w" && comPlayerChoose == "w") ||
        (firstPlayerChoose == "f" && comPlayerChoose == "f")
    ) {
        console.log("YOU DRAW");
        showPokemon(firstPlayerChoose, comPlayerChoose);
    }
    else {
        console.log("You Lose");
        console.log("Computer WIN");
        play2Scor = play2Scor + 1;
        isWin(false);
        showPokemon(firstPlayerChoose, comPlayerChoose);
    }


}


window.onkeydown = startGame; 