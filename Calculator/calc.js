let screenValue = document.getElementById('screen').value;
console.log(screenValue);
check = true;
let a = "";
let c = "";
let b = "";

//button A/C
document.getElementById('ac').addEventListener("click", function() {
    document.getElementById('screen').value = "0";
});

//button +/-
document.getElementById('change').addEventListener("click", function() {
    document.getElementById('screen').value = -document.getElementById('screen').value
});

//button %
document.getElementById('procent').addEventListener("click", function() {
    document.getElementById('screen').value /= 100;
});

//button .
function dot() {
    let arr = Array.from(document.getElementById('screen').value);
    let dotValue = null;

    arr.forEach(function(item) {
        if (item === '.') {
            dotValue = 1;
        }
    });
    if (dotValue !== 1) {
        document.getElementById('screen').value += ".";
    }
}

//buttons value
document.getElementById('two').addEventListener("click", (event) => {
    if (event.target.dataset.action === "dot") {
        dot()
    } else {
        if (document.getElementById('screen').value === "0") {
            document.getElementById('screen').value = event.target.value;
            a = document.getElementById('screen').value;
        } else {
            if (check === true) {
                document.getElementById('screen').value = document.getElementById('screen').value + event.target.value;
                a = document.getElementById('screen').value;
            } else {
                document.getElementById('screen').value = event.target.value;
                check = true;
                a = document.getElementById('screen').value;

            }
        }
    }
});
//btns operations
document.querySelector('.second').addEventListener("click", (event) => {
    if (event.target.dataset.action === "operation") {
        a = document.getElementById('screen').value
        check = false;
        b = event.target.dataset.value;
        c = a;
        // console.log(b)
        // console.log(c)
    } else
        result();
});
//button =
function result() {
    document.getElementById('screen').value = eval((c + b) + a);
    a = document.getElementById('screen').value;
}