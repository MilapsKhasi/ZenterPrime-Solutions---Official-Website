// Simple Realtime Reactive Interactive Processing Calculator Model
const billSlider = document.getElementById('billCount');
const countValueLabel = document.getElementById('billCountVal');
const hoursDisplay = document.getElementById('hoursSaved');

function recomputeSavings() {
    const billCount = parseInt(billSlider.value, 10);
    countValueLabel.textContent = billCount.toLocaleString();

    // Standard baseline formula tracking: Approx 0.15 hours saved per logged item
    const computedSavings = (billCount * 0.15).toFixed(1);
    hoursDisplay.textContent = computedSavings;
}

// Toggle Pricing
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const monthlyPrices = document.querySelectorAll(".monthly-price");
const yearlyPrices = document.querySelectorAll(".yearly-price");
const durations = document.querySelectorAll(".billing-duration");

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    monthlyPrices.forEach(price=>{
        price.style.display="inline";
    });

    yearlyPrices.forEach(price=>{
        price.style.display="none";
    });

    durations.forEach(text=>{
        text.textContent="/month";
    });

});

yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    monthlyPrices.forEach(price=>{
        price.style.display="none";
    });

    yearlyPrices.forEach(price=>{
        price.style.display="inline";
    });

    durations.forEach(text=>{
        text.textContent="/year";
    });

});