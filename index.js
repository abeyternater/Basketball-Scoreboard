let homepoints = document.getElementById("homepoints")
homepoints.innerText = 0
let guestpoints = document.getElementById("guestpoints")
guestpoints.innerText = 0
let homeScore = 0
let guestScore = 0

function add1home(){
    homeScore += 1
    homepoints.textContent = homeScore
}
function add2home(){
    homeScore += 2
    homepoints.textContent = homeScore
}
function add3home(){
    homeScore += 3
    homepoints.textContent = homeScore

}
function add1guest(){
    guestScore += 1
    guestpoints.textContent = guestScore
}
function add2guest(){
    guestScore += 2
    guestpoints.textContent = guestScore
}
function add3guest(){
    guestScore += 3
    guestpoints.textContent = guestScore
}