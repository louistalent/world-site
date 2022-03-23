import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import avatar from "../assets/avatar.jpg";
import rmale from "../assets/rect-male.png";
import logo from "../assets/logo.png";
import blackLogo from "../assets/black-logo.png";
import { Link } from 'react-router-dom';
import { BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill } from "react-icons/bs";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { Check } from "../assets/checkSvg";


function Celebrity(props: any) {

    const [isMobile] = useMediaQuery('(max-width: 520px)')
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <>
            <Box pr='35px' pl='35px' color='white'>
                <Center>
                    <VStack h='600px' w={isMobile ? '100%' : ''}>
                        <Text className='site-font'>You have up to 3 min, 29 sec</Text>
                        <Box className="justify" mt='-5px' justifyContent='space-between' w='100%'>
                            <Text ml='10px' fontFamily='proxima_nova_rgregular' fontSize='13px' color='#A0FFA0'>Online</Text>
                            <HStack className="justify" display={isMobile ? '' : 'none'} >
                                {/* <BsThreeDotsVertical style={{ cursor: 'pointer' }} fontSize='30px' ></BsThreeDotsVertical> */}
                                <BsStar style={{ marginRight: '20px', cursor: 'pointer' }} fontSize='30px' ></BsStar>
                                <BsBoxArrowUp style={{ cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                            </HStack>
                        </Box>
                        <HStack mt={30} spacing={5} w={isMobile ? '100%' : ''} position='relative'>
                            <Box position='relative' overflow='hidden' border='2px #A0FFA0 solid' p={0} h={isMobile ? '480px' : '570px'} w={isMobile ? '100%' : '420px'} borderRadius={10}>
                                <HStack spacing={0} w={isMobile ? '100%' : ''}>
                                    <Box h='70px' flexGrow={2} background='rgba(196, 196, 196, 0.05)' p='10px'>
                                        <HStack alignItems='center'>
                                            <Heading className="site-font" as='h3' size='md' >Future</Heading>
                                            <Check />

                                            {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                        </HStack>
                                        <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                                    </Box>
                                    <Box w='30px' h={'70px'} background='linear-gradient(90deg, rgb(25 21 29) 36.98%, rgb(20 18 23) 100%)!important'></Box>
                                    <Box h='70px' display='flex' alignItems='center' flexGrow={1} background='rgba(196, 196, 196, 0.1)' p='10px'>
                                        <HStack margin='auto'>
                                            <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                            <Heading className="site-font" fontSize='25px' >250</Heading>
                                            <Text fontSize='13px' marginTop='7px!important' >/sec</Text>
                                        </HStack>
                                    </Box>
                                </HStack>
                                <Box>
                                    <Image src={rmale} w='100%' h={isMobile ? '55vh' : '70vh'}></Image>
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
                                <Box _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' left='5px' top='50%' p='5px'>
                                    <ChevronLeftIcon _hover={{ color: '#50ba51' }} fontSize='30px'></ChevronLeftIcon>
                                </Box>
                                <Box _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' right='5px' top='50%' p='5px'>
                                    <ChevronRightIcon _hover={{ color: '#50ba51' }} fontSize='30px'></ChevronRightIcon>
                                </Box>

                                {/* footer1 layout on image*/}
                                <Box borderRadius={'10px 10px 0px 0px'} overflow='hidden' position='absolute' left='30%' bottom='66px' height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'></Box>
                                <Box textAlign='center' position='absolute' right='13%' bottom='48px' w='60%' p='24px'>
                                    <HStack>
                                        <BsFillPersonFill fontSize='20px'></BsFillPersonFill>
                                        <Text fontFamily='proxima_nova_rgregular' fontSize={isMobile ? "13px" : "20px"} color='white'>16 in queue</Text>
                                    </HStack>
                                </Box>

                                {/* footer2 layout on image*/}
                                <Box position='absolute' right={0} left={0} bottom={-1} height='70px' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'></Box>
                                <Link to={'/waitroom'}>
                                    <Button disabled={!props.logined} _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} position='absolute' right='20%' bottom={2} w='60%' p={isMobile ? '14px' : '24px'}>
                                        <HStack display={props.logined ? 'flex' : 'none'}>
                                            <Image w='45px' src={blackLogo}></Image>
                                            <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Video Chat</Heading>
                                        </HStack>
                                    </Button>
                                </Link>
                            </Box>

                            {/* other tools */}
                            <VStack display={isMobile ? 'none' : ''} position='absolute' right="-40px" top={0}>
                                {/*  BsBoxArrowUp, BsThreeDotsVertical, BsStar, */}
                                <BsStar style={{ cursor: 'pointer' }} fontSize='30px' ></BsStar>
                                <BsBoxArrowUp style={{ marginTop: "40px", cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                            </VStack>
                        </HStack>
                    </VStack>
                </Center>
            </Box>

        </>
    );
}

export default Celebrity;
