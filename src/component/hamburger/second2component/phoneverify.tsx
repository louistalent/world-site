import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { ViewIcon, AddIcon, ViewOffIcon,ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

import "./phoneverify.css";

function Phoneverify(props: any) {
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');
    const navigate = useNavigate();
 

    return (
        <>
            <Center mt='70px'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='600px'>
                    <Center w='100%' position={'relative'}>
                        <Image w='40px' src={mark}></Image>
                        <Link to='/' style={{position:'absolute',top:'0px',left:'10px'}}>
                            <ChevronLeftIcon style={{fontSize:"40px",color:'white'}}/>
                        </Link>
                    </Center>
                    <Box w='80%' pb='10px' height='500px' pt={1}>
                        <Center pt='20px' flexDirection={'column'}>
                            <Box>
                                <Text className="" fontFamily={'Proxima_Nova_400'} mt='10px' color='white' fontSize={'25px'}>We need to verify your indentity, </Text>
                            </Box>
                            <Box>
                                <Text className="" fontFamily={'Proxima_Nova_400'} color='white' fontSize={'25px'}>this will only take a second. </Text>
                            </Box>
                        </Center>
                        <HStack mt={'25px'}>
                                <Text margin={'auto'} className="" fontFamily={'Proxima_Nova_400'} color='white' fontWeight={'bold'} fontSize={'17px'}>Confirm your phone number. </Text>
                        </HStack>
                        <HStack w='100%' pt='100px' textAlign={'center'}>
                        </HStack>
                        <Center>
                            <Box w='200px' border={'1px solid #B026FF'} borderRadius='6px'>
                                <PhoneInput
                                    inputClass="earn-phoneClass"
                                    enableSearch={true}
                                    buttonClass="phoneButtonClass2"
                                    placeholder='   Phone number'
                                    countryCodeEditable={false}
                                    value={phoneNumber}
                                    onChange={(num: any) => setPhoneNumber(num)}
                                    />
                            </Box>
                        </Center>
                    </Box>
                    <Center w='100%'>
                        <Link style={{width:'100%',margin:'auto'}} to='/earn-profile'>
                            <Button margin={'auto'} display='flex' className="site-font" _hover={{ color: 'yellow', border: '2px rgba(66, 153, 225, 0.6) solid' }} color='white' border='gray 1px solid' background='transparent' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={phoneNumber == '' ? true : false}>
                                Done
                                </Button>
                        </Link>
                    </Center>
                </VStack>
            </Center>
        </>
    );
}

export default Phoneverify;
