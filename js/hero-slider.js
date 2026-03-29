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
let heroAudio = null;
let sliderInterval = null;

function updateHero() {
    if (!featuredBirds.length) return;
    const lang = localStorage.getItem("lang") || "en";
    const bird = featuredBirds[current];

    heroImg.style.opacity = 0;
    setTimeout(() => {
        heroImg.src = bird.images[0];
        heroName.textContent = bird.name[lang] || bird.name.en;
        heroImg.style.opacity = 1;

        let playBtn = document.getElementById('hero-play-btn');
        if(!playBtn){
            playBtn = document.createElement('button');
            playBtn.id = 'hero-play-btn';
            playBtn.className = 'hero-play-btn';
            playBtn.textContent = '▶';
            heroName.appendChild(playBtn);
        } else {
            playBtn.textContent = '▶';
        }

        if(heroAudio){
            heroAudio.pause();
            heroAudio.currentTime = 0;
            heroAudio = null;
        }

        playBtn.onclick = (e) => {
            e.stopPropagation();

            if(heroAudio){
                heroAudio.pause();
                heroAudio.currentTime = 0;
                heroAudio = null;
                playBtn.textContent = '▶';
                startSlider();
                return;
            }

            stopSlider();
            if(!bird.audio) return;
            heroAudio = new Audio(bird.audio);
            playBtn.textContent = '⏹';
            heroAudio.play();
            heroAudio.onended = () => {
                playBtn.textContent = '▶';
                heroAudio = null;
                startSlider();
            };
        };
    }, 300);
}

function nextBird() {
    current++;
    if(current >= featuredBirds.length) current = 0;
    updateHero();
}

function startSlider() {
    if(sliderInterval) return;
    sliderInterval = setInterval(nextBird, 3000);
}

function stopSlider() {
    clearInterval(sliderInterval);
    sliderInterval = null;
}

heroBox.addEventListener("click", () => {
    window.location.href = "catalog.html";
});

updateHero();
startSlider();