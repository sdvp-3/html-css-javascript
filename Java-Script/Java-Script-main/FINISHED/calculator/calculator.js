 let calculation = "";
      const operators = ["+", "-", "*", "/"];

      function addTocalculat(value) {
        const lastChart = calculation[calculation.length - 1];

        if (operators.includes(value) && operators.includes(lastChart)) {
          calculation = calculation.slice(0, -1) + value;

          document.querySelector(".js-showcalculation").innerHTML = calculation;

          updateCalculation();

          return;
        }

        if (calculation === "" && operators.includes(value)) {
          return;
        }

        if (value === "=") {
          if (calculation !== "") {
            try {
              calculation = String(eval(calculation));
            } catch (error) {
              calculation = "Error";
            }
          }
        } else if (value === "C") {
          calculation = "";
        } else if (value === "backSpace") {
          calculation = calculation.slice(0, -1);
        } else {
          calculation += value;
        }
        document.querySelector(".js-showcalculation").innerHTML =
          calculation || "0";

        updateCalculation();
      }

      function updateCalculation() {
        document.querySelector(".js-plus").classList.remove("is-on-p");
        document.querySelector(".js-minus").classList.remove("is-on-m");
        document.querySelector(".js-times").classList.remove("is-on-t");
        document.querySelector(".js-divide").classList.remove("is-on-d");

        const lastChar = calculation[calculation.length - 1];
        if (lastChar === "+")
          document.querySelector(".js-plus").classList.add("is-on-p");
        if (lastChar === "-")
          document.querySelector(".js-minus").classList.add("is-on-m");
        if (lastChar === "*")
          document.querySelector(".js-times").classList.add("is-on-t");
        if (lastChar === "/")
          document.querySelector(".js-divide").classList.add("is-on-d");
      }