import { Box, Container, Button, Stack, Text, Image, HStack, useMediaQuery, VStack, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { Search2Icon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import HeaderLogin from "./header";
import people from "../assets/1.jpg";
import { HiAdjustments } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import './home.css';
import { FaGem } from "react-icons/fa";
import rmale from "../assets/rect-male.png";
import { Check } from "../assets/checkSvg";

import { BsCheckCircle, BsXLg, BsCameraVideo, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsThreeDots } from "react-icons/bs";

function FilterModal(props: any) {
    return (
        <>
            <Box onClick={() => { props.setFilterModal(false) }} className="filter-modal-bg"></Box>
            <Box className="filter-modal-body" >

                <Box className="filter">
                    <Box className="filter-com" flex={4}>
                        <Heading className="site-font" color="white" as='h4' size='md' isTruncated>Online Now</Heading>
                        <Box p='5px' _hover={{ cursor: 'pointer' }} background={'#201727'} borderRadius="50%" backdropFilter='blur(20px)' >
                            <HiAdjustments fontSize={'25px'} color='white' />
                        </Box>
                    </Box>
                    <Box className="line"></Box>
                    <Box className="filter-com" flex={3}>
                        <VStack>
                            <HStack className="just" >
                                <Box className="check-label" w='60px'>Male</Box>
                                <Box onClick={() => props.setMale(!props.male)} className="" cursor={'pointer'} w='25px' background={'white'} borderRadius={'5px'} p='2px 4px'>
                                    {props.male === true ?
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'#00D56E'}></Box>
                                        :
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'transparent'}></Box>
                                    }
                                </Box>
                            </HStack>
                            <HStack className="just" >
                                <Box className="check-label" w='60px'>Female</Box>
                                <Box onClick={() => props.setFemale(!props.female)} className="" cursor={'pointer'} w='25px' background={'white'} borderRadius={'5px'} p='2px 4px'>
                                    {props.female === true ?
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'#00D56E'}></Box>
                                        :
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'transparent'}></Box>
                                    }
                                </Box>
                            </HStack>
                            <HStack className="just" >
                                <Box className="check-label" w='60px'>Other</Box>
                                <Box onClick={() => props.setOther(!props.other)} className="" cursor={'pointer'} w='25px' background={'white'} borderRadius={'5px'} p='2px 4px'>
                                    {props.other === true ?
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'#00D56E'}></Box>
                                        :
                                        <Box className="" margin={'auto'} w='10px' h={'10px'} borderRadius={'3px'} background={'transparent'}></Box>
                                    }
                                </Box>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box className="line"></Box>
                    <Box className="filter-com mobile-change" flex={3}>
                        <Box className="check-label">Age</Box>
                        <Button className='' ml='10px' h='30px' p='3px 9px'>All</Button>
                    </Box>
                    <Box className="line"></Box>
                    <Box className="filter-com mobile-change" flex={4}>
                        <Box className="check-label">Country</Box>
                        <Button className='' ml='10px' h='30px' p='3px 9px'>All</Button>
                    </Box>
                    <Box className="line"></Box>
                    <Box className="filter-com mobile-change" flex={6}>
                        <Box className="check-label">Gems per second</Box>
                        <Button className='' ml='10px' h='30px' p='3px 9px'>All</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

function IncomingCall(props: any) {
    const [isArrow, setIsArrow] = useState(false);
    const [isMobile] = useMediaQuery('(max-width: 567px)')
    return (
        <Box alignItems={'center'} className="mauto" style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, zIndex: 9998, display: 'flex' }}>
            {/* <Box onClick={() => { props.setIncomingCallModal(false) }} className="IncomingCall-modal-bg"></Box> */}
            <Box onClick={() => { props.setIncomingCallModal(false) }} style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, opacity: '0.9', backgroundColor: '#0A070C' }}></Box>
            <Center alignItems={'center'} style={{ margin: 'auto auto' }}>
                <HStack className="" mt={30} spacing={5}>
                    <Box onMouseEnter={() => setIsArrow(true)} onMouseLeave={() => setIsArrow(false)} position='relative' overflow='hidden' border='1px #B026FF solid' p={0} h={'570px'} w={isMobile ? '99%' : '456px'} margin='auto' borderRadius={10}>
                        <HStack background={'#0A070C'} color={'white'} spacing={0} w={isMobile ? '100%' : ''}>
                            <Box h='70px' flexGrow={2} background='rgba(196, 196, 196, 0.05)' p='10px'>
                                <HStack alignItems='center'>
                                    <Heading className="site-font" as='h3' size={'md'} >Future</Heading>
                                    {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                </HStack>
                                <Text fontFamily='proxima_nova_rgregular'>@adam</Text>
                            </Box>
                            <Box h='70px' flexGrow={2} display='flex' alignItems={'center'} justifyContent='right' background='rgba(196, 196, 196, 0.05)' p='10px'>
                                <Heading fontFamily='proxima_nova_rgregular' fontSize={'25px'}>Incoming Video Call</Heading>
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
                        <Box display={isArrow ? '' : 'none'} _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' left='5px' top='50%' p='5px'>
                            <ChevronLeftIcon _hover={{ fontSize: '32px' }} color='white' fontSize='30px'></ChevronLeftIcon>
                        </Box>
                        <Box display={isArrow ? '' : 'none'} _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' right='5px' top='50%' p='5px'>
                            <ChevronRightIcon _hover={{ fontSize: '32px' }} color='white' fontSize='30px'></ChevronRightIcon>
                        </Box>

                        {/* footer2 layout on image*/}
                        <Box className="justify-s" padding={'5px'} position='absolute' right={0} left={0} bottom={0} background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'>
                            <Box className="justify" p='2px'>
                                <Button _hover={{ color: 'black' }} height='50px' borderWidth={'2px'} variant={'outline'} background={`transparent`} p={'18px'}>
                                    <Heading className="site-font video_effect" fontSize={'22px'} color='white'> Block</Heading>
                                </Button>
                            </Box>
                            <Box className="justify">
                                <Button width={'60px'} height='60px' className="justify" textAlign={'center'} variant={'unstyled'} mr={'25px'} borderRadius={'50%'} background={`#A0FFA0`} >
                                    <BsCameraVideo fontSize={'25px'} style={{ margin: "auto" }} />
                                </Button>
                                <Button width={'60px'} height='60px' className="justify" textAlign={'center'} variant={'unstyled'} mr={'25px'} borderRadius={'50%'} background={`#EB5545`} >
                                    <BsXLg color="white" fontSize={'25px'} style={{ margin: "auto" }} />
                                </Button>
                            </Box>
                        </Box>

                    </Box>
                </HStack>
            </Center>
        </Box>
    )
}



function Home(props: any) {

    const [filterModal, setFilterModal] = useState(false);
    const [IncomingCallModal, setIncomingCallModal] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);
    const [isMobile] = useMediaQuery('(max-width: 520px)')

    // const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     console.log(event.code);
    //     if (event.code === "KeyV") {
    //         alert('wow')
    //     }
    // };

    useEffect(() => {
        // handle what happens on key press
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'v') {
                setIncomingCallModal(true)
            }
        };

        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return (
        // <Box onKeyDown={keyDownHandler} className="tabindex-box-none main-home">
        <Box className="tabindex-box-none main-home">
            {filterModal === true &&
                <FilterModal setFilterModal={setFilterModal} male={male} setMale={setMale} female={female} setFemale={setFemale} other={other} setOther={setOther} />
            }
            {IncomingCallModal &&
                <IncomingCall setIncomingCallModal={setIncomingCallModal} />
            }
            <Container maxW='container.xl' mt={'10px'} >
                <Center mb='20px'>
                    <Box display={props.logined ? 'none' : ''} bg='#201727' p={5} borderRadius={10}>
                        <Center className="site-font" fontSize='3xl' color='white'>every second counts...</Center>
                        <Center className="site-font" fontSize='1xl' color='#645e69' fontWeight='bold' >meet your favorite creators with pay-per-second video chat</Center>
                    </Box>
                </Center>
                <Center>
                    <InputGroup maxW={'470px'}>
                        <Input maxW={'470px'} fontFamily='Proxima_Nova_400' color='#160f1abf' opacity={1} placeholder='Who do you want seconds with?' background='white' />
                        <InputRightElement children={<Search2Icon color='gray.500' />} />
                    </InputGroup>
                </Center>
            </Container>
            <Container mt={9} mb='10px' maxW='container.xl'>
                <HStack >
                    <Heading className="site-font" color="white" as='h4' size='md' isTruncated>Online Now</Heading>
                    {/* <Box onClick={() => setFilterModal(true)} p='5px' _hover={{ cursor: 'pointer' }} background={'#201727'} borderRadius="50%" backdropFilter='blur(20px)' >
                        <HiAdjustments fontSize={'25px'} color='white' />
                    </Box> */}
                </HStack>
            </Container>


            {/* This is Horizantality scroll  Start*/}
            {/* img-display */}
            {/* img-scroll */}
            {/* This is Horizantality scroll  End */}

            <Container maxW='container.xl'>
                <Center className="img-display-v" p="0px 0px 0px 0px">
                    <Center className="img-scroll-v" pb='15px'>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                        <Link className="home-img-link" to='/celebrity'>
                            <Box className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                {/* <Box borderRadius={'10px 10px 0px 0px'} className='justify' overflow='hidden' position='absolute' left='30%' bottom={`${logined ? '95px' : '66px'}`} height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'> */}
                                <HStack color={'white'} className="status-display1" fontFamily='Proxima_Nova_400'>
                                        <HStack className='justify' textAlign={'center'}>
                                            <BsFillPersonFill fontSize={"16px"}></BsFillPersonFill>
                                            <Text ml='0px!important' fontFamily='proxima_nova_rgregular' fontSize={"12px"} color='white'>32 in queue</Text>
                                        </HStack>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </Center>
                </Center>

            </Container>

            {/* <Container maxW='container.xl'>
                <div className="row nowarp">
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>

                            <Box maxWidth={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>
                            <Box width={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>

                            <Box width={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>

                            <Box width={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>

                            <Box width={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 ">
                        <Link className="home-img-link" to='/celebrity'>

                            <Box width={'100%'} className="home-img" backgroundImage={people}>
                                <HStack justify='space-between'>

                                    <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                    <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                                </HStack>
                                <HStack justify='space-between'>
                                    <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                                </HStack>
                                <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                    <span className="gem-number">300</span><span className="gem-unit" style={{ marginLeft: '5px' }} >/ sec</span>
                                </HStack>
                            </Box>
                        </Link>
                    </div>
                </div>
            </Container> */}

            {/* My list */}
            {/* <Container display={props.logined ? '' : 'none'} mt={7} maxW='container.xl'>
                <VStack textAlign={'left'} display='flex' alignItems={'flex-start'}>
                    <Heading className="site-font" color="white" as='h4' size='md' >My list</Heading>
                    <Text opacity={'50%'} ml={'30px'} color={'white'} fontStyle='italic' fontFamily='Proxima_Nova_400' fontSize={'15px'}>There is no one in your saved list</Text>
                </VStack>
            </Container> */}
        </Box >
    );
}

export default Home;
