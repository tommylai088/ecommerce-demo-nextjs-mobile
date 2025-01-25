'use client';

import { orderStatus } from '@/data/order-status';
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


interface IOrderStatusCarouselProps {
}

export default function OrderStatusCarousel({ }: IOrderStatusCarouselProps) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Box mt="6">
            {mounted &&
                <Swiper
                    spaceBetween={12}
                    slidesPerView="auto"
                    parallax
                    modules={[Navigation]}
                    scrollbar={{ draggable: true }}
                >
                    {orderStatus?.map(item =>
                        <SwiperSlide key={item?.id}
                            style={{
                                width: '75px',
                                maxWidth: '120px',
                            }}
                        >
                            <Button
                                py="2"
                                px="1"
                                borderRadius="25px"
                                height="27px"
                                w="100%"
                                bg={!item?.isActive ? '#F4F4F4' : 'purple.600'}
                                variant="unstyled"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text
                                    fontSize="12px"
                                    width="60px"
                                    lineHeight="20px"
                                    textAlign="center"
                                    w="100%"
                                    color={!item?.isActive ? '#272727' : 'white'}
                                >
                                    {item?.name}
                                </Text>
                            </Button>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        </Box>
    );
}
