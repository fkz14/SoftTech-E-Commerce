import { useState } from "react";
import { Box, Heading, Image, SimpleGrid, Text, Spinner, Center } from "@chakra-ui/react";
import "./ItemListContainer.css";
import { useNavigate } from "react-router";

const ItemCard = ({ id, image, title, description, price }) => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"black"}
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        borderColor: "green",
      }}
      onClick={() => navigate(`/item/${id}`)}
      cursor={"pointer"}
    >
      <Box position="relative" minH="200px" display="flex" alignItems="center" justifyContent="center">
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
            <Spinner size="lg" color="teal.400" thickness="4px" />
          </Center>
        )}
        <Image
          src={image}
          maxWidth={"200px"}
          maxHeight={"200px"}
          objectFit={"contain"}
          mx={"auto"}
          bg="white"
          borderRadius="md"
          onLoad={() => setImgLoaded(true)}
          display={imgLoaded ? "block" : "none"}
        />
      </Box>
      <Box p={"4"}>
        <Heading size={"md"} marginBottom={"2"}>
          {title}
        </Heading>
        <Text noOfLines={3}>{description}</Text>
        <Text
          fontSize={"18px"}
          backgroundColor={"black"}
          color={"white"}
          display={"inline"}
          borderRadius={"lg"}
          padding={"0.5"}
        >
          ${price}
        </Text>
      </Box>
    </Box>
  );
};

function ItemListContainer({ products }) {
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 1 }} spacing={4} margin={4}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          image={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </SimpleGrid>
  );
}

export default ItemListContainer;