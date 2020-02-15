let screenValue = document.getElementById('screen').value;
console.log(screenValue);
check = true;
let a = "";
let c = "";
let b = "";
let rez = "";
//button A/C
document.getElementById('ac').addEventListener("click", function() {
    document.getElementById('screen').value = "0";
    document.getElementById('ac').value = "A/C";

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
    document.getElementById('ac').value = "C";
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
    a = document.getElementById('screen').value

    if (event.target.dataset.action === "operation") {
        check = false;
        b = event.target.dataset.value;
        c = a;

    } else
        result();
});

//button =
function result() {
    a = document.getElementById('screen').value;
    if (b === "-" && a < 0) {
        document.getElementById('screen').value = -((Number(a) - Number(c)));
    } else {
        document.getElementById('screen').value = eval(c + b + a);
    } <<
    <<
    << < HEAD
} ===
===
=
} >>>
>>>
> 42 fa8c07ff374282cfe2bd50abc5025b3d125d8b