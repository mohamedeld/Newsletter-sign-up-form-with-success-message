const input = document.querySelector("#email");
const submitBtn = document.querySelector("button");
const errorMessage = document.querySelector(".error_message");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "" || !input.value.includes("@")) {
    input.classList.add("error");
    errorMessage.style.display = "block";
    return;
  } else {
    input.classList.remove("error");
    errorMessage.style.display = "none";
    submitBtn.classList.add("new_color");
  }
});
