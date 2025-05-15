import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

const ItemDetailContainer = ({ product }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex
          align="center"
          justify="center"
          minH={{ base: '300px', sm: '400px', lg: '500px' }}
          maxH={{ base: '300px', sm: '400px', lg: '500px' }}
          position="relative"
          w="100%"
        >
          {!imgLoaded && (
            <Center
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex={1}
              bg="whiteAlpha.700"
              borderRadius="md"
            >
              <Spinner size="xl" color="teal.400" thickness="6px" />
            </Center>
          )}
          <Image
            rounded={'md'}
            alt={'product image'}
            src={product.images?.[0]}
            fit={'contain'}
            align={'center'}
            w="100%"
            h={{ base: '300px', sm: '400px', lg: '500px' }}
            maxH={{ base: '300px', sm: '400px', lg: '500px' }}
            border={"2px"}
            borderColor={"black"}
            objectFit="contain"
            bg="white"
            onLoad={() => setImgLoaded(true)}
            display={imgLoaded ? "block" : "none"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.title}
            </Heading>
            <Text
              color={"white"}
              fontWeight={300}
              fontSize={'2xl'}
              backgroundColor={"black"}
              display={"inline"}
              borderRadius={"5"}
              padding={"0.5"}
              >
              ${product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {product.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                  </Text>{' '}
                  {product.rating}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Stock:
                  </Text>{' '}
                  {product.stock}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    SKU:
                  </Text>{' '}
                  {product.sku}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Weight:
                  </Text>{' '}
                  {product.weight}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetailContainer;