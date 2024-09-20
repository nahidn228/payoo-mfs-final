function makeVisibleById(id) {
  document.getElementById("add-money").classList.add("hidden");
  document.getElementById("cash-out").classList.add("hidden");
  document.getElementById("transfer-money").classList.add("hidden");
  document.getElementById("coupon").classList.add("hidden");
  document.getElementById("pay-bill").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");

  //visible form
  document.getElementById(id).classList.remove("hidden");
}

function inputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}
