export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genres: string[];
  year: number;
  language: string;
  description: string;
  trending?: boolean;
  spotlight?: boolean;
  new?: boolean;
  forYou?: boolean;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDI3LWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 9.3,
    genres: ["Drama", "Crime"],
    year: 1994,
    language: "English",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trending: true,
    spotlight: true,
    new: false,
    forYou: true
  },
  {
    id: "2",
    title: "The Godfather",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.2,
    genres: ["Crime", "Drama"],
    year: 1972,
    language: "English",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trending: true,
    spotlight: true,
    new: false,
    forYou: true
  },
  {
    id: "3",
    title: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    year: 2008,
    language: "English",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trending: true,
    spotlight: true,
    new: false,
    forYou: true
  },
  {
    id: "4",
    title: "The Godfather: Part II",
    poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.0,
    genres: ["Crime", "Drama"],
    year: 1974,
    language: "English",
    description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    trending: true,
    spotlight: true,
    new: false,
    forYou: true
  },
  {
    id: "5",
    title: "12 Angry Men",
    poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjODItYTM5NC00ODlkLTg5ZmEtNjY4MzBlOWUyMDQ2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    rating: 8.9,
    genres: ["Drama", "Crime"],
    year: 1957,
    language: "English",
    description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    trending: true,
    spotlight: true,
    new: false,
    forYou: true
  }
];
