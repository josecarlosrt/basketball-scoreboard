let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let count = 0;
homeScore.textContent = count;
guestScore.textContent = count;


function plus(amount, containerId) {
    const elementToAdd = document.getElementById(containerId);
    
    if (elementToAdd) {
        const contentAsNumber = Number(elementToAdd.textContent);
        elementToAdd.textContent = contentAsNumber + amount;
    }
}

function reset() {
    count = 0;
    homeScore.textContent = count;
    guestScore.textContent = count;
}