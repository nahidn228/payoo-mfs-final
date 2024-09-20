document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const balance = innerTextValueById("main-balance");
    const addMoney = inputValueById("input-add-money");
    const bankAccount = inputValueById("input-ac-number");
    const pinNumber = inputValueById("input-pin-number");

    if (isNaN(addMoney) || isNaN(bankAccount)) {
      alert("Failed To Add Money ! Type a valid Number or amount");
      return;
    }

    if (pinNumber === 1234) {
      const totalBalance = balance + addMoney;
      document.getElementById("main-balance").innerText = totalBalance;

      document.getElementById("input-add-money").value = "";
      document.getElementById("input-ac-number").value = "";
      document.getElementById("input-pin-number").value = "";

      //add to transaction history

      // const p = document.createElement("p");
      // p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;

      // document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money !!! Please try Again Later... ");
    }
  });
