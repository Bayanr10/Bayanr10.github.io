document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('recent-movies-container');

    Papa.parse('assets/letterboxd/reviews.csv', {
        download: true,
        header: true,
        complete: function(results) {
            let movies = results.data;
            
            // Sort movies by 'Watched Date' in descending order to get the most recent ones first
            movies.sort((a, b) => new Date(b['Watched Date']) - new Date(a['Watched Date']));

            // Take the first 5 recent movies
            const recentMovies = movies.slice(0, 10);

            // Create a list to hold the movie entries
            const moviesList = document.createElement('ul');

            // Iterate through the recent movies and create HTML for each
            recentMovies.forEach(movie => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h4>${movie.Name} (${movie.Year})</h4>
                    <p>Rating: ${movie.Rating}/5</p>
                `;
                moviesList.appendChild(listItem);
            });

            // Append the list to the container
            moviesContainer.appendChild(moviesList);
        }
    });
});