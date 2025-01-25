'use client';

import { ProductFilterLabels, ProductFilters } from "@/data/product-filters";
import { ProductInventoryOptionLabels, ProductInventoryOptions } from "@/data/product-inventory-item";
import { Box, Button, Flex, Icon, IconButton, List, ListItem, Modal, ModalBody, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";


interface IFilterPopupProps {
    dataSource: ProductFilters | ProductInventoryOptions;
    labels: ProductInventoryOptionLabels | ProductFilterLabels;
    type: string;
    isOpen: boolean;
    onClose: () => void;
}
export default function FilterPopup({ dataSource, labels, type, isOpen, onClose }: IFilterPopupProps) {
    const title = labels[type as keyof typeof labels];
    const filters = dataSource[type as keyof typeof dataSource];
    const [selectedValue, setSelectedValue] = useState<string>('');
    const isColor = type == 'color';

    return (
        <>
            <Modal
                closeOnOverlayClick={false}
                closeOnEsc={false}
                isOpen={isOpen}
                onClose={onClose}
                size="2x1">
                <ModalOverlay />
                <ModalContent alignSelf="flex-end" p="6" borderRadius="25px" position="relative">
                    <Flex
                        position="relative"
                        alignItems="center"
                        gap="2"
                    >
                        <Button
                            variant="unstyled"
                            fontWeight="unset"
                        >
                            <Text fontSize="16px" fontWeight="unset">
                                Clear
                            </Text>
                        </Button>
                        <Text
                            position="absolute"
                            left="50%"
                            transform="translate(-50%)"
                            fontSize="24px"
                            fontWeight="600"
                        >
                            {title}
                        </Text>
                        <IconButton
                            ml="auto"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            aria-label="close"
                            variant="unstyled"
                            onClick={onClose}
                            fontSize="30px"
                            icon={<IoIosClose />}
                        />

                    </Flex>
                    <ModalBody mt="8">
                        <List spacing="4">
                            {Object.keys(filters).map((key: string) =>
                                <FilterItem
                                    key={key}
                                    selectedValue={selectedValue}
                                    title={filters[key]}
                                    callback={(value: string) => { setSelectedValue(value) }}
                                    isColor={isColor}
                                />

                            )}
                        </List>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

interface IFilterItemProps {
    title: string;
    callback: (value: string) => void;
    selectedValue: string;
    isColor: boolean;
}

function FilterItem({ callback, title, selectedValue, isColor }: IFilterItemProps) {
    return (
        <ListItem
            cursor="pointer"
            borderRadius="25px"
            px="7"
            py="4"
            mt="4"
            display="flex"
            background="#F4F4F4"
            alignItems="center"
            justifyContent="space-between"
            height="56px"
            onClick={() => callback(title)}
            bg={selectedValue == title ? 'purple.600' : '#F4F4F4'}
            color={selectedValue == title ? 'white' : '#242424'}
        >

            <Text
                fontSize="16px"
            >
                {title}
            </Text>
            {isColor && (
                <Box
                    w="16px"
                    h="16px"
                    bg={`${title.toLowerCase()}`}
                    borderRadius="50%"
                />
            )}
            {!isColor &&
                <>
                    {selectedValue == title &&
                        <Icon
                            fontSize="16px"
                            aria-label="back"
                            as={IoCheckmark}
                        />
                    }
                </>
            }
        </ListItem>
    )
}