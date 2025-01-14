'use client';

import { Avatar, Box, Button, Flex, Icon, IconButton, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import ProductList from "./ProductList";
import FilterPopup from "../common/FilterPopup";
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { productFilterLabels, productFilters } from "@/data/product-filters";

export default function ProductResults() {

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState<string>('');
    const [filterValues, setFilterValues] = useState<any>({});

    return (
        <>
            <Navbar isShowSearchBar />
            <Flex
                mt="6"
                display="flex"
                gap="2"
            >
                <Button
                    fontSize="13px"
                    variant="outline"
                    height="27px"
                    borderRadius="25px"
                    gap="1"
                >
                    <Icon as={LuFilter} />
                    <Text fontSize="12px">
                        2
                    </Text>
                </Button>
                <Button
                    variant="outline"
                    height="27px"
                    onClick={() => {
                        setValue('sortBy');
                        onOpen();
                    }}
                    borderRadius="25px"

                >
                    <Text fontSize="12px">
                        Sort by
                    </Text>
                </Button>
                <Button
                    variant="outline"
                    height="27px"
                    onClick={() => {
                        setValue('price');
                        onOpen();
                    }}
                    borderRadius="25px"

                >
                    <Text fontSize="12px">
                        Price
                    </Text>
                </Button>
            </Flex>

            {value && (
                <FilterPopup
                    dataSource={productFilters}
                    labels={productFilterLabels}
                    type={value}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
            <Text
                mt="4"
                fontSize="12px"
            >
                53 Results Found
            </Text>
            <ProductList />
        </>
    );
}
