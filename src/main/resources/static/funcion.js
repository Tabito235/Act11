const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentExpression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        switch (value) {
            case "=":
                try {
                    currentExpression = eval(currentExpression);
                } catch {
                    currentExpression = "Error";
                }
                display.value = currentExpression;
                break;

            case "x²":
                try {
                    currentExpression = Math.pow(eval(currentExpression), 2);
                } catch {
                    currentExpression = "Error";
                }
                display.value = currentExpression;
                break;

            case "√":
                try {
                    currentExpression = Math.sqrt(eval(currentExpression));
                } catch {
                    currentExpression = "Error";
                }
                display.value = currentExpression;
                break;

            case "xⁿ":
                try {
                    const base = eval(currentExpression);
                    const exponent = prompt("¿A qué potencia quieres elevar " + base + "?");
                    currentExpression = Math.pow(base, Number(exponent));
                } catch {
                    currentExpression = "Error";
                }
                display.value = currentExpression;
                break;

            case "log":
                try {
                    const valor = eval(currentExpression);
                    currentExpression = Math.log(valor);
                } catch {
                    currentExpression = "Sintax Error. Naco.";
                }
                display.value = currentExpression;
                break;

            default:
                currentExpression += value;
                display.value = currentExpression;
        }
    });
});
