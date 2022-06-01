import React, { useState, useEffect } from "react"
import rmale from "../../assets/rect-male.png";
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";

import { FaGem } from "react-icons/fa";
import { AddIcon } from '@chakra-ui/icons'
import './second.css';
// import { browserHistory } from 'react-dom'
import { Link, Route, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'

const SecondHam = () => {
    const navigate = useNavigate();
    // let history = useHistor
    const [phoneNumber, setPhoneNumber] = useState('');

    const [text, setText] = useState('We need to verify your indentity, this will only take a second.');
    const [phonetext, setPhonetext] = useState('Confirm your phone number.');

    const [phoneInput, setPhoneInput] = useState(true);
    const [isContinue1, setIsContinue1] = useState(false);
    const [isContinue2, setIsContinue2] = useState(false);

    const continueClick = () => {

        if (phoneNumber !== '') {
            setPhoneInput(false);
            if (!isContinue1) {
                setText('My code is');
                setIsContinue1(true);
            } else {
                if (!isContinue2) {
                    setText('Add at least one picture to your profile.');
                    setIsContinue2(true);
                } else {
                    // api link
                    navigate("/api");
                }
            }
        } else {

        }
    }
    // 
    const [isMobile] = useMediaQuery('(max-width: 567px)');
    const [monitorMobile, setMonitorMobile] = useState('');
    useEffect(() => {
        if (window.innerWidth < 567) {
            setMonitorMobile(window.innerWidth + 'px');
        }
    }, [window.innerWidth])
    return (
        <>
            < Box className="" pt={'10px'} >
                <Box className="r">
                    <Box className="c-s-24" >
                        <Box className="" alignItems='center'>
                            <Text fontFamily={'Proxima_Nova_600'} fontSize={'20px'}>Adam</Text>
                            <Text opacity={'50%'} fontSize={'13px'}>@adam</Text>
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box p='20px'></Box>
            <Box height={'150px'}>
                < Box className="earn-bg-second" ml='-40px' w={isMobile ? monitorMobile : '360px'} textAlign={'left'}  >
                    <Box className="r" m='0px' padding={'30px 40px'}>
                        <Box className="c-s-24" pr='0' pl='0'>
                            <Text fontSize={'17px'}>
                                {text}
                            </Text>
                            {phoneInput &&
                                <>
                                    <br />
                                    <Text fontSize={'20px'}>
                                        {phonetext}
                                    </Text>
                                </>
                            }
                        </Box>
                    </Box>
                </Box >
            </Box>
            <Box className="" height={'330px'}>
                {phoneInput ?
                    <>
                        <Box pt='100px' color={'black'}>
                            <Box border={'1px solid #B026FF'} borderRadius='6px'>
                                <PhoneInput
                                    inputClass="phoneClass2"
                                    enableSearch={true}
                                    buttonClass="phoneButtonClass2"
                                    placeholder='   Phone number'
                                    countryCodeEditable={false}
                                    value={phoneNumber}
                                    onChange={(num: any) => setPhoneNumber(num)}
                                />
                            </Box>
                            <Box pt='50px' textAlign={'center'}>
                                <Text fontSize={'15px'} color='white' opacity={0.75}>
                                    We will send a text with a code.<br />
                                    Your phone number is private and will not be shown on your profile.
                                </Text>
                            </Box>
                        </Box>
                    </>
                    :
                    <>
                        {isContinue2 === false ? <Box>
                            <Box className="" pt='70px' >
                                <HStack spacing='23px'>
                                    <PinInput size='lg' placeholder='' type='alphanumeric'>
                                        <PinInputField className="site-font" w='55px' h='55px' color='black' fontSize='45px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" w='55px' h='55px' color='black' fontSize='45px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" w='55px' h='55px' color='black' fontSize='45px' fontWeight='bold' background='white' />
                                        <PinInputField className="site-font" w='55px' h='55px' color='black' fontSize='45px' fontWeight='bold' background='white' />
                                    </PinInput>
                                </HStack>
                            </Box>
                            <Box className="" pt='60px'>
                                <Text fontSize={'18px'} className='font-700-75'>1 555 804-07124</Text>
                                <Text fontSize={'16px'} className='font-600'>resend</Text>
                            </Box>
                        </Box>
                            : <Box pt='20px'>
                                <HStack>
                                    <Box className="up-card-ham">
                                        <Box className="mauto" _hover={{ cursor: 'pointer', }} borderColor='#B026FF' w='40px' h='40px' borderRadius='50%' border='1px #B026FF dashed' >
                                            <AddIcon ml='30%' mt='30%' color='#B026FF' />
                                        </Box>
                                    </Box>
                                    <Box className="up-card-ham">
                                        <Box className="mauto" _hover={{ cursor: 'pointer', }} borderColor='#B026FF' w='40px' h='40px' borderRadius='50%' border='1px #B026FF dashed' >
                                            <AddIcon ml='30%' mt='30%' color='#B026FF' />
                                        </Box>
                                    </Box>
                                </HStack>

                            </Box>
                        }
                    </>
                }
            </Box>
            <Box className="justify">
                <Button onClick={continueClick} color='black' className="font-600" p='27px!important' flex='1' borderRadius={'30px'} opacity='1' background='white' border={'1px solid #FFFFFF;'} w='200px' fontSize='20px' disabled={phoneNumber === '' ? true : false} >Continue</Button>
            </Box>
        </>
    )
}
export default SecondHam;