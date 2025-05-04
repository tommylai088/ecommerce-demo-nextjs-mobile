'use client';

import { products } from "@/data/products";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from "../products/Product";


interface IProductCarouselProps {
    title?: string;
}

export default function ProductCarousel({ title }: IProductCarouselProps) {
    const [mounted, setMounted] = useState(false);
    
    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Box mt="6">
            {title &&
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text fontSize="16px" fontWeight="600">
                        {title}
                    </Text>
                    <Button
                        variant="unstyled"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="unset"
                    >
                        <Text fontSize="16px">
                            See All
                        </Text>
                    </Button>
                </Flex>
            }
            {mounted &&
                <Swiper
                    spaceBetween={12}
                    slidesPerView={2}
                    parallax
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation]}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        1280: {
                            slidesPerView: 6,
                        },
                        1080: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        550: {
                            slidesPerView: 3,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {products.map(item => (
                        <SwiperSlide key={item?.id}>
                            <Product w="100%" item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </Box>
    );
}
