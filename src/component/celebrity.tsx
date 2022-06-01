import { useMediaQuery, Box, Text, Image, Button, Container, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import avatar from "../assets/avatar.jpg";
import rmale from "../assets/rect-male.png";
import logo from "../assets/logo.png";
import blackLogo from "../assets/black-logo.png";
import { Link } from 'react-router-dom';
import { BsCheckCircle, BsFillStarFill, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsThreeDots } from "react-icons/bs";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { Check } from "../assets/checkSvg";
import { UseStateContext } from "../contexts";
import { useEffect, useState } from "react";
import { useHref, useNavigate } from 'react-router-dom';
import logopart1White from "../assets/logo-part1.svg";
import logopart2White from "../assets/logo-part2.svg";

function Celebrity(props: any) {
    const navigate = useNavigate();

    const [StateContext, { dispatch }] = UseStateContext();
    const [isArrow, setIsArrow] = useState(false);
    const [isStarFill, setIsStarFill] = useState(false);
    // dispatch({ type: 'isTokenSearchBar', payload: true });
    // StateContext.logined
    const { logined } = StateContext;
    // useEffect(() => {
    //     alert(StateContext.logined)
    // }, [StateContext.logined])
    const [isMobile] = useMediaQuery('(max-width: 520px)')
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';

    const VideoChart = () => {
        logined ? navigate('/waitroom') : navigate('/signup')

    }

    return (
        <>
            <Container maxW='container.xl' >

                <Box pr={`${isMobile ? '' : '35px'}`} pl={`${isMobile ? '' : '35px'}`} pb='35px' color='white'>
                    <Center>
                        <VStack h='600px' mt='35px' w={isMobile ? '100%' : ''}>
                            <Box className="justify" mt='14px' justifyContent='space-between' w='100%'>
                                <Text ml='' fontFamily='proxima_nova_rgregular' fontSize='14px' color='#A0FFA0'>Online</Text>
                                <HStack className="justify-ju-r" textAlign={'right'} display={isMobile ? '' : 'none'} >
                                    {
                                        isStarFill ?
                                            <BsStar onClick={() => setIsStarFill(!isStarFill)} style={{ marginRight: '20px', cursor: 'pointer' }} fontSize='30px' ></BsStar>
                                            :
                                            <BsFillStarFill onClick={() => setIsStarFill(!isStarFill)} style={{ marginRight: '20px', cursor: 'pointer' }} fontSize='30px' />
                                    }

                                    <BsBoxArrowUp style={{ marginRight: logined ? '20px' : '', cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                                    <BsThreeDots className={`${logined ? '' : 'dis-n'}`} style={{ cursor: 'pointer' }} fontSize='30px' />
                                </HStack>
                            </Box>
                            <HStack mt={30} spacing={5} w={isMobile ? '100%' : ''} position='relative'>
                                <Box onMouseEnter={() => setIsArrow(true)} onMouseLeave={() => setIsArrow(false)} position='relative' overflow='hidden' border='2px #A0FFA0 solid' p={0} h={'570px'} w={isMobile ? '100%' : '470px'} borderRadius={10}>
                                    <HStack spacing={0} w={isMobile ? '100%' : ''}>
                                        <Box h='70px' flexGrow={2} background='rgba(196, 196, 196, 0.05)' p='10px'>
                                            <HStack alignItems='center'>
                                                <Heading className="site-font" as='h3' size='md' >Future</Heading>
                                                <Check />

                                                {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                            </HStack>
                                            <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                                        </Box>
                                        {/* <Box w='30px' h={'70px'} background='linear-gradient(90deg, rgb(25 20 28) 36.98%,rgb(25 21 29) 36.98%, rgb(23 18 26) 100%)!important'></Box> */}
                                        <Box h='70px' display='flex' alignItems='center' flexGrow={1} background='rgba(196, 196, 196, 0.1)' p='10px'>
                                            <HStack margin='auto'>
                                                <FaGem style={{ color: '#B026FF', fontSize: '22px', height: '30px', width: '20px' }} />
                                                <Text className="" fontFamily={'Proxima_Nova_400'} fontSize='28px' >250</Text>
                                                <Text fontSize='13px' marginTop='5px!important' >/ sec</Text>
                                            </HStack>
                                        </Box>
                                    </HStack>
                                    <Box>
                                        <Image src={rmale} w='100%' h={'70vh'}></Image>
                                    </Box>

                                    {/* header layout on image */}
                                    <Box position='absolute' ml='6px' mr='6px' top={20} left={0} right={0}>
                                        <HStack justifyContent='space-evenly'>
                                            <Box flexGrow={1} h='6px' borderRadius='5px' background='#3a383b'></Box>
                                            <Box flexGrow={1} h='6px' borderRadius='5px' background='#838284'></Box>
                                            <Box flexGrow={1} h='6px' borderRadius='5px' background='#838284'></Box>
                                        </HStack>
                                    </Box>
                                    {/* arrow layout on image*/}
                                    <Box display={isArrow ? '' : 'none'} _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' left='10px' top='50%' p='5px'>
                                        <ChevronLeftIcon _hover={{ fontSize: '32px' }} fontSize='30px'></ChevronLeftIcon>
                                    </Box>
                                    <Box display={isArrow ? '' : 'none'} _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' right='10px' top='50%' p='5px'>
                                        <ChevronRightIcon _hover={{ fontSize: '32px' }} fontSize='30px'></ChevronRightIcon>
                                    </Box>


                                    {/* footer1 layout on image*/}
                                    <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={isMobile ? "22px" : "28px"}></BsFillPersonFill>
                                            <Text fontFamily='proxima_nova_rgregular' fontSize={isMobile ? "18px" : "24px"} color='white'>16 in queue</Text>
                                        </HStack>
                                    </Box>

                                    {/* <Box textAlign='center' position='absolute' right='13%' bottom={`${logined ? '75px' : '48px'}`} w='60%' p='24px'>
                                        <HStack textAlign={'center'}>
                                            <BsFillPersonFill fontSize='20px'></BsFillPersonFill>
                                            <Text fontFamily='proxima_nova_rgregular' fontSize={isMobile ? "14px" : "20px"} color='white'>16 in queue</Text>
                                        </HStack>
                                    </Box> */}

                                    {/* footer2 layout on image*/}
                                    <Box position='absolute' borderBottomRightRadius={'10px'} borderBottomLeftRadius={'10px'} right={0} left={0} bottom={0} height={`${logined ? '100px' : '70px'}`} background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'>
                                        {/* button hover */}
                                        {/* _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} */}
                                        {/* <Button onClick={() => VideoChart()} background={`${!logined ? 'rgba(255, 255, 255, 0.3)' : '#edf2f7'}`} position='absolute' _hover={{}} left={'20%'} right='20%' bottom={`${logined ? 9 : 2}`} p={isMobile ? '14px' : '24px'}> */}
                                        {/* <Button onClick={() => VideoChart()} background={`#edf2f7`} position='absolute' _hover={{}} left={'20%'} right='20%' bottom={`${logined ? 9 : 2}`} p={isMobile ? '14px' : '24px'}> */}
                                        <Button onClick={() => VideoChart()} background={`#edf2f7`} position='absolute' _hover={{}} left={'20%'} right='20%' bottom={`${logined ? 9 : 2}`} p={'24px'}>
                                            <HStack>
                                                {/* <Image w='45px' src={blackLogo}></Image> */}
                                                <HStack>
                                                    <Image h='30px' src={logopart1White}></Image>
                                                    <Image h='20px' src={logopart2White} marginLeft='1px!important'></Image>
                                                </HStack>
                                                {/* <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Video Chat</Heading> */}
                                                <Heading className="site-font video_effect" fontSize={'22px'} color='gray.700'> Video Chat</Heading>
                                            </HStack>
                                        </Button>
                                        <Center textAlign={'center'}>
                                            <Heading fontWeight={'10px'} display={`${logined ? '' : 'none'}`} fontSize={'14px'} mt='72px' w='60%' >
                                                You have up to 3min , 29 sec
                                            </Heading>
                                        </Center>
                                    </Box>

                                </Box>


                                {/* other tools */}
                                <VStack display={isMobile ? 'none' : ''} position='absolute' right="-40px" top={0}>
                                    {/*  BsBoxArrowUp, BsThreeDotsVertical className={`${logined?'dis-n':''}`}, BsStar, */}
                                    {
                                        isStarFill ?
                                            <BsStar onClick={() => setIsStarFill(!isStarFill)} style={{ marginRight: '0px', cursor: 'pointer' }} fontSize='30px' ></BsStar>
                                            :
                                            <BsFillStarFill onClick={() => setIsStarFill(!isStarFill)} style={{ marginRight: '0px', cursor: 'pointer' }} fontSize='30px' />
                                    }
                                    <BsBoxArrowUp style={{ marginTop: "40px", cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                                    <BsThreeDotsVertical className={`${logined ? '' : 'dis-n'}`} style={{ marginTop: "40px", cursor: 'pointer' }} fontSize='30px' />
                                </VStack>
                            </HStack>
                        </VStack>
                    </Center>
                </Box>
            </Container>
        </>
    );
}

export default Celebrity;
