let index = 0;
const visibleCards = 3;

function next() {
    const cards = document.getElementById("cards");
    const total = cards.children.length;

    if (index < total - visibleCards) {
        index++;
        updateSlide();
    }
}

function prev() {
    if (index > 0) {
        index--;
        updateSlide();
    }
}

function updateSlide() {
    const cards = document.getElementById("cards");
    cards.style.transform = `translateX(-${index * 320}px)`;
}