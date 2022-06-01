import rmale from "../../assets/rect-male.png";
import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

import setting from "../../assets/setting.svg";
import { Check } from "../../assets/checkSvg";
import { MdSettings } from "react-icons/md";
import { useEffect, useState } from "react";
interface Event {
    btnEvent: (a: string) => void
}

const BodyHam = ({ btnEvent }: Event) => {
    let location = useLocation();
    const [isCelebrityPage,setIsCelebrityPage] = useState(false);
    useEffect(()=>{
        location.pathname==='/celebrity'?setIsCelebrityPage(true):setIsCelebrityPage(false);
    },[location.pathname])
    return (
        <>
            {/* image section */}
            < Box className="" pt={'10px'} >
                <Box className="r">
                    <Box className="c-s-24" >
                        <Box className="" display={'flex'} alignItems='center'>
                            <Text fontFamily={'Proxima_Nova_600'} fontSize={'20px'}>Adam</Text>
                            &nbsp;
                            <Check />
                        </Box>
                    </Box>
                </Box>
                <Box className="r">
                    <Box className="c-s-24 ">
                        <Box>
                            <Text opacity={'50%'} fontSize={'13px'}>@adam220adam</Text>
                        </Box>
                    </Box>
                </Box>
                <Box display={isCelebrityPage?'':'none'} pt='15px' pb='10px'>
                    <Text border={'1px white solid'}  color={'#a0ffa0'} mr='-3px' fontSize={'12px'} className="out-btn ham-option">Online</Text>
                </Box>
                {/* <Text onClick={() => setOnline(false)} border={online ? '' : '1px white solid'} zIndex={online ? '1000' : ''} color={online ? '' : '#a0ffa0'} ml='-3px' fontSize={'12px'} className="out-btn ham-option">Offline</Text> */}
                
                
                <Box className="r" pt={'10px'} mr='-43px'>
                    <Box className="c-s-24 " display={'flex'} alignItems='center'>
                        <HStack className="img-scroll-ham">
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='130px' maxW='130px' h="160px" backgroundSize='cover'>
                            </Box>
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='130px' maxW='130px' h="160px" backgroundSize='cover'>
                            </Box>
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='130px' maxW='130px' h="160px" backgroundSize='cover'>
                            </Box>
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='130px' maxW='130px' h="160px" backgroundSize='cover'>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
                <Box className="r" pt="20px">
                    <Box className="c-s-24" >
                        <Text onClick={() => btnEvent('editProfile')} className="out-btn" border={'1px rgba(255, 255, 255, 0.35) solid !important'}>Edit Profile</Text>
                    </Box>
                </Box>
            </Box >
            {/*  control */}
            < Box className="" pt={'20px'} >
                <Box className="" pt="20px">
                    <Box onClick={() => btnEvent('wallet')} className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <IoIosWallet fontSize={'30px'} />
                                </Box>
                            </Box>
                            <Box flex={1}></Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>Wallet</Text>
                            </Box>
                            <Box flex={1}></Box>

                        </Box>
                    </Box>
                </Box>
                <Box className="" pt="20px">
                    <Box className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <BsStarFill fontSize={'26px'} />
                                </Box>
                            </Box>
                            <Box flex={1}></Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>My List</Text>
                            </Box>
                            <Box flex={1}></Box>
                        </Box>
                    </Box>
                </Box>
                <Box display={isCelebrityPage?'none':''} className="" pt="20px">
                    <Box onClick={() => btnEvent('earn')} className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <FaGem fontSize={'27px'}></FaGem>
                                </Box>
                            </Box>
                            <Box flex={1}></Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>Earn</Text>
                            </Box>
                            <Box flex={1}></Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="" pt="20px">
                    <Box className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    {/* <Image className="cur-po" w='27px' src={setting}></Image> */}
                                    <MdSettings fontSize={'27px'} />
                                </Box>
                            </Box>
                            <Box flex={1}></Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>Settings</Text>
                            </Box>
                            <Box flex={1}></Box>
                        </Box>
                    </Box>
                </Box>



                {/*Two Icon shield and setting */}
                {/* <Box className="r" pt="60px">
                    <Box className="c-s-24 justify-s">
                        <Box className="effect-50">
                            <FaShieldAlt className="cur-po " fontSize={'30px'}></FaShieldAlt>
                        </Box>
                        <Box className="effect-50">
                            <Image className="cur-po " w='30px' src={setting}></Image>
                        </Box>
                    </Box>
                </Box> */}
            </Box >
        </>

    )
}

export default BodyHam;