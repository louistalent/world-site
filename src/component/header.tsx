import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

import { FaShieldAlt, FaGem } from "react-icons/fa";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import { useMediaQuery, Text, Center, Input, Box, Container, Image, HStack, VStack, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import EarnHam from "./hamburger/earn";
import WalletHam from "./hamburger/wallet";
import ProfileHam from "./hamburger/profile";
import SecondHam from "./hamburger/second";
import BodyHam from "./hamburger/body";
import logopart1White from "../assets/logo-part1-white.svg";
import logopart2White from "../assets/logo-part2-white.svg";

import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";

interface SearchProps {
    setIsSearch: any
}
const SearchBox = ({ setIsSearch }: SearchProps) => {
    return (
        <>
            <Box onClick={() => setIsSearch(false)} position={'fixed'} zIndex={'998'} background={'transparent'} right={0} left={0} top={0} bottom={0}></Box>
            <Box background={'#2e2b30'} p={'10px'} position='fixed' zIndex={'10000'} left={0} right={0} top={0} height={'50px'}>
                <Center>
                    <Box w='80%' className="justify-s">
                        <Box className="justify" borderBottom='2px #3f3943 solid'>
                            {/* <SearchIcon w='20px' color='gray.300'></SearchIcon> */}
                            <Search2Icon w='20px' color='gray.500' />
                            <Input fontFamily={'Proxima_Nova_400'} className="site-font" color='white' w='200px' ml='5px' placeholder="search" variant='unstyled'></Input>
                        </Box>
                        <BsXLg onClick={() => setIsSearch(false)} className="white" fontSize={'22px'} />
                    </Box>
                </Center>
            </Box>
        </>
    )
}
interface HamProps {
    cancel_hamburger: any
    online: boolean
    setOnline: any
}
const Hamburger = ({ cancel_hamburger, online, setOnline }: HamProps) => {
    const [isWallet, setIsWallet] = useState(false);
    const [isEarn, setIsEarn] = useState(false);
    const [isProfile,setIsProfile] = useState(false);
    const [isSecond, setIsSecond] = useState(false);
    const [isBackbtn, setIsBackbtn] = useState(false);

    const btnEvent = (para: string) => {
        if (para === 'wallet') {
            setIsWallet(true);
        } else if (para === 'earn') {
            setIsEarn(true);
        } else if (para === 'second') {
            setIsEarn(false)
            setIsSecond(true);
        }
        else if (para === 'editProfile') {
            setIsEarn(false)
            setIsSecond(false);
            setIsProfile(true);
        }
        setIsBackbtn(true)
    }
    const goBody = () => {
        setIsEarn(false)
        setIsProfile(false);
        setIsWallet(false)
        setIsBackbtn(false)
        setIsSecond(false);
    }
    return (
        <>

            <Box onClick={() => cancel_hamburger(false)} position={'fixed'} zIndex={'998'} background={'transparent'} right={0} left={0} top={0} bottom={0}></Box>

            <Box color={'white'} className="hamburger-list" p={'30px 40px 20px 40px'}>
                {/* status */}
                <Box className="" mt='9px'>
                    <Box className="r">
                        <Box className="c-s-24 justify-s">
                            {
                                isBackbtn ?
                                    <Box>
                                        <ChevronLeftIcon style={{ marginLeft: '-10px'}} onClick={goBody} cursor={'pointer'} fontSize='50px' />
                                    </Box>
                                    :
                                    <Box>
                                        <ChevronLeftIcon style={{ marginLeft: '-10px',opacity:0}} onClick={goBody} cursor={'pointer'} fontSize='50px' />
                                    </Box>
                                    // <Box className="justify-s">
                                    //     <Text onClick={() => setOnline(true)} border={`${online ? '1px white solid' : ''}`} zIndex={online ? '1001' : ''} color={online ? '#a0ffa0' : ''} mr='-3px' fontSize={'12px'} className="out-btn ham-option">Online</Text>
                                    //     <Text onClick={() => setOnline(false)} border={online ? '' : '1px white solid'} zIndex={online ? '1000' : ''} color={online ? '' : '#a0ffa0'} ml='-3px' fontSize={'12px'} className="out-btn ham-option">Offline</Text>
                                    // </Box>
                            }
                            <Box>
                                <BsXLg onClick={() => cancel_hamburger(false)} className="white" cursor='pointer' fontSize={'30px'} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="">
                    {!isWallet && !isEarn && !isSecond && !isProfile ?
                        <BodyHam btnEvent={btnEvent} />
                        : <>
                            {isWallet &&
                                <WalletHam />
                            }
                            {isEarn &&
                                <EarnHam btnEvent={btnEvent} />
                            }
                            {isSecond &&
                                <SecondHam />
                            }
                            {isProfile &&
                                <ProfileHam />
                            }
                        </>

                    }
                </Box>
            </Box>
        </>
    )
}
function HeaderLogin(props: any) {
    const [hamburger, setHamburger] = useState(false);
    const [online, setOnline] = useState(true);
    const [isSearch, setIsSearch] = useState(false);

    const [isMobile] = useMediaQuery('(max-width: 520px)')
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <>
            {hamburger &&
                <Hamburger setOnline={setOnline} online={online} cancel_hamburger={setHamburger} />
            }
            {isSearch &&
                <SearchBox setIsSearch={setIsSearch} />
            }
            {props.props.logined === false ?
                <HStack justify='space-between' pt={10} pb={'6px'}>
                    <Box className={'justify'}>
                        <Link to='/'>
                            <HStack>
                                <Image h='40px' src={logopart1White}></Image>
                                <Image h='30px' src={logopart2White} marginLeft='1px!important'></Image>
                            </HStack>
                        </Link>
                        <Box className="justify" ml={isMobile ? '0px' : '20px'} display={isMobile ? 'none' : ''} borderBottom='2px #3f3943 solid'>
                            {!props.isHome &&
                                <>
                                    {/* <SearchIcon w='13px' color='gray.300'></SearchIcon> */}
                                    <Search2Icon color='gray.500' />
                                    <Input color={'white'} fontFamily='Proxima_Nova_normal' className="site-font" w='100px' ml='5px' placeholder="search" variant='unstyled'></Input>
                                </>
                            }
                        </Box>
                        {isMobile &&
                            <>
                                {
                                    !props.isHome &&
                                    <Search2Icon ml={'15px'} _hover={{ color: '#A0FFA0' }} cursor={'pointer'} onClick={() => setIsSearch(true)} w='22px' fontSize={'20px'} color='gray.500' />
                                    // <SearchIcon ml={'15px'} _hover={{ color: '#A0FFA0' }} cursor={'pointer'} onClick={() => setIsSearch(true)} w='22px' fontSize={'20px'} color='gray.300'></SearchIcon>

                                }
                            </>
                        }
                    </Box>
                    <Box>
                        <Link to='/signin'>
                            <Button style={{ width: "100px", background: '#201727', color: 'white', marginRight: '25px' }} size='md'>
                                Login
                            </Button>
                        </Link>
                        <Link to='/signup'>
                            <Button style={{ width: "100px", background: 'white', color: "black" }} size='md'>
                                Sign up
                            </Button>
                        </Link>
                    </Box>
                </HStack>
                :
                <HStack justify='space-between' pt={10} pb={'6px'}>
                    <Box className={'justify'}>
                        <Link to='/'>
                            <HStack>
                                <Image h='40px' src={logopart1White}></Image>
                                <Image h='30px' src={logopart2White} marginLeft='1px!important'></Image>
                            </HStack>
                        </Link>
                        <Box className="justify" ml={isMobile ? '0px' : '20px'} display={isMobile ? 'none' : ''} borderBottom='2px #3f3943 solid'>
                            {!props.isHome &&
                                <>
                                    <Search2Icon color='gray.500' />
                                    {/* <SearchIcon w='13px' color='gray.300'></SearchIcon> */}
                                    <Input fontFamily='Proxima_Nova_normal' className="site-font" w='100px' ml='5px' placeholder="search" variant='unstyled'></Input>
                                </>
                            }
                        </Box>
                        {isMobile &&
                            <>
                                {
                                    !props.isHome &&
                                    <Search2Icon ml={'15px'} _hover={{ color: '#A0FFA0' }} cursor={'pointer'} onClick={() => setIsSearch(true)} w='22px' fontSize={'20px'} color='gray.500' />

                                    // <SearchIcon ml={'15px'} _hover={{ color: '#A0FFA0' }} cursor={'pointer'} onClick={() => setIsSearch(true)} w='22px' fontSize={'20px'} color='gray.300'></SearchIcon>
                                }
                            </>
                        }
                    </Box>
                    <Box>
                        <HStack>
                            <Box className={`${isMobile ? '' : 'justify'}`} display={isMobile ? 'flex' : ''}
                                flexDir={`${isMobile ? 'row' : 'row'}`}
                                borderRadius='7px' overflow='hidden'>
                                <Box className="justify " fontSize='18px' color="white" p='4px 8px 4px 8px' background={gBaseColor}>
                                    {/* <Ruby h={20} w={15} fill1='#7E599B' fill2='#BF76F3'></Ruby> */}
                                    <FaGem style={{ color: 'B026FF', fontSize: '20px', height: '20px', width: '15px' }} />&nbsp; 35,675
                                </Box>
                                <Box fontSize='18px' color="white" p='4px 8px 4px 8px' background={gbBaseColor}>$ 35.66</Box>
                            </Box>
                            {/* <Box></Box> */}
                            <BsList onClick={() => setHamburger(true)} className="hamburger"></BsList>
                        </HStack>
                    </Box>
                </HStack>
            }
        </>

    );
}

export default HeaderLogin;
