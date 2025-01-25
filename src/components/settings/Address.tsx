'use client';

import Navbar from "@/components/common/Navbar";
import { route } from "@/constants/route";
import { address } from "@/data/address";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export default function Address() {

    const router = useRouter();

    return (
        <Box>
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
