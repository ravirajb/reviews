import { Box, Container, Heading, VStack, HStack, Text, Badge, Image, SimpleGrid, Card, CardBody, CardHeader, CardFooter, Button, useColorModeValue, Flex, Grid, GridItem, Divider, Stack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import { Movie } from '../data/movies';
import { useEffect, useState } from 'react';
import { movies } from '../data/movies';

interface MovieDetailsProps {
  movie: Movie;
}

interface Review {
  author: string;
  content: string;
  rating: number;
}

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const selectedMovie = movies.find(m => m.id === id);
    if (selectedMovie) {
      setMovie(selectedMovie);
      setReviews(getMockReviews(selectedMovie));
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Box pt="20">
      <Container maxW="container.xl" px="4">
        <VStack spacing="8" align="stretch">
          {/* Hero Section */}
          <Box>
            <HStack justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Heading size="2xl" mb="4">
                  {movie.title}
                </Heading>
                <HStack spacing="2" mb="4">
                  {Array.from({ length: Math.floor(movie.rating) }).map((_, i) => (
                    <StarIcon key={i} color="yellow.500" />
                  ))}
                  <Text color="gray.600">{movie.rating}</Text>
                </HStack>
                <Text color="gray.600" mb="4">
                  {movie.year} • {movie.language} • {movie.genres.join(', ')}
                </Text>
              </Box>
              <Box>
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  maxW="300px"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </Box>
            </HStack>
          </Box>

          {/* Overview */}
          <Box>
            <Heading size="lg" mb="4">Overview</Heading>
            <Text fontSize="lg" color="gray.600">
              {movie.description}
            </Text>
          </Box>

          {/* Reviews */}
          <Box>
            <Heading size="lg" mb="4">Reviews</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <HStack>
                      <Text fontWeight="bold">{review.author}</Text>
                      {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                        <StarIcon key={i} color="yellow.500" />
                      ))}
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Text>{review.content}</Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Media */}
          <Box>
            <Heading size="lg" mb="4">Media</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
              <Card>
                <CardBody>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dummy_video_id"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Behind the scenes"
                    borderRadius="lg"
                  />
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Production still"
                    borderRadius="lg"
                  />
                </CardBody>
              </Card>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const getMockReviews = (movie: Movie): Review[] => {
  return [
    {
      author: "John Doe",
      content: "A masterpiece of storytelling. The performances are outstanding and the direction is flawless.",
      rating: 5
    },
    {
      author: "Jane Smith",
      content: "The cinematography is breathtaking and the score is memorable. A must-watch!",
      rating: 5
    },
    {
      author: "Bob Johnson",
      content: "A powerful and emotional journey. The characters are well-developed and the pacing is perfect.",
      rating: 4
    }
  ];
};
