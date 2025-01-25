
import Navbar from "@/components/common/Navbar";
import ProductList from "@/components/products/ProductList";
import { Box, Text } from "@chakra-ui/react";

export default async function CateogiesResultPage({
    params,
}: {
    params: Promise<{ type: string }>
}) {
    const type = (await params).type;

    return (
        <Box
        >
            <Navbar isShowWishlistBtn />
            <Text
                mt="4"
                fontSize="16"
                fontWeight="600"
            >
                {type} (240)
            </Text>
            <ProductList />
        </Box>
    );
}
