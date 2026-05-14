const display = document.getElementById("display");

// اضافه کردن مقدار
function appendValue(value) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// پاک کردن کامل
function clearDisplay() {
    display.value = "";
}

// حذف یک کاراکتر
function backspace() {
    display.value = display.value.slice(0, -1);
}

// محاسبه
function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        let result = eval(expression);

        // جلوگیری از Infinity
        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch {

        display.value = "Error";

    }
}

// پشتیبانی کیبورد
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // اعداد و عملگرها
    if (
        "0123456789+-*/().".includes(key)
    ) {
        appendValue(key);
    }

    // Enter
    else if (key === "Enter") {
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        backspace();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }
});