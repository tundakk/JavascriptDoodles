class Movie{
    constructor(title, director, genre, releaseYear, rating, service){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;      
    }
}

const LegallyBlonde = new Movie("Legally Blonde", "Robert Luketic", "Comedy", 2001, 7.8); //er det muligt at tillæg flere parametre? både comedy og romance fx.
const CountOfMonteCristo = new Movie("the Count of Monte Cristo", "Emmett J. Flynn", "Drama", 1922, 9.8);

function getOverview(movie) {
    console.log(`${movie.title}, a ${movie.genre} film directed by ${movie.director} was released in ${movie.releaseYear}. it received a rating of ${movie.rating} `);
}

console.log(LegallyBlonde);
getOverview(LegallyBlonde);
getOverview(CountOfMonteCristo);