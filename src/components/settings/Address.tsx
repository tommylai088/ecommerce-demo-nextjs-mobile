'use client';

import { Avatar, Box, Button, Flex, Grid, GridItem, Icon, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { route } from "@/constants/route";
import { address } from "@/data/address";
export default function Address() {

    const router = useRouter();

    return (
        <Box p="6">
            <Navbar title="Address" />
            <List spacing="2">
                {address.map(item =>
                    <ListItem
                        key={item.id}
                        borderRadius="8px"
                        p="4"
                        mt="4"
                        display="flex"
                        background="#F4F4F4"
                        alignItems="center"
                        justifyContent="space-between"
                        height="72px"

                    >
                        <Text fontSize="16px">
                            {item.address}
                        </Text>
                        <Button
                            variant="unstyled"
                            onClick={() => router.push(route.settings.editAddress)}
                        >
                            <Text
                                color="purple.600"
                                fontWeight="600"
                                fontSize="12px">
                                Edit
                            </Text>
                        </Button>
                    </ListItem>
                )}
            </List>
        </Box>
    );
}
