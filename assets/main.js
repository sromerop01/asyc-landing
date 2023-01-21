const API = "https://rickandmortyapi.com/api";

const content = null || document.getElementById("content");

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ffda2f9d8fmshca32cdf3142556ap1ef41djsncad822783e27',
// 		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
// 	}
// };

async function fetchData(urlApi){
    const response= await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () =>{
    try {
       const characters = await fetchData(`${API}/character`)
       let view = `
        ${characters.results.map(character => `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${character.image}" alt="${character.name}" class="w-full">
            </div>
            <div class=" flex flex-col relative justify-between bg-orange-600 p-3">
                    <div class="section">
                        <h1 class="font-extrabold text-gray-50 sm:text-2xl md:text-2xl">${character.name}</h1>
                        <span class="status">${character.status} - ${character.species}</span>
                    </div>

                    <div class="section">
                        <h3 class="last-location">Last known location:</h3>
                        <span class="location">${character.location.name}</span>
                    </div>
            </div>
        </div>
        `).join('')}
       `;
       content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();