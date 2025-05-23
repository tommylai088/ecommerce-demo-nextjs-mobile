'use client';

import { ProductItem } from '@/data/products';
import { Box, BoxProps, Icon, Image, Text } from "@chakra-ui/react";
import { IoMdHeart } from "react-icons/io";


interface IProductProps extends BoxProps {
    item: ProductItem;
}

export default function Product({ item, ...rest }: IProductProps) {

    return (
        <Box
            cursor="pointer"
            bg="#F4F4F4"
            w="calc(50% - 20px)"
            position="relative"
            {...rest}
        >
            <Icon
                color="red"
                fontSize="20px"
                aria-label="like"
                as={IoMdHeart}
                position="absolute"
                top="8px"
                right="8px"

            />
            <Image
                src={item?.imageUrl}
                alt={item?.name}
                maxW="100%"
            />
            <Box p="1">
                <Text fontSize="12px">
                    {item?.name}
                </Text>
                <Text
                    mt="2"
                    fontSize="12px"
                    color="#272727"
                    fontWeight="600"
                >
                    {item?.price}
                </Text>
            </Box>
        </Box>

    );
}
