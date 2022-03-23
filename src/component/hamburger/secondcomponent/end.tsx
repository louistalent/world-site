import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { BsXOctagon } from "react-icons/bs";
// import { browserHistory } from 'react-router';


function End() {
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');

    return (
        <>
            <Center color={'white'} mt='3%'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='700px'>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    <Box pt='50px' pb='20px'>
                        <Heading fontSize={'25px'}>Thank you.</Heading>
                    </Box>
                    <Box w='80%' pb='10px' height='600px' pt={10}>
                        <Center>
                            <Box w='100%' textAlign={'center'} mt='20px' minH='230px' p='20px' border='2px solid #FFFFFF' boxSizing='border-box' borderRadius='20px'>
                                <Text mt='10px' className="font-600-1" fontWeight={'300px'} fontSize='17px' color={'white'}>
                                    Your profile is currently under<br />
                                    review. Please give our team up to 24 hours to<br />
                                    verify your account.
                                </Text>

                                <Text mt='20px' className="font-600-1" fontWeight={'300px'} fontSize='17px' color={'white'}>
                                    Thank you for signing up<br />
                                    to become a Seconds creator.
                                </Text>
                            </Box>
                        </Center>
                    </Box>
                    <Box textAlign={'center'}>
                        <Link to={'/'}>
                            <Button mt='10px' minW={'200px'} className="site-font" color='black' border='gray 1px solid' background='white' borderRadius='30px 30px 30px 30px' h='30px' p='20px 45px' >
                                Done
                            </Button>
                        </Link>
                    </Box>

                </VStack>
            </Center>
        </>
    );
}

export default End;
