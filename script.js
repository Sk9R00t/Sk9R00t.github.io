window.onload = function() {
    const music = document.getElementById('birthdayMusic');
    const toggleBtn = document.getElementById('musicToggle');
    let isPlaying = localStorage.getItem('musicPlaying') !== 'false';

    function updateButton() {
        toggleBtn.textContent = isPlaying ? "🔊 Music Off" : "🔇 Music On";
    }

    if (!isPlaying) {
        music.pause();
    } else {
        music.play().catch(() => {});
    }
    updateButton();

    toggleBtn.onclick = function() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            music.play();
        } else {
            music.pause();
        }
        localStorage.setItem('musicPlaying', isPlaying);
        updateButton();
    };
};