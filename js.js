
let juegosContainer = document.getElementById('juegos-container');

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5483566f12msh6f1d501eeb7d85bp1a87cfjsna66cdb6faff6',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

async function fetchData(url) {
	try {
	  const response = await fetch(url);
	  if (!response.ok) {
		throw new Error('No se pudo realizar el llamado');
	  }
	  const result = await response.json();
	  mostrarJuegos(result); 
	} catch (error) {
	  console.error('Error al obtener los datos:', error);
	}
  }

  function mostrarJuegos(juegos) {
	const juegosContainer = document.getElementById('juegos-container');
	let juegosHTML = '';
  
	juegos.forEach(juego => {
	  juegosHTML += `
		<div class="juego">
		  <h2>${juego.title}</h2>
		  <p>${juego.short_description}</p>
		  <img src=${juego.thumbnail}> <br>
		  <a href="${juego.game_url}">Más información</a>
		</div>
	  `;
	});
  
	juegosContainer.innerHTML = juegosHTML;
  }
  

fetchData(url)

