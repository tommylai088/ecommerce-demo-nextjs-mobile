'use client';

import { productImages } from "@/data/product-images";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


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
