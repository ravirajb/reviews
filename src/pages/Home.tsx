import { Box, Container } from '@chakra-ui/react';
import { MovieCard } from '../components/MovieCard';
import { Carousel } from '../components/Carousel';
import { movies } from '../data/movies';

export const Home = () => {
  const trendingMovies = movies.filter(movie => movie.trending);
  const spotlightMovies = movies.filter(movie => movie.spotlight);
  const newReleases = movies.filter(movie => movie.new);
  const forYou = movies.filter(movie => movie.forYou);

  return (
    <Box pt="20">
      <Container maxW="container.xl" px="4">
        <Carousel movies={trendingMovies} title="Trending Now" />
        <Carousel movies={spotlightMovies} title="Spotlight" />
        <Carousel movies={newReleases} title="New Releases" />
        <Carousel movies={forYou} title="For You" />
      </Container>
    </Box>
  );
};
