document
  .getElementById("btn-send-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const balance = innerTextValueById("main-balance");
    const transferAccountNumber = inputValueById("input-transfer-ac");
    const transferAmount = inputValueById("input-transferAmount");
    const transferAmountPin = inputValueById("input-transfer-pin");

    if (isNaN(transferAccountNumber) || isNaN(transferAmount)) {
      alert("Failed To Add Money ! Type a valid Number or amount");
      return;
    }

    if (transferAmount > balance) {
      alert("You do not have enough balance !");
      return;
    }

    if (transferAmountPin === 1234) {
      const remainBalance = balance - transferAmount;
      document.getElementById("main-balance").innerText = remainBalance;

      document.getElementById("input-transfer-ac").value = "";
      document.getElementById("input-transferAmount").value = "";
      document.getElementById("input-transfer-pin").value = "";
    } else {
      alert("Failed to Transfer  !!! Please try Again Later... ");
    }
  });
