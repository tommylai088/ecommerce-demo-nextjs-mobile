'use client';

import { Avatar, Box, Button, Flex, FormControl, Grid, GridItem, Icon, IconButton, Input, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import ProductList from "@/components/products/ProductList";

export default function EditWishlist() {

    return (
        <Box p="6">
            <Navbar title="My Favourites (12)" />
            <ProductList />
        </Box>
    );
}
