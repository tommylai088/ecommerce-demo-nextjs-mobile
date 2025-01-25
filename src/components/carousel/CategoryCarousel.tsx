'use client';

import { route } from "@/constants/route";
import { productCategories } from "@/data/product-categories";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CategoryCarousel() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useLayoutEffect(() => {
        setMounted(true);
    }, []);


    return (
        <Box mt="6">
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Text fontSize="16px" fontWeight="600">
                    Categories
                </Text>
                <Button
                    variant="unstyled"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="unset"
                    onClick={() => router.push('/categories')}
                >
                    <Text fontSize="16px">
                        See All
                    </Text>
                </Button>
            </Flex>
            {mounted &&
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    grid={{
                        fill: "column"
                    }}
                    parallax
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation]}
                    scrollbar={{ draggable: true }}
                >
                    {productCategories.map((item) =>
                        <SwiperSlide
                            key={item.name}
                            onClick={() => router.push(`${route.categories}/${item.name}`)}
                        >
                            <Flex
                                gap="1"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <IconButton
                                    aria-label={item.name}
                                    icon={item.icon}
                                    height="40px"
                                    width="40px"
                                    isRound
                                    fontSize="20px"
                                />
                                <Text fontSize="12px">
                                    {item?.name}
                                </Text>

                            </Flex>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        </Box>
    );
}
