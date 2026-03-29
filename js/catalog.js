let currentAudio = null;
let currentBtn = null;

const container = document.getElementById("birdContainer");
const searchInput = document.getElementById("searchInput");
const dietFilter = document.getElementById("dietFilter");
const habitatFilter = document.getElementById("habitatFilter");
const clearBtn = document.getElementById("clearFilters");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let state = {
    search: "",
    diet: "",
    habitat: ""
};

const urlParams = new URLSearchParams(window.location.search);
const focusParam = urlParams.get('focus');

if(focusParam === 'diet'){
    dietFilter.focus();
    dietFilter.style.boxShadow = '0 0 10px #4DA674';
    setTimeout(() => dietFilter.style.boxShadow = '', 2000);
    renderBirds(birds);
} else if(focusParam === 'habitat'){
    habitatFilter.focus();
    habitatFilter.style.boxShadow = '0 0 10px #4DA674';
    setTimeout(() => habitatFilter.style.boxShadow = '', 2000);
    renderBirds(birds);
} else {
    renderBirds(birds);
}

function renderBirds(list){
    container.innerHTML = "";
    const lang = localStorage.getItem("lang") || "en";

    if(list.length === 0){
        const noBird = document.createElement("div");
        noBird.id = "noBirds";
        noBird.textContent = translations[lang].no_results;
        container.appendChild(noBird);
        return;
    }

    if(list.length === 1){
        const b = list[0];
        const dietText = (b.diet || []).map(d => translations[lang]?.[d] || d).join(', ');
        const habitatText = (b.habitat || []).slice(0, 2).map(h => translations[lang]?.[h] || h).join(', ');

        const card = document.createElement("div");
        card.className = "card single-bird";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${b.images[0]}" alt="${b.name[lang]}">
                <div class="card-overlay">
                    <p class="card-diet">🍽 ${dietText}</p>
                    <p class="card-habitat">🌍 ${habitatText}</p>
                </div>
            </div>
            <div class="card-content">
                <h3>${b.name[lang]}</h3>
                <button class="play-btn" data-audio="${b.audio || ''}">▶ Listen</button>
            </div>`;

        card.addEventListener('click', () => {
            window.location.href = `bird.html?id=${b.id}`;
        });

        card.querySelector('.play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const src = e.target.dataset.audio;
            if(!src) return;

            if(currentBtn === e.target){
                currentAudio.pause();
                currentAudio.currentTime = 0;
                e.target.textContent = '▶ Listen';
                currentAudio = null;
                currentBtn = null;
                return;
            }

            if(currentAudio){
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentBtn.textContent = '▶ Listen';
            }

            currentAudio = new Audio(src);
            currentBtn = e.target;
            e.target.textContent = '⏹ Stop';
            currentAudio.play();
            currentAudio.onended = () => {
                e.target.textContent = '▶ Listen';
                currentAudio = null;
                currentBtn = null;
            };
        });

        container.appendChild(card);
        return;
    }

    list.forEach(b => {
        const dietText = (b.diet || []).map(d => translations[lang]?.[d] || d).join(', ');
        const habitatText = (b.habitat || []).slice(0, 2).map(h => translations[lang]?.[h] || h).join(', ');

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${b.images[0]}" alt="${b.name[lang]}">
                <div class="card-overlay">
                    <p class="card-diet">🍽 ${dietText}</p>
                    <p class="card-habitat">🌍 ${habitatText}</p>
                </div>
            </div>
            <div class="card-content">
                <h3>${b.name[lang]}</h3>
                <button class="play-btn" data-audio="${b.audio || ''}">▶ Listen</button>
            </div>`;

        card.addEventListener('click', () => {
            window.location.href = `bird.html?id=${b.id}`;
        });

        card.querySelector('.play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const src = e.target.dataset.audio;
            if(!src) return;

            if(currentBtn === e.target){
                currentAudio.pause();
                currentAudio.currentTime = 0;
                e.target.textContent = '▶ Listen';
                currentAudio = null;
                currentBtn = null;
                return;
            }

            if(currentAudio){
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentBtn.textContent = '▶ Listen';
            }

            currentAudio = new Audio(src);
            currentBtn = e.target;
            e.target.textContent = '⏹ Stop';
            currentAudio.play();
            currentAudio.onended = () => {
                e.target.textContent = '▶ Listen';
                currentAudio = null;
                currentBtn = null;
            };
        });

        container.appendChild(card);
    });
}

function applyFilters(){
    const lang = localStorage.getItem("lang") || "en";

    let filtered = birds.filter(b => {
        if(state.search){
            if(!b.name[lang].toLowerCase().includes(state.search))
                return false;
        }
        if(state.diet){
            if(!b.diet.includes(state.diet))
                return false;
        }
        if(state.habitat){
            if(!b.habitat.includes(state.habitat))
                return false;
        }
        return true;
    });

    renderBirds(filtered);
}

searchInput.addEventListener("input", e=>{
    state.search = e.target.value.toLowerCase();
    applyFilters();
});

dietFilter.addEventListener("change", e=>{
    state.diet = e.target.value;
    applyFilters();
});

habitatFilter.addEventListener("change", e=>{
    state.habitat = e.target.value;
    applyFilters();
});

clearBtn.addEventListener("click", ()=>{
    state = { search:"", diet:"", habitat:"" };
    searchInput.value = "";
    dietFilter.value = "";
    habitatFilter.value = "";
    renderBirds(birds);
});

const GEMINI_API_KEY = 'AIzaSyCU7tCgqsdu96TMLk9h6oBucOqtwHWSZhw';

document.getElementById('imageInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const lang = localStorage.getItem('lang') || 'en';
    const resultDiv = document.getElementById('img-search-result');
    resultDiv.textContent = translations[lang].analyzing || '🔍 Analyzing...';

    const reader = new FileReader();
    reader.onload = () => {
        const base64 = reader.result.split(',')[1];

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);

            if(data.error){
                const msg = data.error.message.split('.')[0];
                resultDiv.textContent = '❌ ' + msg;
                return;
            }

            const birdName = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim().toLowerCase();

            if(!birdName){
                resultDiv.textContent = translations[lang].could_not_identify || '❌ Could not identify the bird.';
                return;
            }

            const found = birds.find(b => {
                const enName = b.name.en.toLowerCase();
                const geminiWords = birdName.split(' ').filter(w => w.length > 2);
                const enWords = enName.split(' ');
                if(enName === birdName) return true;
                if(enName.includes(birdName) || birdName.includes(enName)) return true;
                const matchCount = geminiWords.filter(w => enWords.includes(w)).length;
                return matchCount >= 1;
            });

            if(found){
                resultDiv.innerHTML = `${translations[lang].found || '✅ Found'}: <strong>${found.name[lang]}</strong>`;
                setTimeout(() => { window.location.href = `bird.html?id=${found.id}`; }, 1200);
            } else {
                resultDiv.innerHTML = `${translations[lang].identified || '🤖 Identified'}: <strong>${birdName}</strong> — ${translations[lang].not_in_catalog || 'not in catalog yet'}.`;
                state.search = birdName.split(' ')[0];
                searchInput.value = birdName;
                applyFilters();
            }
        };
        xhr.onerror = () => {
            resultDiv.textContent = '❌ Network error';
        };
        xhr.send(JSON.stringify({
            contents: [{
                parts: [
                    { text: `This is an image of a bird. What is the English common name? Reply with ONLY the bird name, nothing else.` },
                    { inline_data: { mime_type: file.type, data: base64 } }
                ]
            }]
        }));
    };
    reader.readAsDataURL(file);
});

renderBirds(birds);