'use client';

import { Avatar, Box, Button, Flex, Grid, GridItem, Icon, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Image } from "@chakra-ui/react"
import { route } from "@/constants/route";
import Navbar from "@/components/common/Navbar";
import { payments } from "@/data/payments";
export default function Payment() {

    const router = useRouter();

    return (
        <Box p="6">
            <Navbar title="Payment" />
            <Text
                mt="8"
                fontSize="16px"
                fontWeight="600"
            >
                Card
            </Text>
            <List spacing="2">
                {payments.map(item =>
                    <ListItem
                        key={item.id}
                        onClick={() => router.push(route.settings.editPayment)}
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
                        <Flex>
                            <Text fontSize="16px">
                                {item.cardNo}
                            </Text>
                            <Image
                                ml="20px"
                                src="/master.svg"
                                boxSize="24px"
                                borderRadius="full"
                                alt="master"
                            />
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
