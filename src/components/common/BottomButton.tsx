'use client';

import { Box, Button, Text } from "@chakra-ui/react";

export default function BottomButton() {
    return (
        <Box
            position="sticky"
            bottom="60px"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW="1280px"
        >
            <Button
                borderRadius="25px"
                justifyContent="space-between"
                h="52px"
                width="100%"
            >
                <Text>
                    $148
                </Text>
                <Text>
                    Add to Bag
                </Text>
            </Button>
        </Box>
    );
}
