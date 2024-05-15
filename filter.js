
const applyFilterBtn = document.getElementById('apply-filter');


const yearFilter = document.getElementById('year-filter');
const genreFilter = document.getElementById('genre-filter');
const typeFilter = document.getElementById('type-filter');

function filterAnime() {
    const year = yearFilter.value;
    const genre = genreFilter.value;
    const type = typeFilter.value;


    const animeItems = document.querySelectorAll('.anime-item');

    animeItems.forEach(item => {
        const itemYear = item.getAttribute('year-filter');
        const itemGenre = item.getAttribute('genre-filter').split(' '); 
        const itemType = item.getAttribute('type-filter');

       
        if ((year === 'all' || itemYear === year) &&
            (genre === 'all' || itemGenre.includes(genre)) && 
            (type === 'all' || itemType === type)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'; 
        }
    });
}


applyFilterBtn.addEventListener('click', filterAnime);
