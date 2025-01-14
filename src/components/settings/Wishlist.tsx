'use client';

import { Avatar, Box, Button, Flex, Grid, GridItem, Icon, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { IoIosHeartEmpty } from "react-icons/io";
import { route } from "@/constants/route";
import { wishlist } from "@/data/wishlist";

export default function Wishlist() {
    const router = useRouter();
    return (
        <Box p="6">
            <Navbar title="Wishlist" />
            <List spacing="2">
                {wishlist.map(item =>
                    <ListItem
                        key={item.id}
                        onClick={() => router.push(route.settings.editWishlist)}
                        cursor="pointer"
                        borderRadius="8px"
                        p="4"
                        mt="4"
                        display="flex"
                        background="#F4F4F4"
                        alignItems="center"
                        justifyContent="space-between"
                        height="72px"

                    >
                        <Flex gap="4" alignItems="center" justifyContent="center">
                            <Icon
                                fontSize="24px"
                                aria-label="like"
                                as={IoIosHeartEmpty}
                            />
                            <Flex flexDirection="column">
                                <Text
                                    fontSize="16px"
                                    fontWeight="600"
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    fontSize="12px"
                                    color="#272727"
                                    opacity="50%"
                                >
                                    {item.count} Products
                                </Text>
                            </Flex>
                        </Flex>
                        <Icon
                            fontSize="16px"
                            aria-label="back"
                            as={MdKeyboardArrowRight}
                        />
                    </ListItem>

                )}
            </List>
        </Box>
    );
}
