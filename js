// Generate 36 seats
const seatContainer = document.getElementById("seatContainer");
for (let i = 1; i <= 36; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.id = i;
    seatContainer.appendChild(seat);
}

const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");
const bookBtn = document.getElementById("bookBtn");
const msg = document.getElementById("msg");

let selectedSeats = [];

seatContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("seat")) return;
    if (e.target.classList.contains("booked")) return;

    e.target.classList.toggle("selected");

    const seatId = e.target.dataset.id;

    if (selectedSeats.includes(seatId)) {
        selectedSeats = selectedSeats.filter(id => id !== seatId);
    } else {
        selectedSeats.push(seatId);
    }

    updateSummary();
});

function updateSummary() {
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * movie.value;
}

bookBtn.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
        msg.style.color = "red";
        msg.innerText = "Select at least one seat!";
        return;
    }

    const booked = document.querySelectorAll(".selected");
    booked.forEach(seat => seat.classList.add("booked"));

    msg.style.color = "lime";
    msg.innerText = "Booking Successful!";

    selectedSeats = [];
    updateSummary();
});
