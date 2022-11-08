let num1 = parseInt(prompt("Escribe tu numero: "));
let num2 = parseInt(prompt("Escribi tu segundo numero: "));
let op = prompt(" Eliga una opción: +, -,*,/");
let r;

switch (op) {
    case "+": (num1 + num2);
        r = ("El resultado es: " + (num1 + num2));
        break;
    case "-": (num1 - num2);
        r = ("El resultado es: " + (num1 - num2));
        break
    case "/": (num1 / num2);
        r = ("El resultado es: " + (num1 / num2));
        break;
    case "*": (num1 * num2);
        r = ("El resultado es: " + (num1 * num2));
        break;
    default:
        r = ("Eliga una opción Correctamente");
}
alert(r);
