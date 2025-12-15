// Select Elements
const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Variable function to update display
let count = 0;

// Helper function to update display
function updateCountDisplay(){
    countDisplay.textContent = count;

    // Change color based on value
    if(count > 0){
        countDisplay.style.color = '#4ade80';
    }else if(count < 0){
        countDisplay.style.color = '#f87171';
    }else{
        countDisplay.style.color = '#e6eef8';
    }

    //Fade effect
    countDisplay.style.opacity = 0;
    setTimeout(() => {
        countDisplay.style.opacity = 1;
    },50);

    
}

//Button Event Listeners
    incrementBtn.addEventListener('click', () => {
        count++;
        updateCountDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateCountDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateCountDisplay();
    });