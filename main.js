// global 
let tries = document.querySelector(".tries span")
let timeEnd = document.getElementById("time-end")

// Make Hello Message
let pop = document.querySelector(".helloMessage")
let nameValue = document.querySelector(".helloMessage input[type=\"text\"]")
let submitBtn = document.querySelector(".helloMessage input[type=\"submit\"]")
let spn = document.querySelector(".name span")

// -----------------end of messsage -----------------
let duration = 1000
// Shuffling Blocks
let blocksContainer = document.querySelector("section")

// get array of block
let blocks = Array.from(blocksContainer.children)

// create array of range for shuffle process
let ORange = [...Array(blocks.length).keys()]
// let ORange = Array.from(Array(blocks.length).keys())
shuffle(ORange)


// --- create Flip block Function
function flipBlock(selectedBlock) {
  // add is-flipped class
  selectedBlock.classList.add("is-flipped")

  // get all flipped blocks
  let allflipped = document.querySelectorAll(".is-flipped")

  // two flipped open condition
  if (allflipped.length === 2) {
    // stop clicking function
    stopClicking()

    // matched two blocks function
    match(allflipped[0], allflipped[1])
  }
}

// -------------- Stop Clicking Function ------------------
function stopClicking() {
  // Add class no clickind to section
  blocksContainer.classList.add("no-clicking")

  setTimeout((e)=> {
    // remove no clicking class
    blocksContainer.classList.remove("no-clicking")
  }, duration)
}

// ---------------------- Matched two blocks function ------------------
function match(one, two) {
  if (one.dataset.technology === two.dataset.technology) {

    one.classList.remove("is-flipped")
    two.classList.remove("is-flipped")

    one.classList.add("has-match")
    two.classList.add("has-match")

  } else {

    tries.innerHTML = parseInt(tries.innerHTML) + 1

    setTimeout(() => {

      one.classList.remove('is-flipped');
      two.classList.remove('is-flipped');

    }, duration);

  }

}

blocks.forEach((block, index) => {
  // Add Order properity to block
  block.style.order = ORange[index];

  //  Tigger Flip block fun on click
  block.onclick = function () {
    flipBlock(block)
  }
});

// -------------------- create Shuffle Function -----------------------
function shuffle(array) {
  let current = array.length,
      temp,
      random;
  
  while(current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current)

    // decrease current
    current--

    // [1] save currrent value in temporary box
    temp = array[current]

    // ---------- swaping process --------------
    // [2] let current value = random value
    array[current] = array[random]

    // [3] let random element = temp value
    array[random] = temp

  }

  return array
}

// ------------------ Start Create the Timer ----------------------------------
let timer = document.querySelector("header .timer span")

let second = 180
function minutsPass() {

  let minuts = Math.floor(second / 60)

  timer.innerHTML = minuts + " : " + second % 60
  if (second > 0) {
    second--
  } else {
    timeEnd.style = "width: 100vw; height: 100vh; z-index: 10000; font-size: 50px;"
    numberOfTries = tries.innerHTML
    // console.log(numberOfTries)
  }
}
// ------------------ End Create the Timer ----------------------------------

// ------------ Satrt Message -------------------
submitBtn.addEventListener("click", () => {
  spn.textContent = nameValue.value
  pop.style = "display:none"
  blocks.forEach(e => {
    e.classList.add("is-flipped")
    setTimeout(() => {
      e.classList.remove("is-flipped")
    }, 2000)
    if (e.classList.contains("has-match")) {
      clearTimeout(1)
    }
  })
  setTimeout(() => {
    setInterval(() => {
  
      minutsPass()
    
    }, 1000)
  }, 2000)
})
nameValue.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    spn.textContent = nameValue.value
  pop.style = "display:none; transition: opacity 1s;"
  blocks.forEach(e => {
    e.classList.add("is-flipped")
    setTimeout(() => {
      e.classList.remove("is-flipped")
    }, 2000)
  })
  setTimeout(() => {
    setInterval(() => {
  
      minutsPass()
    
    }, 1000)
  }, 2000)  
}
})
// ---------------- End Message ----------------------