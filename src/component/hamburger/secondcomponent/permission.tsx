import mark from "../../../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { BsXOctagon } from "react-icons/bs";
// import { browserHistory } from 'react-router';

function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
        </label>
    );
}
function Permission() {
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');

    return (
        <>
            <Center color={'white'} mt='3%'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='700px'>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    <Box w='80%' pb='10px' height='600px' pt={10}>
                        <Center>
                            <Box w='100%' textAlign={'center'} mt='20px' minH='230px' p='20px' border='2px solid #FFFFFF' boxSizing='border-box' borderRadius='20px'>
                                <Text mt='10px' lineHeight={'25px'} className="font-600-1" fontWeight={'300px'} fontSize='17px' color={'white'}>
                                    Do you want to be<br />
                                    discoverable on Seconds?
                                </Text>
                                <Box p={'20px'}>
                                    <ToggleSwitch />
                                </Box>
                                <Text lineHeight={'15px'} className="font-400-re" fontWeight={'300px'} fontSize='12px' color='#c1baba' >
                                    By enabling, your profile can be discovered in Seconds based on your <br />
                                    name, country, age, pricing and online status.<br /><br />

                                    This can be changed in settings at any time

                                </Text>
                            </Box>
                        </Center>


                    </Box>
                    <Box textAlign={'center'}>
                        <Link to={'/end'}>
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

export default Permission;
