import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import rmale from "../assets/rect-male.png";
import userBg from "../assets/user-bg.png";
import call from "../assets/call.png";

import logopart1 from "../assets/logo-part1.svg";
import logopart2 from "../assets/logo-part2.svg";

import { Check } from "../assets/checkSvg";

import { Link } from 'react-router-dom';
import "./wait_room.css";
import { useState } from "react";

import { IoIosWallet } from "react-icons/io";
import { FaShieldAlt, FaGem } from "react-icons/fa";
// import { cwd } from "process";



function WaitRoom() {
    const [ready, setReady] = useState(false);
    const [request, setRequest] = useState(false);

    const [isLessMobile] = useMediaQuery('(max-width: 415px)');
    const [isMobile] = useMediaQuery('(max-width: 560px)');
    const [isTable] = useMediaQuery('(max-width: 800px)');
    const [isCom] = useMediaQuery('(max-width: 1000px)');
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <Box fontFamily={'proxima_nova_rgregular'}>

            <Box pr={isLessMobile ? '12px' : '35px'} pl={isLessMobile ? '12px' : '35px'} color='white'>


                <Center>
                    <VStack w={isMobile ? '100%' : '80%'}>
                        <VStack className="wait_bg" position='relative' overflow='hidden' p={0} w={'100%'} borderRadius="20px">
                            <HStack w='100%' p="10px" className="r" background='#241f28' position='relative'>
                                <Box display={isMobile ? 'none' : ''} backgroundImage={userBg} backgroundSize='cover' width='100%' bgRepeat='no-repeat' position='absolute' left={0} right={0} top={0} bottom={0}></Box>

                                {/* <Box className="r"> */}
                                <Box className="" ml='0px!important' w='100%' display={isMobile || isTable ? '' : 'none'} >
                                    <Box className="padd-l-0" w={'33px'}>
                                        <Link to='/celebrity'>
                                            <ChevronLeftIcon cursor={'pointer'} zIndex={10} className="mauto" w='30px' h='30px' />
                                        </Link>
                                    </Box>
                                </Box>
                                <HStack h='170px' justifyContent={isTable ? 'space-evenly' : 'space-between'} className="c-s-24 c-m-10 padd-l-0">
                                    <Link to='/celebrity'>
                                        <Box display={isMobile || isTable ? 'none' : ''} className=" padd-l-0" h='160px'>
                                            <ChevronLeftIcon cursor={'pointer'} w='30px' h='30px' />
                                        </Box>
                                    </Link>
                                    <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='110px' maxW='110px' h="150px" backgroundSize='cover'>
                                        <Box borderRadius='50%' position='absolute' right={0} height={0} background='#A0FFA0' w='10px' h='10px'></Box>
                                    </Box>
                                    <VStack h="100%" p='10px' alignItems='flex-start' justifyContent='space-between'>
                                        <Box>
                                            <HStack alignItems='center'>
                                                <Heading className="site-font" marginTop={isMobile ? '-10px' : ''} fontSize='40px' >Future</Heading>
                                                <Check />
                                                {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                            </HStack>
                                            <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                                        </Box>
                                        {!ready ?
                                            <Button onClick={() => setReady(true)} color='black' w='100px' _selected={{}} _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }}>Ready</Button>
                                            : !request ?
                                                <Button onClick={() => setRequest(true)} background='#2e2b30' color='white' w='140px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }}>Request sent</Button>
                                                :
                                                <Text fontSize='22px'>Is calling you now</Text>
                                        }
                                        {isCom && request && <Button w='180px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} bottom={2} p={'24px'}>
                                            <HStack>
                                                <HStack>
                                                    <Image h='28px' src={logopart1}></Image>
                                                    <Image h='20px' src={logopart2} marginLeft='1px!important'></Image>
                                                </HStack>
                                                {/* <Image w='45px' src={blackLogo}></Image> */}
                                                <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Pick up</Heading>
                                            </HStack>
                                        </Button>}
                                    </VStack>
                                </HStack>
                                <Box h='170px' display={isCom ? 'none' : ''} className="c-m-6 c-l-6">
                                    {request &&
                                        <VStack h='100%' alignItems='flex-start' justifyContent='space-between'>
                                            <Box></Box>
                                            <Button w='180px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} bottom={2} p={'24px'}>
                                                <HStack>
                                                    <HStack>
                                                        <Image h='28px' src={logopart1}></Image>
                                                        <Image h='20px' src={logopart2} marginLeft='1px!important'></Image>
                                                    </HStack>
                                                    {/* <Image w='45px' src={blackLogo}></Image> */}
                                                    <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Pick up</Heading>
                                                </HStack>
                                            </Button>
                                        </VStack>
                                    }
                                </Box>
                                <Box h={isMobile || isTable ? '' : '170px'} className="c-s-23 c-m-12 c-l-7" display='flex' alignItems='center' justifyContent={isMobile || isTable ? 'center' : 'right'} p='10px'>
                                    <VStack h='100%' alignItems='flex-end' justifyContent='space-between' textAlign='right'>
                                        <Box whiteSpace='nowrap'>
                                            <Text color='grey'>Up to <span className="white">6 second</span> long chat</Text>
                                            <Text color='grey'> <span className="white">#31</span> out of <span className="white">#48</span> in queue</Text>
                                        </Box>
                                        <HStack>
                                            {/* <Ruby w={30} h={20} fill1="#7E599B" fill2="#BF76F3"></Ruby> */}
                                            <FaGem style={{ color: 'B026FF', fontSize: '26px', height: '26px', width: '25px' }} />
                                            <Heading className="site-font" fontSize='25px' >10,000</Heading>
                                            <Text whiteSpace='nowrap' fontSize='13px' color='grey'>per second</Text>
                                        </HStack>
                                    </VStack>
                                </Box>
                                {/* </Box> */}
                            </HStack>
                            <VStack minH="470px" width='100%' className="mt0">
                                {ready ?
                                    <Image marginTop={0} src={call} w='100%' h={isMobile || isTable ? '350px' : '470px'}></Image>
                                    :
                                    <VStack marginTop={20}>
                                        <Button className="site-font" _hover={{ color: 'black', background: 'white' }} background='#2e2b30' w='200px' textDecoration='underline' fontWeight='thin' fontSize='20px' >Enable Camera</Button>
                                        <Box padding='20px'></Box>
                                        <Button className="site-font" _hover={{ color: 'black', background: 'white' }} background='#2e2b30' w='200px' textDecoration='underline' fontWeight='thin' fontSize='20px' >Enable Mic</Button>
                                    </VStack>
                                }
                            </VStack>
                        </VStack>
                    </VStack>
                </Center>

            </Box>
        </Box>
    );
}

export default WaitRoom;
