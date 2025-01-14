'use client';

import Categories from "@/components/common/Categories";
import Navbar from "@/components/common/Navbar";
import { Box } from "@chakra-ui/react";

export default function SearchPage() {

    return (
        <Box
        p="6"
        >
            <Navbar isShowSearchBar />
            <Categories search />
        </Box>
    );
}
