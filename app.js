var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');
var box9 = document.getElementById('box-9');


// 123  456 789 147 258 369 159 357 winning Conditions


var count = 0;
function game(parameter) {
    var wordShow = count % 2;
    var word;

    // Word Show Logic
    if (wordShow === 0) {
        word = "o"
        document.body.style.backgroundColor = "blue"
    } else {
        word = "x"
        document.body.style.backgroundColor = "red"
    }


    // Game Code Logic
    if (parameter === '1' && box1.innerHTML === "") {
        box1.innerHTML = word
        count++
    }
    else if (parameter === '2' && box2.innerHTML === "") {
        box2.innerHTML = word
        count++
    }
    else if (parameter === '3' && box3.innerHTML === "") {
        box3.innerHTML = word
        count++
    }
    else if (parameter === '4' && box4.innerHTML === "") {
        box4.innerHTML = word
        count++
    }
    else if (parameter === '5' && box5.innerHTML === "") {
        box5.innerHTML = word
        count++
    }
    else if (parameter === '6' && box6.innerHTML === "") {
        box6.innerHTML = word
        count++
    }
    else if (parameter === '7' && box7.innerHTML === "") {
        box7.innerHTML = word
        count++
    }
    else if (parameter === '8' && box8.innerHTML === "") {
        box8.innerHTML = word
        count++
    }
    else if (parameter === '9' && box9.innerHTML === "") {
        box9.innerHTML = word
        count++
    }

    // Checking Winning Conditions
    checkWin()
}
function reset() {
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
    count = 0
}

function checkWin() {
    // Conditions For X
    if (box1.innerHTML === 'x' && box2.innerHTML === 'x' && box3.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box4.innerHTML === 'x' && box5.innerHTML === 'x' && box6.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box7.innerHTML === 'x' && box8.innerHTML === 'x' && box9.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box1.innerHTML === 'x' && box4.innerHTML === 'x' && box7.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box2.innerHTML === 'x' && box5.innerHTML === 'x' && box8.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box3.innerHTML === 'x' && box6.innerHTML === 'x' && box9.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box1.innerHTML === 'x' && box5.innerHTML === 'x' && box9.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }
    else if (box3.innerHTML === 'x' && box5.innerHTML === 'x' && box7.innerHTML === 'x') {
        alert("X User Has Won")
        reset()
    }

    // Conditions For O
    else if (box1.innerHTML === 'o' && box2.innerHTML === 'o' && box3.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box4.innerHTML === 'o' && box5.innerHTML === 'o' && box6.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box7.innerHTML === 'o' && box8.innerHTML === 'o' && box9.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box1.innerHTML === 'o' && box4.innerHTML === 'o' && box7.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box2.innerHTML === 'o' && box5.innerHTML === 'o' && box8.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box3.innerHTML === 'o' && box6.innerHTML === 'o' && box9.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box1.innerHTML === 'o' && box5.innerHTML === 'o' && box9.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }
    else if (box3.innerHTML === 'o' && box5.innerHTML === 'o' && box7.innerHTML === 'o') {
        alert("O User Has Won")
        reset()
    }

}
if (box1.innerHTML === 'o' || box1.innerHTML === 'x' && box2.innerHTML === 'o' || box2.innerHTML === 'x' && box3.innerHTML === 'o' || box3.innerHTML === 'x' && box4.innerHTML === 'o' || box4.innerHTML === 'x' && box5.innerHTML === 'o' || box5.innerHTML === 'x' && box6.innerHTML === 'o' || box6.innerHTML === 'x' && box7.innerHTML === 'o' || box7.innerHTML === 'x' && box8.innerHTML === 'o' || box8.innerHTML === 'x' && box9.innerHTML === 'o' || box9.innerHTML === 'x') {
    reset()
}