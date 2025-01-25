'use client';

import Navbar from "@/components/common/Navbar";
import { route } from "@/constants/route";
import { wishlist } from "@/data/wishlist";
import { Box, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Wishlist() {
    const router = useRouter();
    return (
        <Box>
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
