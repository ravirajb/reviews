import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Movie } from '../data/movies';

interface CarouselProps {
  movies: Movie[];
  title: string;
}

export const Carousel = ({ movies, title }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handlePrev = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box>
      <Box fontSize="xl" fontWeight="bold" color="brand.500" mb="4">{title}</Box>
      <Flex
        overflow="hidden"
        position="relative"
        minH="300px"
      >
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          size="sm"
          variant="ghost"
          position="absolute"
          left="4"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          display={isMobile ? "none" : "flex"}
        />
        <Flex
          transition="transform 0.3s ease-in-out"
          transform={`translateX(-${currentIndex * 100}%)`}
          minW={`calc(${movies.length} * 100%)`}
        >
          {movies.map((movie, index) => (
            <Box
              key={movie.id}
              minW="100%"
              p="4"
            >
              <Link to={`/movie/${movie.id}`}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg="white"
                  position="relative"
                >
                  <Box
                    h="200px"
                    bg="gray.100"
                    position="relative"
                  >
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box p="6">
                    <Box display="flex" alignItems="center" mb="2">
                      <Box fontSize="2xl" fontWeight="bold" mr="2">
                        {movie.title}
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        color="yellow.500"
                        fontSize="xl"
                      >
                        {movie.rating}
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      gap="2"
                      mb="4"
                    >
                      {movie.genres.map((genre) => (
                        <Box
                          key={genre}
                          px="2"
                          py="1"
                          borderRadius="full"
                          bg="gray.100"
                          fontSize="sm"
                        >
                          {genre}
                        </Box>
                      ))}
                    </Box>
                    <Box fontSize="sm" color="gray.600" mb="4">
                      {movie.year} • {movie.language}
                    </Box>
                    <Box fontSize="sm" color="gray.600" noOfLines={3}>
                      {movie.description}
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Flex>
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          size="sm"
          variant="ghost"
          position="absolute"
          right="4"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          display={isMobile ? "none" : "flex"}
        />
      </Flex>
      {isMobile && (
        <Flex
          position="absolute"
          top="50%"
          left="0"
          right="0"
          transform="translateY(-50%)"
          justify="space-between"
          width="100%"
          px="4"
        >
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            size="sm"
            variant="ghost"
          />
        </Flex>
      )}
    </Box>
  );
};
