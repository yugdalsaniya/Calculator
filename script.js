document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const inputValue = document.getElementById("user-input");
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const inputValue = document.getElementById("user-input");
        let lastValue = inputValue.innerText.slice(-1);

        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            try {
                inputValue.innerText = eval(inputValue.innerText);
            } catch (error) {
                inputValue.innerText = "Error";
            }
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else {
            if (!isNaN(lastValue) || lastValue === ".") {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});
