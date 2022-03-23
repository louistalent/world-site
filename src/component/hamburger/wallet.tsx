import rmale from "../../assets/rect-male.png";
import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";
import { FaShieldAlt, FaGem, FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi";
import { Check } from "../../assets/checkSvg";


interface RubyType {
    w: number
    h: number
    fill1?: string
    fill2?: string
}
const Ruby = ({ w, h, fill1, fill2 }: RubyType) => {
    return (
        <svg width={w} height={h} viewBox="0 0 33 29" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8145 0L33 9.06085H27.2075L23.2424 0H27.8145ZM20.4819 0L24.4469 9.06085H8.5483L12.5181 0H20.4819ZM5.18551 0H9.75595L5.79254 9.06085H0L5.18551 0ZM0 10.8737H5.76846L12.8152 25.1269C12.8327 25.1641 12.8361 25.2062 12.8248 25.2457C12.8136 25.2852 12.7884 25.3193 12.7538 25.342C12.7192 25.3647 12.6775 25.3743 12.6363 25.3692C12.5952 25.3641 12.5572 25.3446 12.5294 25.3142L0 10.8737ZM8.49049 10.8737H24.5095L16.6598 28.8906C16.6474 28.9228 16.6254 28.9505 16.5967 28.97C16.568 28.9895 16.534 29 16.4992 29C16.4644 29 16.4304 28.9895 16.4017 28.97C16.373 28.9505 16.351 28.9228 16.3386 28.8906L8.49049 10.8737ZM20.1832 25.1269L27.2299 10.8737H32.9984L20.4722 25.3094C20.4465 25.3444 20.4082 25.3683 20.3652 25.3763C20.3222 25.3843 20.2777 25.3758 20.2408 25.3525C20.204 25.3292 20.1775 25.2929 20.1668 25.251C20.156 25.2091 20.1619 25.1647 20.1832 25.1269Z" fill="url(#paint0_linear_2_52)" />
            <defs>
                <linearGradient id="paint0_linear_2_52" x1="15.7326" y1="14.5" x2="10.4032" y2="6.07824" gradientUnits="userSpaceOnUse">
                    {/* <stop stopColor="#7E599B" />
                    <stop offset="1" stopColor="#BF76F3" /> */}
                    <stop stopColor={'#B026FF'} />
                    <stop offset="1" stopColor={'#B026FF'} />
                </linearGradient>
            </defs>
        </svg>
    )
}

const WalletHam = () => {
    return (
        <>
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
                        <Box className="c-s-24 justify-s">

                        </Box>
                    </Box>
                    <Box className="r" pt="20px">
                        <Box className="c-s-24" >
                            <Text fontFamily={'Proxima_Nova_600'} fontSize={'20px'}>Balance</Text>
                            <Box className="gray-box1" mt={'10px'}>
                                <Box className="justify-s">
                                    <Box className="justify-s">
                                        <Ruby h={20} w={15} fill1='#7E599B' fill2='#BF76F3'></Ruby>&nbsp;
                                        <Text className="">35,675</Text>
                                    </Box>
                                    <Box>
                                        <Text className="">$ 35.66</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box >
                {/*  control */}
                < Box className="" pt={'20px'} >
                    <Box className="gray-box1" mt={'10px'}>
                        <Box display='flex' alignItems='center'>
                            <Box className="justify-s" textAlign={'center'}>
                                <FaArrowAltCircleRight style={{ fontSize: '22px', color: 'rgb(164,249,164)' }} />&nbsp;&nbsp;
                            </Box>
                            <Box flex={1} className="justify" textAlign={'center'}>
                                <Text style={{ fontFamily: 'Proxima_Nova_400' }} className="">Deposit into Seconds</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="gray-box1" mt={'10px'}>
                        <Box display='flex' alignItems='center'>
                            <Box className="justify-s">
                                <FaArrowAltCircleLeft style={{ fontSize: '22px', color: 'rgb(231,96,82)' }} />&nbsp;&nbsp;
                            </Box>
                            <Box flex={1} className="justify" textAlign={'center'}>
                                <Text style={{ fontFamily: 'Proxima_Nova_400' }} className="">Withdraw from Seconds</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="gray-box1" mt={'10px'}>
                        <Box display='flex' alignItems='center'>
                            <Box className="justify-s">
                                <HiCurrencyDollar style={{ color: 'white', fontSize: '26px' }} />&nbsp;&nbsp;
                            </Box>
                            <Box flex={1} className="justify" textAlign={'center'}>
                                <Text style={{ fontFamily: 'Proxima_Nova_400' }} className="">Payment methods</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="r" pt="20px">
                        <Box className="c-s-24" >
                            <Text fontFamily={'Proxima_Nova_600'} fontSize={'20px'}>History</Text>
                            <Box className="gray-box-his" mt={'10px'}>
                                <Box className="for-custom-scroll">
                                    <Box className="gray-box" borderBottom={'2px gray solid'}>
                                        <Box className="justify-s">
                                            <Box className="justify-s">
                                                <Box borderRadius='5px' backgroundImage={rmale} position='relative' w='45px' h="60px" backgroundSize='cover'>
                                                </Box>
                                                <Box className="" ml='8px'>
                                                    <Text className="">Mark Frank</Text>
                                                    <Text color='gray'>@BigMF</Text>
                                                </Box>
                                            </Box>
                                            <Box textAlign={'right'}>
                                                <Box className="justify">
                                                    <Text className="" color={'#A0FFA0'}>+ 17,947</Text> &nbsp;
                                                    <Ruby h={25} w={20} fill1='#7E599B' fill2='#BF76F3'></Ruby>
                                                </Box>
                                                <Text className="" color='gray'>1min 12 sec</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="gray-box" borderBottom={'2px gray solid'}>
                                        <Box className="justify-s">
                                            <Box className="justify-s">
                                                <Box borderRadius='5px' backgroundImage={rmale} position='relative' w='45px' h="60px" backgroundSize='cover'>
                                                </Box>
                                                <Box className="" ml='8px'>
                                                    <Text className="">35,675</Text>
                                                    <Text color={'gray'}>@bruce</Text>
                                                </Box>
                                            </Box>
                                            <Box textAlign={'right'}>
                                                <Box className="justify">
                                                    <Text className="" color={'#EB5545'}>- 87,947</Text> &nbsp;
                                                    <Ruby h={25} w={20} fill1='#7E599B' fill2='#BF76F3'></Ruby>
                                                </Box>
                                                <Text color={'gray'}>49 sec</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="gray-box" borderBottom={'2px gray solid'}>
                                        <Box className="justify-s">
                                            <Box className="justify-s">
                                                <Box className="" ml='8px'>
                                                    <Text className="">Deposit <span style={{ color: '#A0FFA0' }}>50$</span></Text>
                                                    <Text color={'gray'}>Visa 3337</Text>
                                                </Box>
                                            </Box>
                                            <Box textAlign={'right'}>
                                                <Box className="justify">
                                                    <Text className="" color={'#A0FFA0'}>+ 50,000</Text> &nbsp;
                                                    <Ruby h={25} w={20} fill1='#7E599B' fill2='#BF76F3'></Ruby>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="gray-box" borderBottom={'2px gray solid'}>
                                        <Box className="justify-s">
                                            <Box className="justify-s">
                                                <Box className="" ml='8px'>
                                                    <Text className="">Withdraw <span style={{ color: '#EB5545' }}>2050$</span></Text>
                                                    <Text letterSpacing={'-1px'} color={'gray'}>Chase checking 3330</Text>
                                                </Box>
                                            </Box>
                                            <Box textAlign={'right'}>
                                                <Box className="justify">
                                                    <Text className="" color={'#EB5545'}>-21,548</Text> &nbsp;
                                                    <Ruby h={25} w={20} fill1='#7E599B' fill2='#BF76F3'></Ruby>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box pt='9px'></Box>
                                </Box>
                                {/* if not exist datas */}
                                {/* <Box className="gray-box justify" h='240px'>
                                    <VStack >
                                        <Text opacity='70%'>No video chat or</Text>
                                        <Text opacity='70%'>payment history</Text>
                                    </VStack>
                                </Box> */}
                            </Box>

                        </Box>
                    </Box>
                </Box >
            </>
        </>
    )
}
export default WalletHam;