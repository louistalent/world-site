import { Box, useMediaQuery, Container, Button, Stack, Text, HStack, VStack, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import people from "../assets/1.jpg";
import { HiAdjustments } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaGem } from "react-icons/fa";


function API() {
    const [isMobile] = useMediaQuery('(max-width: 500px)');

    return (
        <Box className="main-home">
            <Container maxW='container.xl' >
                <Center mt={'20%'} mb='15%' textAlign={'center'}>
                    <Heading className="font-400-re" color='white' style={{ fontSize: isMobile ? '80px' : '100px' }} >identity api</Heading>
                </Center>
                <Box className="justify" mt={`${isMobile ? '190px' : ''}`}>
                    {/* <Image w='45px' src={blackLogo}></Image> */}
                    <Link to='/w91'>
                        <Button className="font-600" p='27px!important' opacity={1} color='black' background='white' flex='1' borderRadius={'30px'} border={'1px solid #FFFFFF;'} w='200px' fontSize='20px' >Continue</Button>
                    </Link>
                </Box>

            </Container>
        </Box >
    );
}

export default API;
