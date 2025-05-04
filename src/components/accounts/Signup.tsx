'use client';
import { routes } from "@/constants/routes";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, FormControl, IconButton, Input, Text } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from "react-hook-form";

function Signup() {

    const methods = useForm<any>();
    const {
        handleSubmit,
        register,
    } = methods

    const onSubmit = () => {
    }
    const router = useRouter();

    return (
        <Box p="4">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IconButton
                        isRound={true}
                        border="none"
                        color="#272727"
                        background="#f4f4f4"
                        fontSize="16px"
                        variant='outline'
                        aria-label='back'
                        icon={
                            <ChevronLeftIcon />
                        }
                        onClick={() => router.back()}
                    />
                    <Text
                        fontSize="32px"
                        fontWeight="600"
                    >
                        Create Account
                    </Text>
                    <FormControl mt={8}>
                        <Input
                            bg="#F4F4F4"
                            {...register('firstName', {
                            })}
                            placeholder="First Name"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input
                            bg="#F4F4F4"
                            {...register('lastName', {
                            })}
                            placeholder="Last Name"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input
                            bg="#F4F4F4"
                            {...register('email', {
                            })}
                            placeholder="Email"
                            autoComplete="email"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input
                            bg="#F4F4F4"
                            {...register('password', {
                            })}
                            placeholder="Password"
                            type="password"
                            autoComplete="current-password"
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
                            Continue
                        </Text>
                    </Button>
                    <Text mt="4" fontSize="12px">
                        Forgot Password ? <Link href={routes.accounts.resetPassword}>
                            <Text fontWeight="600" as="span">Reset</Text>
                        </Link>
                    </Text>
                </form>
            </FormProvider>
        </Box >
    )
}

export default Signup;