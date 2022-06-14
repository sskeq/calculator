let calc = prompt("Выберите: /, *, -, +, **, %")
let a = prompt("Введите 1 операнд")
let b = prompt("Введите 2 операнд")

if (calc == "/") {
    alert(a / b);
}

if (calc == "*") {
    alert(+a * +b);
}

if (calc == "-") {
    alert(+a - +b);
}

if (calc == "+"){
    alert(+a + +b);
}

if (calc == "**") {
    alert(a ** b)
}

if (calc == "%") {
    alert(a % b)
}

window.location.reload()