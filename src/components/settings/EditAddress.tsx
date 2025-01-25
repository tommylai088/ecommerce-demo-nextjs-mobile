'use client';

import Navbar from "@/components/common/Navbar";
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
export default function EditAddress() {

    const router = useRouter();
    const methods = useForm<any>();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods

    const onSubmit = (values: any) => {
        console.log(values)
        router.back();
    }

    return (
        <Box p="6">
            <Navbar title="Edit Address" />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mt={8}>
                        <Input
                            bg="#F4F4F4"
                            {...register('address', {
                            })}
                            placeholder="Street Address"
                        />
                    </FormControl>
                    <FormControl mt={8}>
                        <Input
                            bg="#F4F4F4"
                            {...register('city', {
                            })}
                            placeholder="City"
                        />
                    </FormControl>
                    <Flex mt={4} gap="5">
                        <FormControl>
                            <Input
                                bg="#F4F4F4"
                                {...register('state', {
                                })}
                                placeholder="State"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                bg="#F4F4F4"
                                {...register('zipCode', {
                                })}
                                placeholder="Zip Code"
                            />
                        </FormControl>
                    </Flex>
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
