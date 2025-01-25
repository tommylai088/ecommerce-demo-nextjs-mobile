'use client';

import Categories from "@/components/common/Categories";
import Navbar from "@/components/common/Navbar";
import { Box } from "@chakra-ui/react";

export default function CateogiesPage() {

    return (
        <Box
        >
            <Navbar />
            <Categories />
        </Box>
    );
}
