'use client';

import { Box, Button, Flex, Icon, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Product from "../products/Product";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { useLayoutEffect, useState } from "react";
import { productImages } from "@/data/product-images";


interface IProductImageCarouselProps {
    title?: string;
}

export default function ProductImageCarousel({ title }: IProductImageCarouselProps) {
    const router = useRouter();
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
                    onClick={() => router.push('/product/details')}
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
                    {productImages.map(item => (
                        <SwiperSlide key={item?.id}>
                            <Image src={item.imageUrl} alt="productImage" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </Box>
    );
}
