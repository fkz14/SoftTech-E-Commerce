import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./ItemListContainer.css";
import { useNavigate } from "react-router";

const ItemCard = ({ id, image, title, description, price }) => {
  const navigate = useNavigate();
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
      <Image
        src={image}
        maxWidth={"200px"}
        maxHeight={"auto"}
        objectFit={"cover"}
        mx={"auto"}
      />
      <Box p={"4"}>
        <Heading size={"md"} marginBottom={"2"}>
          {" "}
          {title}{" "}
        </Heading>
        <Text noOfLines={"10"}>{description} </Text>
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

function ItemListContainer({products}) {
  
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 1 }} spacing={4} margin={4}>
      {products.map((product) => {
        return (
          <ItemCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </SimpleGrid>
  );
}

export default ItemListContainer;
