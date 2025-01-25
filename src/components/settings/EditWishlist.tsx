'use client';

import Navbar from "@/components/common/Navbar";
import ProductList from "@/components/products/ProductList";
import { Box } from "@chakra-ui/react";

export default function EditWishlist() {

    return (
        <Box p="6">
            <Navbar title="My Favourites (12)" />
            <ProductList />
        </Box>
    );
}
