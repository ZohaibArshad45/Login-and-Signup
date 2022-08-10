// theme change by button
const backgroundBtn = document.querySelector(".background-btn");
const homeBanner = document.querySelector(".home-banner");

backgroundBtn.onclick = function () {
  homeBanner.classList.toggle("active");
};


//username check valid or not
const usernameInput = document.getElementById("username-input");
const validUsernameMark = document.getElementById("valid-username-mark");
const invalidUsernameMark = document.getElementById("invalid-username-mark");
const signupBtn = document.getElementById("signup-btn");

usernameInput.addEventListener("keyup", async () => {
     if (usernameInput.value.length >= 3) {
    const res = await fetch("/username/validation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
      }),
    });
    const isValid = await res.text();
    if (isValid==='false') {
      invalidUsernameMark.style.display = "block";
      validUsernameMark.style.display = "none";
    } else {
      validUsernameMark.style.display = "block";
      invalidUsernameMark.style.display = "none";
    }
   }
   else{
      invalidUsernameMark.style.display = "block";
      validUsernameMark.style.display = "none";

   }
  });
