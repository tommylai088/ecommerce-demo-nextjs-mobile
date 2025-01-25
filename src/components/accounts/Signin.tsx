'use client';
import { route } from "@/constants/route";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, FormControl, Image, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

function Signin() {

    const methods = useForm<any>();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods


    const onSubmit = (values: any) => {
    }

    const router = useRouter();

    return (
        <Box p="4">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Text
                        fontSize="32px"
                        fontWeight="600"
                    >
                        Sign in
                    </Text>
                    <FormControl mt={8}>
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
                        onClick={() => router.push(route.root)}
                    >
                        <Text fontSize="16px">
                            Continue
                        </Text>
                    </Button>
                    <Text mt="4" fontSize="12px">
                        Dont have an Account ? <Link href="/accounts/signup">
                            <Text fontWeight="600" as="span">Create One</Text>
                        </Link>
                    </Text>
                    <Flex mt="70px" flexDir="column" gap="3">
                        <Button
                            borderRadius="25px"
                            height="50px"
                            bg="#F4F4F4"
                            variant="unstyled"
                            w="100%"
                        >
                            <Flex>
                                <Image
                                    ml="20px"
                                    src="/apple.svg"
                                    boxSize="24px"
                                    borderRadius="full"
                                    alt="apple"
                                />
                                <Text fontSize="16px" ml="60px">
                                    Continue With Apple
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            borderRadius="25px"
                            height="50px"
                            bg="#F4F4F4"
                            variant="unstyled"
                            w="100%"
                        >
                            <Flex>
                                <Image
                                    ml="20px"
                                    src="/google.svg"
                                    boxSize="24px"
                                    borderRadius="full"
                                    alt="google"
                                />
                                <Text fontSize="16px" ml="60px">
                                    Continue With Google
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            borderRadius="25px"
                            height="50px"
                            bg="#F4F4F4"
                            variant="unstyled"
                            w="100%"
                        >
                            <Flex>
                                <Image
                                    ml="20px"
                                    src="/facebook.svg"
                                    boxSize="24px"
                                    borderRadius="full"
                                    alt="facebook"
                                />
                                <Text fontSize="16px" ml="60px">
                                    Continue With Facebook
                                </Text>
                            </Flex>
                        </Button>
                    </Flex>
                </form>
            </FormProvider>
        </Box >
    )
}

export default Signin;