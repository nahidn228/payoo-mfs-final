document
  .getElementById("btn-cashOut")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const balance = innerTextValueById("main-balance");
    const agentNumber = inputValueById("agent-number");
    const cashOutAmount = inputValueById("cashOut-amount");
    const cashOutPin = inputValueById("cashOut-pin");
    if (isNaN(agentNumber) || isNaN(cashOutAmount)) {
      alert("Failed To Add Money ! Type a valid Number or amount");
      return;
    }

    if (cashOutAmount > balance) {
      alert("You do not have enough balance !");
      return;
    }

    if (cashOutPin === 1234) {
      const mainBalance = balance - cashOutAmount;

      document.getElementById("main-balance").innerText = mainBalance;

      document.getElementById("agent-number").value = "";
      document.getElementById("cashOut-amount").value = "";
      document.getElementById("cashOut-pin").value = "";
    } else {
      alert("Failed to Cash Out !!! Please try Again Later... ");
    }
  });
