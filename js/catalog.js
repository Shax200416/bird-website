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
        const card = document.createElement("div");
        card.className = "card single-bird";
        card.innerHTML = `
            <img src="${b.image}" alt="${b.name[lang]}">
            <div class="card-content">
                <h3>${b.name[lang]}</h3>
            </div>`;
        card.onclick = () => { window.location.href = `bird.html?id=${b.id}`; };
        container.appendChild(card);
        return;
    }

    list.forEach(b => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${b.image}" alt="${b.name[lang]}">
            <div class="card-content">
                <h3>${b.name[lang]}</h3>
            </div>`;
        card.onclick = () => { window.location.href = `bird.html?id=${b.id}`; };
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

renderBirds(birds);
