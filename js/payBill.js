document
  .getElementById("btn-pay-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const balance = innerTextValueById("main-balance");
    const PayBillAccountNumber = inputValueById("input-payBill-ac");
    const PayBillAmount = inputValueById("payBill-amount");
    const PayBillAmountPin = inputValueById("payBill-amount-pin");


    if (isNaN(PayBillAccountNumber) || isNaN(PayBillAmount)) {
      alert("Failed To Pay Bill ! Type a valid Number or amount");
      return;
    }

    if (PayBillAmount > balance) {
      alert("You do not have enough balance to Pay this Bill !");
      return;
    }

    if (PayBillAmountPin === 1234) {
      const remainBalance = balance - PayBillAmount;
      document.getElementById("main-balance").innerText = remainBalance;

      document.getElementById("input-payBill-ac").value = "";
      document.getElementById("payBill-amount").value = "";
      document.getElementById("payBill-amount-pin").value = "";
    } else {
      alert("Failed to Pay this Bill  !!! Please try Again Later... ");
    }


  });
