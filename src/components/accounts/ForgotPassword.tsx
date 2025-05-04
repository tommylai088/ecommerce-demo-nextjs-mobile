'use client';
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, IconButton, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function ForgotPassword() {

    const methods = useForm<any>();
    const {
        handleSubmit,
        register,
    } = methods

    const [success, setSuccess] = useState<boolean>(false);
    const onSubmit = () => {
        setSuccess(true);
    }

    const router = useRouter();

    return (
        <Box p="4">
            {!success ? (
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
                            Forgot Password
                        </Text>
                        <FormControl mt={8}>
                            <Input
                                bg="#F4F4F4"
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                                placeholder="Enter Email address"
                                autoComplete="email"
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
                    </form>
                </FormProvider>

            ) : (
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontSize="24px"
                        fontWeight="600"
                        textAlign="center"
                    >
                        We Sent you an Email to reset your password.
                    </Text>
                    <Button
                        borderRadius="25px"
                        height="50px"
                        mt={4}
                        w="50%"
                        type="submit"
                        onClick={() => router.push('/')}
                    >
                        <Text fontSize="16px">
                            Return to Login
                        </Text>
                    </Button>
                </Flex>
            )}
        </Box >
    )
}

export default ForgotPassword;