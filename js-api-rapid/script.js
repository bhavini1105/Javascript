
let movieContainer = document.getElementById('movie-container');
let label = document.getElementById('exampleModalLabel');
let year = document.getElementById('modal-year');
let rating = document.getElementById('modal-rating');
let language = document.getElementById('modal-language');
let toast = document.getElementById('liveToastBtn');
let msg = document.getElementById('msg');
let exampleModal = document.getElementById('exampleModal');
let loadMoviesBtn = document.getElementById('loadMoviesBtn');

const movieTypes = async () => {
    const url = 'https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '70196774f8msh730cc7e62464d32p1b9cf8jsn036c130abfbb',
            'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if (result.data && result.data.movies) {
            loadMovies(result.data.movies);
        } else {
            console.error('Movies not found in the API response.');
            movieContainer.innerHTML = '<p>No movies available to display.</p>';
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        movieContainer.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
    }
};

const loadMovies = (movieData) => {
    movieContainer.innerHTML = movieData.map(movie => `
        <div class="movie">
            <button type="button" class="detailbtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <h3>${movie.title}</h3>
                <p>Year: ${movie.year}</p>
                <p>Rating: ${movie.rating}</p>
            </button>
        </div>
    `).join('');

    const movieElements = document.querySelectorAll('.movie button');
    movieElements.forEach((button, index) => {
        button.onclick = () => movieDetail(movieData[index]);
    });
};

const movieDetail = (detail) => {
    label.textContent = detail.title;
    year.textContent = `Year: ${detail.year}`;
    rating.textContent = `Rating: ${detail.rating}`;
    language.textContent = `Language: ${detail.language}`;
};

toast.onclick = () => {
    msg.style.display = 'block';

    const bootstrapModal = bootstrap.Modal.getInstance(exampleModal);
    if (bootstrapModal) {
        bootstrapModal.hide();
    }

    setTimeout(() => {
        msg.style.display = 'none';
        movieTypes();  
    }, 3000);
};



// loadMoviesBtn.addEventListener('click', () => {
//     movieTypes();
// });

// movieTypes();
