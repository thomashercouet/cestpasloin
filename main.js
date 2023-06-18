const scanButton = document.getElementById('scanButton');
const resultsDiv = document.getElementById('results');

scanButton.addEventListener('click', () => {
    scanButton.textContent = "Je cherche..."; // Changer le texte ici
    scanButton.style.backgroundColor = "#753815"; // Change la couleur lors de la requête
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchWikipediaArticles(position.coords)
            .then(articles => {
                return Promise.all(articles.map(fetchArticleDetails));
            })
            .then(articles => {
                displayCards(articles);
                scanButton.textContent = "Scanner"; // Remettre le texte d'origine ici
                scanButton.style.backgroundColor = "#1976d2"; // Retour à la couleur d'origine après la requête
            });
        });
    } else {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
        scanButton.textContent = "Scanner"; // Remettre le texte d'origine ici aussi en cas d'erreur
        scanButton.style.backgroundColor = "#1976d2"; // Retour à la couleur d'origine après la requête
    }
});

function fetchWikipediaArticles(coords) {
    const url = `https://fr.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${coords.latitude}|${coords.longitude}&gsradius=1000&gslimit=100&format=json&origin=*`;

    return fetch(url)
    .then(response => response.json())
    .then(data => {
        return data.query.geosearch;
    });
}

function fetchArticleDetails(article) {
    const url = `https://fr.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&exlimit=max&exchars=2000&piprop=thumbnail&pithumbsize=400&format=json&origin=*&pageids=${article.pageid}`;

    return fetch(url)
    .then(response => response.json())
    .then(data => {
        const page = data.query.pages[article.pageid];
        article.extract = page.extract;
        article.thumbnail = page.thumbnail ? page.thumbnail.source : null;
        return article;
    });
}

function createCardForArticle(article) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const distance = document.createElement('p');
    distance.textContent = `À ${Math.round(article.dist)}m`;

    if (article.thumbnail) {
        const img = document.createElement('img');
        img.src = article.thumbnail;
        card.appendChild(img);
    }

    const extract = document.createElement('p');
    extract.textContent = article.extract;

    const link = document.createElement('a');
    link.textContent = 'Article complet';
    link.href = `https://fr.wikipedia.org/?curid=${article.pageid}`;
    link.target = '_blank';

    card.appendChild(title);
    card.appendChild(distance);
    card.appendChild(extract);
    card.appendChild(link);

    return card;
}

function displayCards(articles) {
    // Clear the results div
    resultsDiv.innerHTML = '';

    articles.sort((a, b) => a.dist - b.dist);
    
    // Create and append a card for each article
    articles.forEach(article => {
        const card = createCardForArticle(article);
        resultsDiv.appendChild(card);
    });
}