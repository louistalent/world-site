import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import './w92.css';
// import { browserHistory } from 'react-router';
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

function W92() {
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');
    const [isMobile600] = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <Center color={'white'} mt='3%' className="w92">
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height={isMobile600 ? '100%' : '700px'}>
                    <HStack w='100%'>
                        <Box >
                            <Link to='/w91'>
                                <ChevronLeftIcon style={{ marginLeft: '40px' }} _hover={{ cursor: 'pointer' }} fontSize='35px'></ChevronLeftIcon>
                            </Link>
                        </Box>
                        <Box w='100%'>
                            <Center>
                                <Image marginLeft={'-80px'} w='40px' src={mark}></Image>
                            </Center>
                        </Box>
                    </HStack>
                    <Box w='80%' pb='10px' height={isMobile600 ? '100%' : '650px'} pt={1}>
                        <Center>
                            <VStack textAlign={'center'}>
                                <Heading className="font-700" mt='10px' color='white' fontSize={'25px'}>You are almost done,</Heading>
                                <Heading className="font-700" mt='20px' color='white' fontSize={'25px'}>complete this W-9 form.</Heading>
                                <Text className="font-400-re" color={'white'} opacity={0.7}>Step 2/2</Text>
                            </VStack>
                        </Center>
                        <Box w='100%' height={isMobile600 ? '100%' : '520px'} p='20px' border='1px solid #FFFFFF' boxSizing='border-box' borderRadius='20px'>
                            <Heading className="font-400" fontWeight={'400'} color='white' fontSize={'20px'}>
                                Under penalties of perjury, I certify that:
                            </Heading>
                            <Box className="" ml='30px'>
                                <ul>
                                    <li>
                                        I have submitted accurate information regarding my identity and taxpayer identification number (or I am waiting for a number to be issued to me); and
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Server (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am not longer subject to backup withholding; and
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        I am a U.S. citizen or other U.S. person (defined in instructions); and
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.
                                    </li>
                                </ul>
                            </Box>
                            <Text className="con">
                                Certification instructions. You must cross out the second item above if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return. For real estate transactions, the second item does not apply. For mortgage interest paid, acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN.
                            </Text>
                            <Box textAlign={'center'} mt='15px'>
                                <Heading className="font-400" m={'auto'} textDecor={'underline'} fontWeight={'400'} color='white' fontSize={'16px'}>
                                    Preview document
                                </Heading>
                            </Box>
                            <Box textAlign={'center'}>
                                <Link to={'/disclaimer'}>
                                    <Button mt='10px' className="site-font" color='black' border='gray 1px solid' background='white' borderRadius='30px 30px 30px 30px' h='30px' p='20px 45px' >
                                        Sign and agree
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                </VStack>
            </Center>
        </>
    );
}

export default W92;
