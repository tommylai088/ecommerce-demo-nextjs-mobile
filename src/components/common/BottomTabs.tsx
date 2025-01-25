'use client'

import { Flex, IconButton } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { FaWpforms } from 'react-icons/fa';
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';

const BottomTabs = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isShowBottomTabs = !pathname?.includes('accounts');
    return (
        <>
            {isShowBottomTabs &&
                <Flex
                    maxW="1280px"
                    zIndex="999"
                    px="10"
                    py="3"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    position="fixed"
                    bottom="0px"
                    bg="white"
                >
                    <IconButton
                        onClick={() => router.push('/')}
                        variant="unstyled"
                        height="30px"
                        width="30px"
                        fontSize="18px"
                        icon={<IoHomeOutline />}
                        aria-label="home"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    />
                    {/* <IconButton
                        onClick={() => router.push('/notifications')}
                        variant="unstyled"
                        height="30px"
                        width="30px"
                        fontSize="18px"
                        icon={<IoNotificationsOutline />}
                        aria-label="notifications"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"

                    /> */}
                    <IconButton
                        onClick={() => router.push('/orders')}
                        variant="unstyled"
                        height="30px"
                        width="30px"
                        fontSize="18px"
                        icon={<FaWpforms />}
                        aria-label="orders"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"

                    />
                    <IconButton
                        onClick={() => router.push('/settings')}
                        variant="unstyled"
                        height="30px"
                        width="30px"
                        fontSize="18px"
                        icon={<IoPersonOutline />}
                        aria-label="settings"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"

                    />
                </Flex>
            }
        </>
    )
}

export default BottomTabs;