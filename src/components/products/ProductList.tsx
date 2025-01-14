'use client';

import { Flex, } from "@chakra-ui/react";
import Product from "./Product";
import { products } from "@/data/products";


export default function ProductList() {

    return (
        <Flex flexWrap="wrap" gap="5" mt="8">
            {products.map(item => <Product key={item.id} item={item} />)}
        </Flex>

    );
}
