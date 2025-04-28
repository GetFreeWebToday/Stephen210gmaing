// Scroll up when clicking the up arrow
document.getElementById('upArrow').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll down when clicking the down arrow
document.getElementById('downArrow').addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// Language selection (if you want to add functionality)
document.getElementById('languageDropdown').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    alert(`Language changed to: ${selectedLanguage}`);
    // Add actual language change logic if needed
});

// Discord button functionality
document.getElementById('discordButton').addEventListener('click', () => {
    window.open('https://discord.gg/Ndb6eEPbG9', '_blank');
});

// Auto Update News
async function loadUpdates() {
    const updatesContainer = document.getElementById('updates');

    try {
        const response = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/commits');
        const commits = await response.json();

        updatesContainer.innerHTML = ''; // Clear previous updates

        commits.slice(0, 5).forEach(commit => { // Show latest 5 updates
            const message = commit.commit.message;
            const date = new Date(commit.commit.author.date).toLocaleDateString();
            
            const updateElement = document.createElement('div');
            updateElement.className = 'update-item';
            updateElement.innerHTML = `<strong>${date}:</strong> ${message}`;

            updatesContainer.appendChild(updateElement);
        });

    } catch (error) {
        console.error('Error loading updates:', error);
        updatesContainer.innerHTML = 'Could not load updates at the moment.';
    }
}

// Call it once page loads
window.onload = loadUpdates;
// End of Auto Update News
