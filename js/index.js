document.querySelectorAll('.salut').forEach(salut => {
    salut.addEventListener('click', () => {
        const card = salut.querySelector('.card');
        card.classList.toggle('flipped');
    });
});