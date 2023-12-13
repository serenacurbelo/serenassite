let imagesLoaded = false;
let timeoutElapsed = false;

//ensure images loaded
window.addEventListener('load', function() {
    imagesLoaded = true;
    if (timeoutElapsed) {
        hideLoadingGraphic();
    }
});

// Ensure loading graphic displays for at least 3 seconds
setTimeout(function() {
    timeoutElapsed = true;
    if (imagesLoaded) {
        hideLoadingGraphic();
    }
}, 1800);

function hideLoadingGraphic() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    
    // Hide loading graphic
    loading.style.display = 'none';
    
    // Show the content (with optional fade-in effect)
    content.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to update styles based on time
    function updateStyles() {
      var currentTime = new Date().getHours();
      var bodyElement = document.body;
      var welcomeElement = document.getElementById('welcome');
      var h4Element = document.getElementById('nightTag'); // Use the id here

      if (currentTime >= 6 && currentTime < 18) {
        // Daytime
        bodyElement.classList.add('day-time');
        bodyElement.classList.remove('night-time');
        welcomeElement.style.display = 'grid'; // Show #welcome during daytime
        h4Element.style.display = 'none'; // Hide h4 during daytime
      } else {
        // Nighttime
        bodyElement.classList.add('night-time');
        bodyElement.classList.remove('day-time');
        welcomeElement.style.display = 'none'; // Hide #welcome during nighttime
        h4Element.style.display = 'block'; // Show h4 during nighttime
      }
    }
  
  
    // Initial update on page load
    updateStyles();
  
    // Update styles every minute (adjust as needed)
    setInterval(updateStyles, 60000);
  });
  