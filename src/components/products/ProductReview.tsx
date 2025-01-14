'use client';

import { productReviews } from "@/data/product-reviews";
import { Avatar, Box, Button, Flex, Icon, IconButton, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";


export default function ProductReview() {

    return (
        <>
            <Flex flexDirection="column" gap="3" mt="6" pb="14">
                <Text fontSize="16px" fontWeight="600">
                    Reviews
                </Text>
                <Text fontSize="24px" fontWeight="600">
                    4.5 Ratings
                </Text>
                <Text fontSize="12px" color="#272727" opacity="50%">
                    213 Reviews
                </Text>
                <ReviewList />
            </Flex>
        </>
    );
}


function ReviewList() {
    return (
        <Box display="flex" flexDirection="column" gap="3">
            {productReviews.map(item =>
                <ReviewItem
                    key={item.id}
                    item={item}
                />
            )}
        </Box>
    )
}

interface IReviewItemProps {
    item: any;
}

function ReviewItem({ item }: IReviewItemProps) {
    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between">
                <Flex gap="12px" alignItems="center" justifyContent="center">
                    <Avatar
                        w="40px"
                        h="40px"
                        name={item.name}
                    />
                    <Text fontSize="12px" fontWeight="600">
                        {item.name}
                    </Text>
                </Flex>
                <Box>
                    <Flex>
                        {Array.from({ length: item.rating }, (_, index) =>
                            <Icon
                                key={index}
                                as={IoIosStar}
                                color="purple.600"
                            />

                        )}
                        {Array.from({ length: 5 - item.rating }, (_, index) =>
                            <Icon
                                key={index}
                                as={IoIosStarOutline}
                                color="purple.600"
                            />
                        )}
                    </Flex>
                </Box>
            </Flex>
            <Text fontSize="12px" color="#272727" opacity="50%" mt="1">
                {item.description}
            </Text>
            <Text fontSize="12px" mt="1">
                {item.date}
            </Text>
        </Flex>
    )

}