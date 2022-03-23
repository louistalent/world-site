import rmale from "../../assets/rect-male.png";
import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";

import setting from "../../assets/setting.svg";
import { Check } from "../../assets/checkSvg";

interface Event {
    btnEvent: (a: string) => void
}

const BodyHam = ({ btnEvent }: Event) => {
    return (
        <>
            {/* image section */}
            < Box className="" pt={'40px'} >
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
                <Box className="r" pt={'10px'}>
                    <Box className="c-s-24 " display={'flex'} alignItems='center'>

                        <Box mr={'10px'} borderRadius='10px' backgroundImage={rmale} position='relative' minW='100px' maxW='100px' h="150px" backgroundSize='cover'>
                        </Box>

                        <Box mr={'10px'} borderRadius='10px' backgroundImage={rmale} position='relative' minW='100px' maxW='100px' h="150px" backgroundSize='cover'>
                        </Box>

                    </Box>
                </Box>
                <Box className="r" pt="20px">
                    <Box className="c-s-24" >
                        <Text className="out-btn">Edit Profile</Text>
                    </Box>
                </Box>
            </Box >
            {/*  control */}
            < Box className="" pt={'20px'} >
                <Box className="" pt="20px">
                    <Box onClick={() => btnEvent('wallet')} className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}></Box>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <IoIosWallet fontSize={'30px'} />
                                </Box>
                            </Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>Wallet</Text>
                            </Box>
                            <Box flex={1}></Box>

                        </Box>
                    </Box>
                </Box>
                <Box className="" pt="20px">
                    <Box onClick={() => btnEvent('earn')} className="c-s-24 hamControl" _hover={{ color: 'black', background: 'white', cursor: 'pointer' }} >
                        <Box className="justify" w='100%' textAlign='center'>
                            <Box flex={1}></Box>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <FaGem fontSize={'27px'}></FaGem>
                                </Box>
                            </Box>
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
                            <Box flex={1}></Box>
                            <Box flex={1}>
                                <Box className="" display={'flex'} justifyContent='end'>
                                    <BsStarFill fontSize={'26px'} />
                                </Box>
                            </Box>
                            <Box flex={3}>
                                <Text fontSize={'20px'} fontWeight={'bold'}>Lists</Text>
                            </Box>
                            <Box flex={1}></Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="r" pt="60px">
                    <Box className="c-s-24 justify-s">
                        <Box className="effect-50">
                            <FaShieldAlt className="cur-po " fontSize={'30px'}></FaShieldAlt>
                        </Box>
                        <Box className="effect-50">
                            <Image className="cur-po " w='30px' src={setting}></Image>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>

    )
}

export default BodyHam;