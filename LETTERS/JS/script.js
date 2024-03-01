document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('#_letters .letter');

    letters.forEach((letter) => {
        letter.addEventListener('click', () => {
            letter.classList.toggle('active');
        });
    });
});
