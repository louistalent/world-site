import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { BsXOctagon } from "react-icons/bs";
// import { browserHistory } from 'react-router';

function Disclaimer() {
    const [isMobile500] = useMediaQuery('(max-width: 500px)');
    const [isLessMobile] = useMediaQuery('(max-width: 450px)');

    return (
        <>
            <Center color={'white'} mt='3%'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height={isLessMobile ? '100%' : '700px'}>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    <Box w='80%' pb='10px' height={isLessMobile ? '100%' : '600px'} pt={1}>
                        <Center>
                            <HStack>
                                <Box style={{ transform: 'rotate(-15deg)' }}>
                                    <FaGem color="#B026FF" fontSize={'40px'} />
                                </Box>
                                <Box pr='20px' pl='20px' textAlign={'center'}>
                                    <Heading className="font-700" mt='10px' color='white' whiteSpace={'nowrap'} fontSize={'21px'}>Let’s talk about<br style={{ display: isMobile500 ? '' : 'none' }} /> purple gems.</Heading>
                                </Box>
                                <Box style={{ transform: 'rotate(15deg)' }}>
                                    <FaGem color="#B026FF" fontSize={'40px'} />
                                </Box>
                            </HStack>
                        </Center>
                        {/* <Input color='white' fontSize='30px'></Input> */}
                        <Center>

                            <Box w='100%' textAlign={'center'} mt='20px' height={isLessMobile ? '100%' : '280px'} p='20px' border='2px solid #FFFFFF' boxSizing='border-box' borderRadius='20px'>
                                <Center style={{ margin: 'auto' }} display='flex' textAlign={'center'} w='100%'>
                                    <FaGem color="#B026FF" fontSize={'20px'} />
                                    <Text className="font-400-re" fontSize={'16px'} color={'white'} >&nbsp;1=$0.0001 </Text>
                                </Center>
                                <Text className="font-400-re" fontWeight={'300px'} fontSize='13px' color={'white'} opacity='0.7'>(one tenth of a penny)</Text>
                                <Text mt='30px' lineHeight={'25px'} className="font-400-re" fontWeight={'300px'} fontSize='17px' color={'white'}>
                                    We collect our service fee in the<br />
                                    form of gems during a video call.
                                </Text>
                                <Text mt='30px' lineHeight={'25px'} className="font-400-re" fontWeight={'300px'} fontSize='17px' color='#c1baba' >
                                    For example, if you set your secondly rate<br />
                                    to <span style={{ color: 'white' }}>250 gems ($0.25)</span>, your total profit is<br />
                                    <span style={{ color: 'white' }}>187.5 gems</span> per second.
                                </Text>
                            </Box>
                        </Center>

                        <Box mt='30px' textAlign={'center'}>
                            <Text className="font-400-re" fontSize={'20px'} color={'white'} >Set your secondly rate for video chat</Text>
                            <Center>

                                <Box w='200px' textAlign={'left'} mt='20px' p='6px' border='1px solid #FFFFFF' boxSizing='border-box' borderRadius='10px'>
                                    <Text className="font-400-re" fontWeight={'300px'} fontSize='13px' color={'white'} opacity='0.7'>Per second rate</Text>
                                    <HStack>
                                        <FaGem color="#B026FF" fontSize={'20px'} />
                                        <Text className="font-400-re" fontSize={'16px'} color={'white'} >&nbsp;1=$0.0001 </Text>
                                    </HStack>

                                </Box>

                            </Center>
                            <Center>
                                <Box w='40%' textAlign={'left'}>
                                    <Text className="font-400-re" mt='5px' fontWeight={'300px'} fontSize='13px' color={'white'} opacity='0.7'> $ 0.25 / second</Text>
                                </Box>
                            </Center>

                        </Box>
                    </Box>
                    <Box textAlign={'center'}>
                        <Link to={'/permission'}>
                            <Button mt='10px' className="site-font" color='black' border='gray 1px solid' background='white' borderRadius='30px 30px 30px 30px' h='30px' p='20px 45px' >
                                Continue
                            </Button>
                        </Link>
                    </Box>

                </VStack>
            </Center>
        </>
    );
}

export default Disclaimer;
