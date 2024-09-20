document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = inputValueById("mobile-number");
    const pinNumber = inputValueById("pin-number");

    if (mobileNumber === 123456789 && pinNumber === 1234) {
      window.location.href = "../home.html";
    } else alert("Wrong Mobile Number Or Pin Number !!!");
  });

