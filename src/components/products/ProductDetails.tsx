'use client';

import { Avatar, Box, Button, Flex, Icon, IconButton, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdPlusOne } from "react-icons/md";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import BottomButton from "../common/BottomButton";
import ProductCarousel from "../carousel/ProductCarousel";
import ProductReview from "./ProductReview";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductInventory from "./ProductInventory";


export default function ProductResults() {
    return (
        <>
            <Navbar isShowWishlistBtn />
            <ProductImageCarousel />
            <Flex gap="4" flexDirection="column" mt="6">
                <Text fontSize="16px" fontWeight="600">
                    Men's Harrington Jacket
                </Text>
                <Text fontSize="16px" fontWeight="600">
                    $123
                </Text>
            </Flex>
            <ProductInventory />
            <Text
                mt="6"
                fontSize="12px"
                color="#272727"
                opacity="50%"
            >
                Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.
            </Text>
            <Flex flexDirection="column" gap="3">
                <Text fontSize="16px" fontWeight="600">
                    Shipping & Returns
                </Text>
                <Text fontSize="12px" color="#272727" opacity="50%">
                    Free standard shipping and free 60-day returns
                </Text>
            </Flex>
            <ProductReview />
            <BottomButton />
        </>
    );
}
