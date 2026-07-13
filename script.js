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

const startTrial = document.getElementById('startTrial');

startTrial.addEventListener('click', () => {
    alert('Thank you for your interest! The free trial feature is currently under development. Please check back soon for updates.');
});