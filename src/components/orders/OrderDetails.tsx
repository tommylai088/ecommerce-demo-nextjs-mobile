'use client';

import { Avatar, Box, Button, Flex, Grid, GridItem, Icon, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Image } from "@chakra-ui/react"
import { FaWpforms } from "react-icons/fa";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { route } from "@/constants/route";
export default function OrderDetails() {

    const router = useRouter();

    return (
        <Box p="6">
            <Navbar
                title="Order #123456"
            />
            <Text
                mt="10"
                fontWeight="600"
                color="#272727"
            >
                Order Items
            </Text>
            <List spacing="2">
                <ListItem
                    onClick={() => router.push(`${route.orders}/123456`)}
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
                            as={FaWpforms}
                        />
                        <Flex flexDirection="column">
                            <Text
                                fontSize="16px"
                                fontWeight="600"
                            >
                                4 items
                            </Text>
                        </Flex>
                    </Flex>
                    <Text
                        fontWeight="600"
                        fontSize="12px">
                        View All
                    </Text>
                </ListItem>
            </List>
            <Text
                mt="10"
                fontWeight="600"
                color="#272727"
            >
                Shipping details
            </Text>
            <List spacing="2">
                <ListItem
                    onClick={() => router.push(`${route.orders}/123456`)}
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
                    <Flex flexDirection="column" gap="1">
                        <Text
                            fontSize="12px"
                        >
                            xxxxx xxxxx xxxx xxx
                        </Text>
                        <Text
                            fontSize="12px"
                        >
                            123-456-7890
                        </Text>
                    </Flex>
                </ListItem>
            </List>
        </Box>
    );
}
