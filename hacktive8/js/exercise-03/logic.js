function createNodeTD(text)
{
	td = document.createElement('td');
	td.appendChild(document.createTextNode(text));
	return td;
}

function setStyle(el)
{
	if(el.getAttribute('data-link') == 'null')
	{
		el.style.cursor = 'default';
		el.style.color = 'grey';
	}
	else
	{
		el.style.cursor = 'pointer';
		el.style.color = 'blue';
	}

}

function fill(page)
{
	if(page == 'null')
		return;

	var tbody = document.getElementsByTagName('tbody')[0];

	fetch(page)
	.then( res => res.json())
	.then( json =>
			{
				while (tbody.lastChild) tbody.removeChild(tbody.lastChild);

				el = document.getElementById('page_prev');
				el.setAttribute('data-link',json.previous);
				setStyle(el);

				el = document.getElementById('page_next');
				el.setAttribute('data-link',json.next);
				setStyle(el);

				json.results.forEach(function(item)
				{

					tr = document.createElement('tr');
					tr.appendChild(createNodeTD(item.name));
					tr.appendChild(createNodeTD(item.rotation_period));
					tr.appendChild(createNodeTD(item.orbital_period));
					tr.appendChild(createNodeTD(item.diameter));
					tr.appendChild(createNodeTD(item.climate));
					tr.appendChild(createNodeTD(item.gravity));
					tr.appendChild(createNodeTD(item.population));

					tbody.appendChild(tr);
				});
			});
	
}

window.onload = function()
{
	fill('https://swapi.co/api/planets/');
	sound = new Audio();
	sound.src = "https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star Wars Theme Song By John Williams.mp3";
	sound.play();
}
