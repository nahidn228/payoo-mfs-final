document.getElementById("show-addMoney").addEventListener("click", function () {
  makeVisibleById("add-money");
});
document.getElementById("show-cashOut").addEventListener("click", function () {
  makeVisibleById("cash-out");
});
document.getElementById("show-transfer").addEventListener("click", function () {
  makeVisibleById("transfer-money");
});
document.getElementById("show-bonus").addEventListener("click", function () {
  makeVisibleById("coupon");
});
document.getElementById("show-payBill").addEventListener("click", function () {
  makeVisibleById("pay-bill");
});
document
  .getElementById("show-transactions")
  .addEventListener("click", function () {
    makeVisibleById("transaction-history");
  });
