import { Box, Flex, IconButton, Input, InputGroup, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.900', 'gray.800');
  const borderColor = useColorModeValue('gray.700', 'gray.600');

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="10"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px="4"
        h="16"
        align="center"
        justify="space-between"
      >
        <Link to="/">
          <Box
            fontSize="2xl"
            fontWeight="bold"
            color="brand.500"
            _hover={{ color: 'brand.400' }}
          >
            MovieReviews
          </Box>
        </Link>

        <Flex align="center" gap="4">
          <InputGroup maxW="md">
            <Box position="absolute" left="1rem" pointerEvents="none">
              <SearchIcon color="gray.300" />
            </Box>
            <Input
              placeholder="Search movies..."
              variant="filled"
              bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.300')}
              _hover={{ bg: useColorModeValue('whiteAlpha.300', 'whiteAlpha.400') }}
              _focus={{ boxShadow: 'none', bg: useColorModeValue('whiteAlpha.400', 'whiteAlpha.500') }}
              pl="4"
            />
          </InputGroup>

          <Box as="nav">
            <Flex align="center" gap="4">
              <Link to="/languages">
                <Box
                  fontSize="md"
                  fontWeight="medium"
                  color="gray.300"
                  _hover={{ color: 'brand.400' }}
                >
                  Languages
                </Box>
              </Link>
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle color mode"
                variant="ghost"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
