'use client';

import { routes } from "@/constants/routes";
import { Avatar, Box, Button, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Settings() {

    const router = useRouter();

    return (
        <Flex flexDirection="column" p="6">
            <Box textAlign="center">
                <Avatar
                    name="Tommy"
                    w="80px"
                    h="80px"
                />
            </Box>
            <List spacing={2}>
                <ListItem
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex gap="2" flexDirection="column">
                        <Text
                            fontWeight="600"
                            fontSize="16px"
                        >
                            Tommy Lai
                        </Text>
                        <Text
                            color="#272727"
                            opacity="50%"
                        >
                            tommylai@xxxxxx.com
                        </Text>
                        <Text
                            color="#272727"
                            opacity="50%"
                        >
                            123-456-7890
                        </Text>
                    </Flex>
                    <Button
                        variant="unstyled"
                    >
                        <Text
                            color="purple.600"
                            fontWeight="600"
                            fontSize="12px">
                            Edit
                        </Text>
                    </Button>
                </ListItem>
                <ListItem
                    cursor="pointer"
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => router.push(routes.settings.address)}
                >
                    <Text fontSize="16px">
                        Address
                    </Text>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
                <ListItem
                    cursor="pointer"
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => router.push(routes.settings.wishlist)}

                >
                    <Text fontSize="16px">
                        Wishlist
                    </Text>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
                <ListItem
                    cursor="pointer"
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => router.push(routes.settings.payment)}

                >
                    <Text fontSize="16px">
                        Payment
                    </Text>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
                <ListItem
                    cursor="pointer"
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"

                >
                    <Text fontSize="16px">
                        Help
                    </Text>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
                <ListItem
                    cursor="pointer"
                    borderRadius="8px"
                    p="4"
                    mt="8"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"

                >
                    <Text fontSize="16px">
                        Support
                    </Text>
                    <Icon
                        fontSize="16px"
                        aria-label="back"
                        as={MdKeyboardArrowRight}
                    />
                </ListItem>
                <Box textAlign="center">
                    <Button
                        variant="unstyled"
                        color="red"
                        onClick={() => router.push(routes.accounts.signin)}
                    >
                        Sign Out
                    </Button>
                </Box>
            </List>
        </Flex>
    );
}
