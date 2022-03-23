import { Box, Container, Button, Stack, Text, HStack, VStack, Center, Input, Badge, InputGroup, InputLeftElement, InputRightElement, Heading } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import HeaderLogin from "./header";
import people from "../assets/1.jpg";
import { HiAdjustments } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from "react";
import './home.css';
import { FaGem } from "react-icons/fa";

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
function Home(props: any) {
    const [filterModal, setFilterModal] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);
    return (
        <Box className="main-home">
            {filterModal === true &&
                <FilterModal setFilterModal={setFilterModal} male={male} setMale={setMale} female={female} setFemale={setFemale} other={other} setOther={setOther} />
            }
            <Container maxW='container.xl' >
                <Center mb='20px'>
                    <Box display={props.logined ? 'none' : ''} bg='#201727' p={5} borderRadius={10}>
                        <Center className="site-font" fontSize='3xl' color='white'>every second counts...</Center>
                        <Center className="site-font" fontSize='1xl' color='#645e69' fontWeight='bold' >meet your favorite creators with pay-per-second video chat</Center>
                    </Box>
                </Center>
                <Center>
                    <InputGroup maxW={'470px'}>
                        <Input maxW={'470px'} color='black' placeholder='Who do you want seconds with?' background='white' />
                        <InputRightElement children={<Search2Icon color='gray.500' />} />
                    </InputGroup>
                </Center>
            </Container>
            <Container mt={5} maxW='container.xl'>
                <HStack >
                    <Heading className="site-font" color="white" as='h4' size='md' isTruncated>Online Now</Heading>
                    <Box onClick={() => setFilterModal(true)} p='5px' _hover={{ cursor: 'pointer' }} background={'#201727'} borderRadius="50%" backdropFilter='blur(20px)' >
                        <HiAdjustments fontSize={'25px'} color='white' />
                    </Box>
                </HStack>
            </Container>
            <Center className="img-display" p="10px 0px 0px 0px">
                <Box className="img-scroll">
                    <Link className="home-img-link" to='/celebrity'>
                        <Box className="home-img" backgroundImage={people}>
                            <HStack justify='space-between'>
                                <Heading className="site-font" color='white' as='h3' size='md' >Cindy Moss</Heading>
                                <Badge p={2} backgroundColor='#A0FFA0' borderRadius={50}></Badge>
                            </HStack>
                            <HStack justify='space-between'>
                                <Heading className="site-font" color='white' as='h4' size='sm' >@CindyMoss</Heading>
                            </HStack>
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
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
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
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
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
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
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
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
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
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
                            <HStack className="status-display" fontFamily='Proxima_Nova_400'>
                                <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '30px', width: '20px' }} />
                                <Text color={'white'} fontSize={'20px'}>300</Text><Text color={'white'} fontSize={'15px'}>/sec</Text>
                            </HStack>
                        </Box>
                    </Link>
                </Box>
            </Center>
            <Container display={props.logined ? '' : 'none'} mt={7} maxW='container.xl'>
                <VStack textAlign={'left'} display='flex' alignItems={'flex-start'}>
                    <Heading className="site-font" color="white" as='h4' size='md' >My list</Heading>
                    <Text opacity={'50%'} ml={'30px'} color={'white'} fontStyle='italic' fontFamily='Proxima_Nova_400' fontSize={'15px'}>There is no one in your saved list</Text>
                </VStack>
            </Container>
        </Box >
    );
}

export default Home;
