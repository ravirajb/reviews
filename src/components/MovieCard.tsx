import { Box, Image, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Movie } from '../data/movies';

interface MovieCardProps extends Movie {}

export const MovieCard = (movie: Movie) => {
  const { id, title, poster, rating, genres, year, language, description } = movie;

  return (
    <Link to={`/movie/${id}`}>
      <VStack
        spacing={2}
        alignItems="stretch"
        bg="white"
        borderRadius="lg"
        p={4}
        boxShadow="lg"
        transition="transform 0.2s"
        _hover={{ transform: 'translateY(-2px)' }}
      >
        <Image
          src={poster}
          alt={title}
          borderRadius="lg"
          maxH="200px"
          objectFit="cover"
        />
        <VStack spacing={1} alignItems="stretch">
          <Text fontSize="xl" fontWeight="bold" noOfLines={2}>
            {title}
          </Text>
          <HStack spacing={1}>
            <StarIcon color="yellow.500" />
            <Text color="gray.600">{rating}</Text>
          </HStack>
          <HStack spacing={2} wrap="wrap">
            {genres.map((genre) => (
              <Badge key={genre} colorScheme="blue">
                {genre}
              </Badge>
            ))}
          </HStack>
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {description}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {year} • {language}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
};
