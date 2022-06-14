let calc = prompt("Choose: /, *, -, +, **, %")
let a = prompt("Write 1st number")
let b = prompt("Write 2nd number")

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
