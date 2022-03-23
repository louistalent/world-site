import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import './w91.css';
function W91() {
    const [isMobile] = useMediaQuery('(max-width: 500px)');
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');

    return (
        <>
            <Center color={'white'} mt='3%'>

                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='700px'>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    <Box w='80%' pb='10px' height='600px' pt={1}>

                        <Center>
                            <VStack textAlign={'center'}>
                                <Heading className="font-700" mt='10px' color='white' fontSize={'25px'}>You are almost done,</Heading>
                                <Heading className="font-700" mt='20px' color='white' fontSize={'25px'}>complete this W-9 form.</Heading>
                                <Text className="font-400-re" color={'white'} opacity={0.7}>Step 1/2</Text>
                            </VStack>
                        </Center>
                        {/* <Input color='white' fontSize='30px'></Input> */}
                        <Box pt="60px" height='200px'>
                            <Text className="font-400-re" fontSize={'20px'} color={'white'} >Social security number / TIN </Text>
                            <Box className='w91-phone-input1'>
                                <Box className='w91-phone-input'>
                                    <Box className="w91-phone-input">
                                        <PinInput size='lg' placeholder='' type='alphanumeric'>
                                            <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                            <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                            <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                        </PinInput>
                                    </Box>
                                    <Box className="w91-phone-input">
                                        <Box className=" font-700" fontWeight={'bold'} fontSize='40px'>-</Box>
                                        <PinInput size='lg' placeholder='' type='alphanumeric'>
                                            <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                            <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                        </PinInput>
                                    </Box>
                                </Box>
                                <Box className="w91-phone-input">
                                    <Box className="dis-n-mobile font-700" fontWeight={'bold'} fontSize='40px'>-</Box>
                                    <PinInput size='lg' placeholder='' type='alphanumeric'>
                                        <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" color={'black'} mr='2px' ml='2px' w='46px' h='46px' fontSize='40px' fontWeight='bold' background='white' />
                                    </PinInput>
                                </Box>
                            </Box>
                        </Box>
                        <Box pt='10px'>
                            <HStack mb='2px'>
                                <Text className="font-400-re" fontSize={'20px'} color={'white'} >Account number(s) with the IRS</Text>
                                <Text className="font-400-re" color={'white'} opacity='0.7'>(optional)</Text>
                            </HStack>
                            <label style={{ width: '100%' }} className="field field_v3" >
                                <input style={{ border: '1px grey solid' }} type='email' className="site-font field__input" placeholder="" />
                            </label>
                            <Box className="w10" mt='7px' textAlign={'right'}>
                                <Text className="font-400-re" color={'white'} opacity='0.7'>+ add another</Text>
                            </Box>

                        </Box>
                    </Box>
                    <Stack w='80%'>
                        <Link to='/w92' style={{ width: '100%', margin: 'auto' }}>
                            <Button className="site-font" w='100%' color='black' border='gray 1px solid' background='white' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" >
                                Continue
                            </Button>
                        </Link>
                    </Stack>

                </VStack>
            </Center>
        </>
    );
}

export default W91;
