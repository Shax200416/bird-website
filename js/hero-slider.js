const featuredBirds = [
    birds.find(b => b.id === 8),
    birds.find(b => b.id === 2),
    birds.find(b => b.id === 10),
    birds.find(b => b.id === 4),
    birds.find(b => b.id === 5)
];

const heroImg = document.getElementById("hero-slider");
const heroName = document.getElementById("hero-bird-name");
const heroBox = document.getElementById("hero-box");

let current = 0;

function updateHero() {
    if (!featuredBirds.length) return;

    const lang = localStorage.getItem("lang") || "en";
    const bird = featuredBirds[current];

    heroImg.style.opacity = 0;

    setTimeout(() => {
        heroImg.src = bird.image;
        heroName.textContent = bird.name[lang] || bird.name.en;
        heroImg.style.opacity = 1;
    }, 300);
}

function nextBird() {
    current++;
    if (current >= featuredBirds.length) current = 0;
    updateHero();
}

heroBox.addEventListener("click", () => {
    window.location.href = "catalog.html";
});

updateHero();
setInterval(nextBird, 3000);