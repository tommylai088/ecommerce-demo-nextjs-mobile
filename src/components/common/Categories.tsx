'use client';

import { route } from "@/constants/route";
import { productCategories } from "@/data/product-categories";
import { Box, Flex, IconButton, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";


interface ICategoriesProps {
    search?: boolean;
}
export default function Categories({ search }: ICategoriesProps) {
    const router = useRouter();

    return (
        <Box mt="8">
            <Text
                fontSize="24px"
                fontWeight="600"
            >
                Shop by Categories
            </Text>
            <List spacing="2">
                {productCategories?.map(item =>
                    <ListItem
                        key={item.name}
                        cursor="pointer"
                        borderRadius="8px"
                        p="4"
                        mt="4"
                        display="flex"
                        background="#F4F4F4"
                        alignItems="center"
                        justifyContent="space-between"
                        height="64px"
                        onClick={() => router.push(`${!search ? `${route.categories}/${item.name}` : route.productResults}`)}

                    >
                        <Flex gap="4" alignItems="center" justifyContent="center">
                            <IconButton
                                aria-label={item.name}
                                icon={item.icon}
                                height="40px"
                                width="40px"
                                isRound
                                fontSize="20px"
                            />
                            <Flex flexDirection="column">
                                <Text
                                    fontSize="16px"
                                >
                                    {item?.name}
                                </Text>
                            </Flex>
                        </Flex>
                    </ListItem>
                )}
            </List>
        </Box>

    );
}
