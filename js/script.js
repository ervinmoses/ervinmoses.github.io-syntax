document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Custom Dropdowns
    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const select = wrapper.querySelector('.custom-select');
        const trigger = wrapper.querySelector('.custom-select-trigger');
        const options = wrapper.querySelectorAll('.custom-option');

        // Toggle dropdown open/close when clicking the trigger
        trigger.addEventListener('click', function() {
            // Close any other open dropdowns first
            document.querySelectorAll('.custom-select').forEach(s => {
                if (s !== select) s.classList.remove('open');
            });
            select.classList.toggle('open');
        });

        // Change text when an option is selected
        options.forEach(option => {
            option.addEventListener('click', function() {
                trigger.textContent = this.textContent; // Update text
                select.classList.remove('open'); // Close menu
            });
        });
    });

    // Close dropdowns if the user clicks anywhere outside of them
    window.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select-wrapper')) {
            document.querySelectorAll('.custom-select').forEach(s => {
                s.classList.remove('open');
            });
        }
    });

    const launchArBtn = document.getElementById("launch-ar");
    const closeArBtn = document.getElementById("close-ar");
    const arContainer = document.getElementById("ar-container");
    const audioNarration = document.getElementById("product-audio");

    if (launchArBtn) {
        launchArBtn.addEventListener("click", () => {
            arContainer.style.display = "block";
            // Play audio narration with a clear purpose to describe the product when AR launches
            if(audioNarration) audioNarration.play(); 
        });
    }

    if (closeArBtn) {
        closeArBtn.addEventListener("click", () => {
            arContainer.style.display = "none";
            if(audioNarration) audioNarration.pause();
        });
    }
});