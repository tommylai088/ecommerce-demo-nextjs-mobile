'use client';

import Navbar from "@/components/common/Navbar";
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
export default function PaymentEdit() {

    const router = useRouter();
    const methods = useForm<any>();
    const {
        handleSubmit,
        register,
    } = methods

    const onSubmit = () => {
        router.back();
    }

    return (
        <Box p="6">
            <Navbar title="Edit Card" />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mt={8}>
                        <Input
                            bg="#F4F4F4"
                            {...register('cardNumber', {
                            })}
                            placeholder="Card Number"
                        />
                    </FormControl>
                    <Flex mt={4} gap="5">
                        <FormControl>
                            <Input
                                bg="#F4F4F4"
                                {...register('ccv', {
                                })}
                                placeholder="CCV"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                bg="#F4F4F4"
                                {...register('exp', {
                                })}
                                placeholder="Exp"
                            />
                        </FormControl>
                    </Flex>
                    <FormControl mt={4}>
                        <Input
                            bg="#F4F4F4"
                            {...register('cardholderName', {
                            })}
                            placeholder="Cardholder Name"
                        />
                    </FormControl>
                    <Button
                        borderRadius="25px"
                        height="50px"
                        mt={4}
                        w="100%"
                        type="submit"
                    >
                        <Text fontSize="16px">
                            Save
                        </Text>
                    </Button>
                </form>
            </FormProvider>
        </Box>
    );
}
