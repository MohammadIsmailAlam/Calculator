let result = document.getElementById("result");

function display(num) {
    result.value += num;
}
function Calculate() {
    result.value = eval(result.value);
}
function Clear() {
    result.value = "";
}
function Delete() {
    result.value = result.value.slice(0,-1);
}
