document
  .getElementById("btn-get-bonus")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = innerTextValueById("main-balance");
    const getCoupon = document.getElementById("get-coupon").value;
    console.log(getCoupon);

    if (getCoupon === "PHB10") {
      alert(" Hurrah !!! You have Got 10% Bonus on Your Main Balance ");

      const bonusBalance = balance * 0.1;
      const totalBalance = balance + bonusBalance;
      document.getElementById("main-balance").innerText = totalBalance;

      document.getElementById("get-coupon").value = "";
    }
  });
