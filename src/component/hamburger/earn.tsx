import React, { useState, useEffect } from "react"
import rmale from "../../assets/rect-male.png";
import { Box, Text, Image, Button, HStack, Heading } from "@chakra-ui/react";

import logopart1White from "../../assets/logo-part1-white.svg";
import logopart2White from "../../assets/logo-part2-white.svg";
import { FaGem } from "react-icons/fa";

interface Event {
    btnEvent: (a: string) => void
}
const EarnHam = ({ btnEvent }: Event) => {
    return (
        <>
            {/* image section */}
            < Box className="" pt={'40px'} >
                <Box className="r">
                    <Box className="c-s-12" >
                        <Box className="" alignItems='center'>
                            <Text fontFamily={'Proxima_Nova_600'} fontSize={'20px'}>Adam</Text>
                            <Text opacity={'50%'} fontSize={'13px'}>@adam</Text>
                        </Box>
                    </Box>
                    <Box className="c-s-12 ">
                        <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='100px' maxW='100px' h="125px" backgroundSize='contain'>
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box p='10px'></Box>
            < Box className="earn-bg" textAlign={'center'}  >
                <Box className="r" padding={'10px 30px'}>
                    <Box className="c-s-2 justify" textAlign={'center'} pr='0' pl='0'>
                        <FaGem style={{ color: 'B026FF', fontSize: '70px', height: '70px', width: '70px' }} />
                    </Box>
                    <Box className="c-s-20" pr='0' pl='0'>
                        <Text fontSize={'20px'}>Earn money by</Text>
                        <Text fontSize={'20px'}>video chatting your</Text>
                        <Text fontSize={'20px'}>community</Text>
                    </Box>
                    <Box className="c-s-2" pr='0' pl='0'>
                    </Box>
                </Box>
                <Box className="r" padding={'10px 30px'}>
                    <Box className="c-s-2 justify" textAlign={'center'} pr='0' pl='0'>
                        <FaGem style={{ color: 'B026FF', fontSize: '70px', height: '70px', width: '70px' }} />
                    </Box>
                    <Box className="c-s-20" pr='0' pl='0'>
                        <Text fontSize={'20px'}>Set any secondly</Text>
                        <Text fontSize={'20px'}>rate you wish</Text>
                    </Box>
                    <Box className="c-s-2" pr='0' pl='0'>
                    </Box>
                </Box>
                <Box className="r" padding={'10px 30px'}>
                    <Box className="c-s-2 justify" textAlign={'center'} pr='0' pl='0'>
                        <FaGem style={{ color: 'B026FF', fontSize: '70px', height: '70px', width: '70px' }} />
                    </Box>
                    <Box className="c-s-20" pr='0' pl='0'>
                        <Text fontSize={'20px'}>Talk to fans</Text>
                        <Text fontSize={'20px'}>whenever, hang up</Text>
                        <Text fontSize={'20px'}>whenever</Text>
                    </Box>
                    <Box className="c-s-2" pr='0' pl='0'>
                    </Box>
                </Box>
            </Box >
            <Box p='50px'></Box>
            <Box className="justify">
                <Button onClick={() => btnEvent('second')} w='180px' background={'#B026FF'} mt='30px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} bottom={2} p={'24px'}>
                    <HStack>
                        <HStack>
                            <Image h='28px' src={logopart1White}></Image>
                            <Image h='20px' src={logopart2White} marginLeft='1px!important'></Image>
                        </HStack>
                        {/* <Image w='45px' src={blackLogo}></Image> */}
                        <Heading className="site-font video_effect" fontSize={'22px'} color='white'>Let's go</Heading>
                    </HStack>
                </Button>
            </Box>
        </>
    )
}
export default EarnHam;