'use client';

import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IoIosHeartEmpty } from "react-icons/io";

interface NavbarProps {
    title?: string;
    isHideBackBtn?: boolean;
    isShowSearchBar?: boolean;
    isShowWishlistBtn?: boolean;
}

export default function Navbar({ title, isHideBackBtn, isShowSearchBar, isShowWishlistBtn }: NavbarProps) {
    const router = useRouter()
    return (
        <Flex
            position="relative"
            alignItems="center"
            gap="2"
        >
            {!isHideBackBtn &&
                <IconButton
                    float="left"
                    isRound={true}
                    border="none"
                    color="#272727"
                    background="#f4f4f4"
                    fontSize="16px"
                    variant='outline'
                    aria-label='back'
                    icon={
                        <ChevronLeftIcon />
                    }
                    onClick={() => router.back()}
                />}
            {title && (
                <Box
                    position="absolute"
                    float="none"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    <Text
                        as="span"
                        fontSize="16px"
                        fontWeight="600"
                    >
                        {title}
                    </Text>
                </Box>
            )}
            {isShowSearchBar &&
                <Input
                    placeholder="Search" bg="#F4F4F4"
                    onClick={() => router.push('/search')}
                    variant="outline"
                    border="none"
                    borderRadius="25px"
                />
            }
            {isShowWishlistBtn &&
                <IconButton
                    ml="auto"
                    isRound={true}
                    border="none"
                    color="#272727"
                    background="#f4f4f4"
                    fontSize="16px"
                    variant='outline'
                    aria-label='back'
                    icon={
                        <IoIosHeartEmpty />
                    }
                    onClick={() => router.push('/settings/wishlist')}
                />
            }
        </Flex>
    );
}
