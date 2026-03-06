const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const bird = birds.find(b => b.id === id);
const detail = document.getElementById("birdDetail");

function renderBirdDetail() {
    const lang = localStorage.getItem("lang") || "en";
    if (!bird || !detail) return;

    const dietText = (bird.diet || []).map(d => translations[lang]?.[d] || d).join(", ");
    const habitatText = (bird.habitat || []).map(h => translations[lang]?.[h] || h).join(", ");

    detail.innerHTML = `
        <div class="bird-info-container">
            <h1>${bird.name[lang] || bird.name.en}</h1>
            <p>${bird.description[lang] || bird.description.en}</p>
            <p><strong>${translations[lang]?.diet || "Diet"}:</strong> ${dietText}</p>
            <p><strong>${translations[lang]?.habitat || "Habitat"}:</strong> ${habitatText}</p>
        </div>

        <div class="bird-img-container">
            <img src="${bird.image}" alt="${bird.name[lang] || bird.name.en}" class="bird-detail-img">
        </div>
    `;
   
    const birdImg = detail.querySelector(".bird-detail-img");
if (birdImg) {
    setTimeout(() => {
        birdImg.style.opacity = 1;
        birdImg.style.transform = "translateY(0)"; 
    }, 50);
}
}

renderBirdDetail();