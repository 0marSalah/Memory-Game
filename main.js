// Make Hello Message
let pop = document.querySelector(".helloMessage")
let nameValue = document.querySelector(".helloMessage input[type=\"text\"]")
let submitBtn = document.querySelector(".helloMessage input[type=\"submit\"]")
let spn = document.querySelector(".name span")
submitBtn.addEventListener("click", () => {
  spn.textContent = nameValue.value
  pop.style = "display:none"
})
nameValue.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    spn.textContent = nameValue.value
  pop.style = "display:none"
  }
})