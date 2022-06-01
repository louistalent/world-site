import rmale from "../../assets/rect-male.png";
import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { BiCamera,BiTrash } from "react-icons/bi";

import setting from "../../assets/setting.svg";
import { Check } from "../../assets/checkSvg";
import { useEffect, useState } from "react";
import "./profile.css";
interface Event {
    btnEvent: (a: string) => void
}

const ProfileHam = () => {
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
                            
                             {!isCelebrityPage?  
                             <Box className="profile-avatar-upload" >
                                    <VStack h='100%' justifyContent={'center'}>
                                        <Box className="camera-circle">
                                            <BiCamera fontSize={'30px'} color="#B026FF"/>
                                        </Box>
                                    </VStack>
                            </Box>
                             :
                             <Box className="profile-avatar" backgroundImage={rmale}></Box>
                                  
                                }
                            <Box className="profile-avatar" backgroundImage={rmale}>
                                {!isCelebrityPage&&
                                    <>
                                        <Box className="profile-avatar-trash">
                                            <BiTrash fontSize={'25px'} color="white"/>
                                        </Box>
                                        <VStack h='100%' justifyContent={'center'}>
                                                <Box className="under-review justify">
                                                    <Text color={'white'}>Under review</Text>
                                                </Box>
                                        </VStack>
                                    </>
                                }
                            </Box>
                            <Box className="profile-avatar" backgroundImage={rmale}>
                                {!isCelebrityPage&&
                                    <>
                                        <Box className="profile-avatar-trash">
                                            <BiTrash fontSize={'25px'} color="white"/>
                                        </Box>
                                        <VStack h='100%' justifyContent={'center'}>
                                                <Box className="under-review justify">
                                                    <Text color={'white'}>Under review</Text>
                                                </Box>
                                        </VStack>
                                    </>
                                }
                            </Box>
                            <Box className="profile-avatar" backgroundImage={rmale}>
                                {!isCelebrityPage&&
                                    <>
                                        <Box className="profile-avatar-trash">
                                            <BiTrash fontSize={'25px'} color="white"/>
                                        </Box>
                                        <VStack h='100%' justifyContent={'center'}>
                                                <Box className="under-review justify">
                                                    <Text color={'white'}>Under review</Text>
                                                </Box>
                                        </VStack>
                                    </>
                                }
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </Box >
            {/*  control */}
            < Box className="" pt={'20px'} >
                <Box className="profile-box">
                    <Text>Per second rate</Text>
                    <HStack>
                        <FaGem style={{ color: '#B026FF', fontSize: '22px', height: '30px', width: '20px' }} />
                        <Text className="" fontFamily={'Proxima_Nova_400'} fontSize='28px' >250</Text>
                    </HStack>
                </Box>
                <Text ml='5px' mt='2px' fontFamily={'Proxima_Nova_400'} fontSize='16px' opacity={0.75} >$ 0.25 / second</Text>
                <Box mt='10px' className="profile-box">
                    <Text>Name</Text>
                    <HStack>
                        <Text color={'white !important'} fontFamily={'Proxima_Nova_400'} fontSize='28px' >Adam</Text>
                    </HStack>
                </Box>
                <Box mt='10px' className="profile-box">
                    <Text>Phone</Text>
                    <HStack>
                        <Text color={'white !important'} fontFamily={'Proxima_Nova_400'} fontSize='28px' >US+1 | 551 804-7124</Text>
                    </HStack>
                </Box>
                <Box mt='10px' className="profile-box">
                    <Text>Email</Text>
                    <HStack>
                        <Text color={'white !important'} fontFamily={'Proxima_Nova_400'} fontSize='28px' >adam@gmail.com</Text>
                    </HStack>
                </Box>
                 <Box className="" pt="20px">
                    <Box className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={3}>
                                <Text fontSize={'16px'}>Change password</Text>
                            </Box>
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

export default ProfileHam;