import { Box, Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchComponent() {
    const router = useRouter();

    const handleClick = () => {
        var qry = document.getElementById('theMaininput').value;

        if(qry){
        router.push(`/search/${qry}`);
        }
    }


    return (
        <Box >
            <HStack alignSelf={'center'} px={{ md: 100, lg: 100, base: 5 }}>

                <Input onKeyPress={function (event) {
                    if (event.key === "Enter") {
                        handleClick();
                    }
                }} id='theMaininput' placeholder='Search For Movies,TV Series.... 🍿' />

                <Button colorScheme='cyan' onClick={handleClick}>Search</Button>
            </HStack>
        </Box>
    );
}
