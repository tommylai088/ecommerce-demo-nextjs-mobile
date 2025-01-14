'use client'

import { Box, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const router = useRouter();
    
    return (
        <Box mt="6">
            <Input
                placeholder="Search" bg="#F4F4F4"
                onClick={() => router.push('/search')}
                variant="outline"
                border="none"
                borderRadius="25px"
            />
        </Box>
    )
}

export default SearchBar;