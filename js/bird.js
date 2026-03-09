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

    <p>
        <strong>${translations[lang]?.diet || "Diet"}:</strong>
        ${dietText}
    </p>

    <p>
        <strong>${translations[lang]?.habitat || "Habitat"}:</strong>
        ${habitatText}
    </p>
</div>

<div class="bird-img-container">

    <img src="${bird.images[0]}" id="birdSlider" class="bird-detail-img">

    <button class="arrow arrow-left">&#10094;</button>
    <button class="arrow arrow-right">&#10095;</button>

</div>
`;
let index = 0;

const img = document.getElementById("birdSlider");
const left = detail.querySelector(".arrow-left");
const right = detail.querySelector(".arrow-right");

right.addEventListener("click", () => {
index++;
if(index >= bird.images.length) index = 0;
img.src = bird.images[index];
});

left.addEventListener("click", () => {
index--;
if(index < 0) index = bird.images.length - 1;
img.src = bird.images[index];
});
   
    const birdImg = detail.querySelector(".bird-detail-img");
if (birdImg) {
    setTimeout(() => {
        birdImg.style.opacity = 1;
        birdImg.style.transform = "translateY(0)"; 
    }, 50);
}
}

renderBirdDetail();