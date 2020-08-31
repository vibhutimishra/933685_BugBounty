var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var difficultyLevel = "Hard";

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();
colorDisplay = document.querySelector(".colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");

var squares = document.querySelectorAll(".square");
var newGame = document.querySelector("#newColor");

init();

//complete operation
function init() {
    setupButtons();
    setupSquares();
}

function setupSquares() {
    //the main event of the game
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.cursor = "pointer";

        squares[i].addEventListener("click", function () {
            //when u win the game
            if (this.style.backgroundColor == pickedColor) {
                messageDisplay.textContent = "You Found!!:-)";

                h1.style.backgroundColor = pickedColor;
                newGame.textContent = "Play Again";
                changeColor(pickedColor);
            }
            else {
                messageDisplay.textContent = "Try Again!!";
                messageDisplay.style.color = "black";
                this.style.background="black";
            }
           
        })
    }
}


function setupButtons() {
    //when hovering the mouse over newcolor
    newGame.addEventListener("mouseover", function () {
        newGame.style.background = "rgb(2, 160, 194)";
        newGame.style.color = "white";
    })

    //when hovering the mouse away from the new Color
    newGame.addEventListener("mouseout", function () {
        newGame.style.background = "white";
        newGame.style.color = "rgb(2, 160, 194)";
    })

    //when clicked New Game
    newGame.addEventListener("click", function () {
        if (difficultyLevel == "Easy")
            //3 squares are required
            resetGame(3);
        else
            //6 squares are required
            resetGame(6);
    })
    //when hover on easy 
    easyBtn.addEventListener("mouseover",function(){
        easyBtn.classList.add("selected");
    })
    //hard button hover
    hardBtn.addEventListener("mouseover",function(){
        hardBtn.classList.add("selected");
    })

    //when easy button is selected
    easyBtn.addEventListener("click", function () {

        //to change the background of the buttons
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        

        
        
        for (var i = 3; i <= 5; i++)
            squares[i].style.display = "none";
        resetGame(3);
        difficultyLevel = "Easy";
    });

    //when hard button is clicked
    hardBtn.addEventListener("click", function () {

        //to change the background of the buttons
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");

        for (var i = 3; i <= 5; i++)
            squares[i].style.display = "block";
        resetGame(6);
        difficultyLevel = "Hard";
    });
}

// for changing the color of each square
function changeColor(colour) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.background = colour;
}

//for picking a random color

function pickColor() {
    var colorRand = Math.floor((Math.random() * colors.length));
    return colors[colorRand];
}

//for generating random colors
function generateRandomColors(number) {
    var colorsArray = [];
    for (var i = 0; i < number; i++) {
        //generating the rgb values
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256)

        //creating the rgb format and inserting into the colorsArray
        var colorValue = "rgb(" + red + ", " + green + ", " + blue + ")";
        colorsArray.push(colorValue);
    }
    return colorsArray;
}

// to reset the game
function resetGame(number) {
    newGame.textContent = "New Colors"
    colors = generateRandomColors(number);

    //to change the colors of the squares
    for (var i = 0; i < number; i++)
        squares[i].style.background = colors[i];

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "rgb(2, 149, 194)";
    messageDisplay.textContent = "";
}