import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import call from "../assets/call.png"
import { Link } from 'react-router-dom';
import "./video-chat.css";
import { useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { Check } from "../assets/checkSvg";
import { BsCheckCircle, BsMic,BsMicMute, BsCameraVideo,BsCameraVideoOff } from "react-icons/bs";

function VideoChat() {
    const [videoStart, setVideoStart] = useState(false);
    const [musicMute, setMusicMute] = useState(false);
    const [videoOn, setVideoOn] = useState(true);

    const [isLessMobile] = useMediaQuery('(max-width: 415px)');
    const [isMobile] = useMediaQuery('(max-width: 576px)');
    const [isTable] = useMediaQuery('(max-width: 800px)');
    const [isCom] = useMediaQuery('(max-width: 1000px)');
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <Box fontFamily={'proxima_nova_rgregular'} className='video-chat-bg'>
                <Box className="video-controller" w={isMobile ? '' : '24rem'} padding={'12px'}>
                    <HStack spacing={0} w={isMobile ? '100%' : ''}>
                        <Box flexGrow={2}>
                            <HStack alignItems='center'>
                                <Heading className="site-font" as='h3' size='md' >Future</Heading>
                                <Check />
                            </HStack>
                            <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                        </Box>
                        {/* <Box w='30px' h={'70px'} background='linear-gradient(90deg, rgb(25 20 28) 36.98%,rgb(25 21 29) 36.98%, rgb(23 18 26) 100%)!important'></Box> */}
                        <Box flexGrow={2} textAlign='right' >
                           
                             {
                                    !videoStart
                                    ?
                                     <HStack justifyContent={'flex-end'}>
                                        <FaGem style={{ color: '#B026FF', fontSize: '22px', height: '30px', width: '20px' }} />
                                        <Text className="" fontFamily={'Proxima_Nova_400'} fontSize='18px' >35,651 earned</Text>
                                    </HStack>
                                    :
                                     <HStack justifyContent={'flex-end'}>
                                        <FaGem style={{ color: '#B026FF', fontSize: '22px', height: '30px', width: '20px' }} />
                                        <Text className="" fontFamily={'Proxima_Nova_400'} fontSize='18px' >35,651 spent</Text>
                                    </HStack>
                            }
                            {
                                    !videoStart
                                    ?
                                    <Text fontFamily='proxima_nova_rgregular'>16 people in queue</Text>
                                    :
                                    <Text fontFamily='proxima_nova_rgregular'>2:34:45 remaining</Text>
                            }

                             
                        </Box>
                            
                    </HStack>
                    <Box display={'flex'} mt='10px' justifyContent='space-between' alignItems={'center'}>
                        <Box className="justify">
                            <Button onClick={()=>setVideoOn(!videoOn)} width={'50px'} height='50px' className="justify" textAlign={'center'} variant={'unstyled'} mr={'15px'} borderRadius={'50%'} background={`#FFFFFF`} opacity={videoOn?'1':'0.25'} >
                                {videoOn?<BsCameraVideo fontSize={'25px'} style={{ margin: "auto" }} color='black' />:<BsCameraVideoOff fontSize={'25px'} style={{ margin: "auto" }} color='black' />}
                            </Button>
                            <Button onClick={()=>setMusicMute(!musicMute)} width={'50px'} height='50px' className="justify" textAlign={'center'} variant={'unstyled'}  borderRadius={'50%'} background={`#FFFFFF`} opacity={!musicMute?'1':'0.25'}>
                                {musicMute?<BsMicMute fontSize={'25px'} style={{ margin: "auto" }} color='black' />:<BsMic fontSize={'25px'} style={{ margin: "auto" }} color='black' />}
                            </Button>
                        </Box>

                        <Box>
                                {
                                    !videoStart
                                    ?
                                    <HStack>
                                        <Box className="justify" p='2px'>
                                            <Button _hover={{ color: 'black' }} height='45px' borderWidth={'2px'} variant={'outline'} background={`transparent`} p={'18px'}>
                                                <Heading className="site-font video_effect" fontSize={'20px'} color='white'> Next</Heading>
                                            </Button>
                                        </Box>
                                        <Box className="justify" p='2px'>
                                            <Button _hover={{ color: 'black' }} borderColor='#EB5545' height='45px' borderWidth={'2px'} variant={'outline'} background={`transparent`} p={'18px'}>
                                                <Heading className="site-font video_effect" fontSize={'20px'} color='white'> Stop</Heading>
                                            </Button>
                                        </Box>
                                    </HStack>
                                    :
                                     <HStack>
                                        <Box className="justify" p='2px'>
                                            <Button _hover={{ color: 'black' }} height='45px' borderRadius='8px' background={`#EB5545`} p={'18px'}>
                                                <Heading className="site-font video_effect" fontSize={'20px'} color='white'> Next</Heading>
                                            </Button>
                                        </Box>
                                    </HStack>
                                }
                        </Box>
                    </Box>
                </Box>
                <Box onClick={()=>setVideoStart(true)} className="video-right-side-image">
                    
                </Box>
        </Box>
    );
}

export default VideoChat;
