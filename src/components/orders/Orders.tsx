'use client';

import Navbar from "@/components/common/Navbar";
import { route } from "@/constants/route";
import { Box, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaWpforms } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import OrderStatusCarousel from "./OrderStatusCarousel";
export default function Orders() {

    const router = useRouter();

    return (
        <Box p="6">
            <Navbar
                title="Orders"
                isHideBackBtn
            />
            <OrderStatusCarousel />
            {/* <Flex
                mt="10"
                gap="3"
                w="100%"
                overflowX="auto"
                overflowY="hidden"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar'
                }}
            >
                <Button
                    py="2"
                    px="1"
                    borderRadius="25px"
                    height="27px"
                    minW="75px"
                    maxW="100%"
                >
                    <Text
                        fontSize="12px"
                        width="60px"
                        lineHeight="20px"
                        textAlign="center"
                        w="100%"
                    >
                        Processing
                    </Text>
                </Button>
                <Button
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#F4F4F4"
                    py="2"
                    px="1"
                    borderRadius="25px"
                    height="27px"
                    minW="75px"
                    maxW="100%"
                    variant="unstyled"
                >
                    <Text
                        color="#272727"
                        fontSize="12px"
                        width="60px"
                        lineHeight="20px"
                        textAlign="center"
                        w="100%"
                    >
                        Shipped
                    </Text>
                </Button>
                <Button
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#F4F4F4"
                    py="2"
                    px="1"
                    borderRadius="25px"
                    height="27px"
                    minW="75px"
                    maxW="100%"
                    variant="unstyled"
                >
                    <Text
                        color="#272727"
                        fontSize="12px"
                        width="60px"
                        lineHeight="20px"
                        textAlign="center"
                        w="100%"
                    >
                        Delivered
                    </Text>
                </Button>
                <Button
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#F4F4F4"
                    py="2"
                    px="1"
                    borderRadius="25px"
                    height="27px"
                    minW="75px"
                    maxW="100%"
                    variant="unstyled"
                >
                    <Text
                        color="#272727"
                        fontSize="12px"
                        width="60px"
                        lineHeight="20px"
                        textAlign="center"
                        w="100%"
                    >
                        Returned
                    </Text>
                </Button>
                <Button
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#F4F4F4"
                    py="2"
                    px="1"
                    borderRadius="25px"
                    height="27px"
                    minW="75px"
                    maxW="100%"
                    variant="unstyled"
                >
                    <Text
                        color="#272727"
                        fontSize="12px"
                        width="60px"
                        lineHeight="20px"
                        textAlign="center"
                        w="100%"
                    >
                        Cancelled
                    </Text>
                </Button>
            </Flex> */}
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
                                Order #12345
                            </Text>
                            <Text
                                fontSize="12px"
                                color="#272727"
                                opacity="50%"
                            >
                                4 items
                            </Text>
                        </Flex>
                    </Flex>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
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
                                Order #12345
                            </Text>
                            <Text
                                fontSize="12px"
                                color="#272727"
                                opacity="50%"
                            >
                                4 items
                            </Text>
                        </Flex>
                    </Flex>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
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
                                Order #12345
                            </Text>
                            <Text
                                fontSize="12px"
                                color="#272727"
                                opacity="50%"
                            >
                                4 items
                            </Text>
                        </Flex>
                    </Flex>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
            </List>
        </Box>
    );
}
