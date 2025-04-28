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
