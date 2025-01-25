'use client';

import CategoryCarousel from "@/components/carousel/CategoryCarousel";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import SearchBar from "@/components/common/SearchBar";
import { Avatar, Box, Flex, IconButton } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";

export default function App() {

  return (
    <Box
    >
      <Flex
        justifyContent="space-between"
      >
        <Avatar
          name="Tommy"
          w="40px"
          h="40px"
        />
        <IconButton
          variant="outline"
          isRound
          aria-label="cart"
          icon={<IoCartOutline />}
        />
      </Flex>
      <SearchBar />
      <CategoryCarousel />
      <ProductCarousel
        title="Top Sellings"
      />
      <ProductCarousel
        title="New In"
      />
    </Box>
  );
}
