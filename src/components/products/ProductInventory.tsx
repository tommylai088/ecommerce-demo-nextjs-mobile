'use client';

import { Box, Button, Flex, Icon, Text, Image, List, ListItem, IconButton, useDisclosure } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useState } from "react";
import FilterPopup from "../common/FilterPopup";
import { productInventoryOptionLabels, productInventoryOptions } from "@/data/product-inventory-item";

export default function ProductInventory({ }) {
    const [value, setValue] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <List spacing="2">
                <ListItem
                    borderRadius="25px"
                    p="4"
                    mt="4"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    height="56px"
                    onClick={() => {
                        setValue('size');
                        onOpen();
                    }}
                >
                    <Text fontSize="16px">
                        Size
                    </Text>
                    <Flex gap="7" justifyContent="center" alignItems="center">
                        <Text>
                            S
                        </Text>
                        <Icon
                            fontSize="16px"
                            aria-label="back"
                            as={MdKeyboardArrowDown}
                        />
                    </Flex>
                </ListItem>
                <ListItem
                    borderRadius="25px"
                    p="4"
                    mt="4"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    height="56px"
                    onClick={() => {
                        setValue('color');
                        onOpen();
                    }}
                >
                    <Text fontSize="16px" fontWeight="600">
                        Color
                    </Text>
                    <Flex gap="7" justifyContent="center" alignItems="center">
                        <Box
                            w="16px"
                            h="16px"
                            bg="red"
                            borderRadius="50%"
                        />
                        <Icon
                            fontSize="16px"
                            aria-label="back"
                            as={MdKeyboardArrowDown}
                        />
                    </Flex>
                </ListItem>
                <ListItem
                    borderRadius="25px"
                    p="4"
                    mt="4"
                    display="flex"
                    background="#F4F4F4"
                    alignItems="center"
                    justifyContent="space-between"
                    height="56px"

                >
                    <Text fontSize="16px">
                        Quantify
                    </Text>
                    <Flex gap="7" justifyContent="center" alignItems="center">
                        <IconButton
                            isRound
                            aria-label="plus"
                            icon={<HiOutlinePlusSm />}
                        />
                        <Text>
                            1
                        </Text>
                        <IconButton
                            isRound
                            aria-label="plus"
                            icon={<HiOutlineMinusSm />}
                        />
                    </Flex>
                </ListItem>
            </List>
            {value && (
                <FilterPopup
                    dataSource={productInventoryOptions}
                    labels={productInventoryOptionLabels}
                    type={value}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
        </>
    );
}
