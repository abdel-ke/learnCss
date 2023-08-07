const skyBlue = "#3498db";
const gray = "#e0e0e0";
let pos = 1;
let posLine = 0;
let number = document.getElementsByClassName("number");
let line = document.getElementsByClassName("line");
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function Next() {
    console.log(pos)
    if (pos > 3 || pos < 0)
        return;
        number[pos++].style.borderColor = skyBlue;
        line[posLine++].style.backgroundColor = skyBlue;
        checkBtn();
}

function Prev() {
    console.log(pos)
    if (pos > 4 || pos <= 1)
        return;
        number[--pos].style.borderColor = gray;
        line[--posLine].style.backgroundColor = gray;
        checkBtn();
}

function checkBtn() {
    if (pos >= 1 && pos < 4)
    {
        prevBtn.style.backgroundColor = skyBlue;
        nextBtn.style.backgroundColor = skyBlue;
        prev.disabled = false;
    }
    if (pos == 1)
    {
        prevBtn.style.backgroundColor = gray;
        nextBtn.style.backgroundColor = skyBlue;
    }
    if (pos == 4)
    {
        prevBtn.style.backgroundColor = skyBlue;
        nextBtn.style.backgroundColor = gray;
    }
}
