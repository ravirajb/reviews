import { Box, Container, Heading, VStack, HStack } from '@chakra-ui/react';
import { MovieCard } from '../components/MovieCard';
import { movies } from '../data/movies';

const getMoviesByLanguage = (language: string) => {
  return movies.filter((movie) => movie.language === language);
};

export const Languages = () => {
  const languages = ['Telugu', 'Hindi', 'English', 'Tamil', 'Kannada', 'Malayalam'];

  return (
    <Box pt="20">
      <Container maxW="container.xl" px="4">
        <Heading mb="8">Movies by Language</Heading>
        
        <VStack spacing="8" align="stretch">
          {languages.map((language) => (
            <Box key={language}>
              <Heading size="md" mb="4">{language}</Heading>
              <HStack spacing="4" flexWrap="wrap">
                {getMoviesByLanguage(language).map((movie) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
