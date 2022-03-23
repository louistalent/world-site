import mark from "../assets/logo.png";
import React from 'react';
import { useMediaQuery, Box, Text, Flex, Container, PinInput, PinInputField, Stack, Image, HStack, VStack, Button, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import { useState, useEffect } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
// import { browserHistory } from 'react-router';

interface phoneType {
    num: string
    username: string
    pass: string
}
// interface LoginStatus {
//     query: string
// }
// 430px
interface sendType {
    [key: string]: string | number | boolean | String[]
}
function Signin(props: any) {
    const [isLessMobile] = useMediaQuery('(max-width: 430px)');
    const navigate = useNavigate();
    const [state, setState] = useState<phoneType>({
        num: '',
        username: '',
        pass: '',
    });
    const [isPhone, setIsPhone] = useState(true);
    const [isSendcode, setIsSendcode] = useState(false);

    const updateStatus = (json: sendType) => setState({ ...state, ...json })

    const setPhoneNumber = (n: number) => { updateStatus({ num: n }); }
    const setUser = (c: string) => { updateStatus({ username: c }); }
    const setPass = (c: string) => { updateStatus({ pass: c }); }

    const logined = () => {
        props.setLogined(true)
        navigate('/')
    }
    return (
        <>
            <Center>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='600px'>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    {!isSendcode &&
                        <>
                            <Box w='80%' pb='10px' height='500px' pt={1}>
                                <Center>
                                    <Heading className="site-font" mt='20px' color='white' as='h3' size='md'>Welcone back, let's log you in</Heading>
                                </Center>
                                <HStack w='100%' pt='80px'>
                                    <Box w='50%' h={`${isLessMobile ? '61px' : ''}`} pb={3} borderBottom={`${isPhone ? 'white' : 'grey'} ${isPhone ? '2px' : '1px'} solid`} textAlign='center'>
                                        <Heading onClick={() => { setIsPhone(true) }} className="Hover site-font" size='md' color='white'>Phone</Heading>
                                    </Box>
                                    <Box w='50%' pb={3} borderBottom={`${isPhone ? 'grey' : 'white'} ${isPhone ? '1px' : '2px'} solid`} ml='0px!important' textAlign='center'>
                                        <Heading onClick={() => { setIsPhone(false) }} className="Hover site-font" size='md' color='white'>Email or username</Heading>
                                    </Box>
                                </HStack>
                                {/* <Input color='white' fontSize='30px'></Input> */}
                                <Box pt="70px" height='200px'>
                                    {isPhone && <>
                                        <PhoneInput
                                            inputClass="phoneClass"
                                            dropdownClass="dropdownClass"
                                            enableSearch={true}
                                            buttonClass="phoneButtonClass"
                                            searchClass="searchClass"
                                            placeholder='   Phone number'
                                            countryCodeEditable={false}
                                            //@ts-ignore
                                            value={state['num']}
                                            onChange={(num: any) => setPhoneNumber(num)}
                                        />
                                        <Box mt={2}>
                                            <Text letterSpacing='0px' className="site-font" fontSize='12px' color='white'> we will send a text with a verification code. Message and data rates may apply.</Text>
                                        </Box> </>}
                                    {!isPhone &&
                                        <VStack>
                                            <Input onChange={(e: any) => setUser(e.target.value)} placeholder="Email or username" color='white' fontSize='20px' variant='flushed' borderBottom='2px white solid'></Input>
                                            <Box pt={8}></Box>
                                            <Input onChange={(e: any) => setPass(e.target.value)} placeholder="Password" type='password' pattern="$" color='white' fontSize='20px' variant='flushed' borderBottom='2px white solid'></Input>
                                        </VStack>}
                                </Box>
                            </Box>
                            {isPhone &&
                                <Button className="site-font" onClick={() => { setIsSendcode(true) }} _hover={{ color: 'yellow', border: '2px rgba(66, 153, 225, 0.6) solid' }} color='white' border='gray 1px solid' background='transparent' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['num'] == '' ? true : false}>Send code</Button>}
                            {!isPhone &&
                                <Button onClick={() => logined()} className="site-font" _hover={{ color: 'yellow', border: '2px rgba(66, 153, 225, 0.6) solid' }} color='white' border='gray 1px solid' background='transparent' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={(state['username'] !== '' && state['pass'] !== '') ? false : true}>Enter</Button>}
                        </>}
                    {isSendcode &&
                        <>
                            <Box w='80%' height='500px' pt={1} className="justify">
                                <Center>
                                    <Box marginY='auto'>
                                        <Heading className="site-font" color='white' fontSize='30px'>My code is </Heading>
                                        <HStack mt='30px' spacing='23px'>
                                            <PinInput size='lg' placeholder='' type='alphanumeric'>
                                                <PinInputField className="site-font" w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                <PinInputField className="site-font" w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                <PinInputField className="site-font" w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                <PinInputField className="site-font" w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                            </PinInput>
                                        </HStack>
                                        <Flex mt='60px' flexDirection='row-reverse'>
                                            <Heading color='white' fontSize='23px'>{state['num']} </Heading>
                                        </Flex>
                                        <Flex flexDirection='row-reverse'>
                                            <Heading className="site-font" color='white' fontSize='20px'>resend </Heading>
                                        </Flex>
                                    </Box>
                                </Center>
                            </Box>
                        </>
                    }
                </VStack>
            </Center>
        </>
    );
}

export default Signin;
