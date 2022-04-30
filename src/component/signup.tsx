// import YearPicker from 'react-year-picker';
import mark from "../assets/logo.png";
import Header from "./header";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text, Select, Flex, PinInput, PinInputField, Image, HStack, VStack, Button, Center, Input, InputGroup, InputRightElement, Heading } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import { useState, useEffect } from 'react';
import { ViewIcon, AddIcon, ViewOffIcon, CheckIcon } from '@chakra-ui/icons'
// @ts-ignore
import AvatarEditor from "react-avatar-editor";
import { StringMappingType } from "typescript";
// Declare Data Type 
interface phoneType {
    num: string
    username: string
    username2: string
    usermail: string
    pass: string
}
interface verifyType {
    p1: string
    p2: string
    p3: string
    p4: string
}
interface DateType {
    y: number
    m: string
    d: number
    years: Array<number>
    days: Array<number>
}
interface sendType {
    [key: string]: string | number | boolean | String[]
}
interface PictureType {
    cropperOpen: boolean
    img: string
    zoom: number
    croppedImg: string
}


function Signup() {
    // datas
    const [state, setState] = useState<phoneType>({
        num: '',
        username: '',
        username2: '',
        usermail: '',
        pass: '',
    });
    const [phoneVery, setPhoneVery] = useState<verifyType>({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
    });
    const [date, setDate] = useState<DateType>({
        y: 1900,
        m: '',
        d: 1,
        years: [],
        days: [],
    })
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    // Flag variables
    const [isPhone, setIsPhone] = useState(true);
    const [isSendcode, setIsSendcode] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isVerify, setIsVerify] = useState(false);
    const [isPro, setIsPro] = useState(true);
    const [isAvatar, setIsAvatar] = useState(false);
    const [isImg, setIsImg] = useState(false);


    //Avatar 
    var editor = "";
    const [picture, setPicture] = useState<PictureType>({
        cropperOpen: false,
        img: '',
        zoom: 1,
        croppedImg: "none"
    });

    const handleSlider = (value: number) => {
        setPicture({
            ...picture,
            zoom: value
        });
    };

    const setEditorRef = (ed: any) => {
        editor = ed;
    };

    const handleSave = (e: any) => {
        setIsAvatar(false);
        setIsImg(true);
        // @ts-ignore
        if (setEditorRef) {
            // @ts-ignore
            const canvasScaled = editor.getImageScaledToCanvas();
            const croppedImg = canvasScaled.toDataURL();
            setPicture({
                ...picture,
                img: '',
                cropperOpen: false,
                croppedImg: croppedImg
            });
        }
    };

    const handleFileChange = (e: any) => {
        let url = URL.createObjectURL(e.target.files[0]);
        setIsAvatar(true);
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
        });
    };

    //Hook functions 
    useEffect(() => {
        let D = new Date();
        let year = D.getFullYear();
        for (let i = year; i >= 1900; i--) {
            date['years'].push(i);
        }
    }, [])
    useEffect(() => {
        if (phoneVery['p1'] === '' || phoneVery['p2'] === '' || phoneVery['p3'] === '' || phoneVery['p4'] === '') {
        } else {
            setIsVerify(true);
        }
    }, [phoneVery])
    useEffect(() => {
        let daysInMonth = new Date(date['y'], months.indexOf(date['m']) + 1, 0).getDate();
        date['days'] = [];
        for (let i = 1; i <= daysInMonth; i++) {
            date['days'].push(i);
        }
    }, [date['y'], date['m']])
    // Upgrade data
    const updateStatus = (json: sendType) => setState({ ...state, ...json })
    const updateVerify = (json: sendType) => { setPhoneVery({ ...phoneVery, ...json }) }
    const updateDate = (json: sendType) => { setDate({ ...date, ...json }); }

    const setPhoneNumber = (n: number) => { updateStatus({ num: n }); }
    const setUser = (c: string) => { updateStatus({ username: c }); }
    const setUser2 = (c: string) => { updateStatus({ username2: c }); }
    const setMail = (c: string) => { updateStatus({ usermail: c }); }
    const setPass = (c: string) => { updateStatus({ pass: c }); }

    const setY = (n: number) => { updateDate({ y: n }); }
    const setM = (s: string) => { updateDate({ m: s }); }
    const setD = (n: number) => { updateDate({ d: n }); }

    const confirmVerify = (code: string, id: number) => {
        if (id === 1) {
            updateVerify({ p1: code });
        } else if (id === 2) {
            updateVerify({ p2: code });
        } else if (id === 3) {
            updateVerify({ p3: code });
        } else if (id === 4) {
            updateVerify({ p4: code });
        }

    }

    function OptionLists(props: any) {
        return <option key='{props.row}' style={{ background: '#150f1a', padding: '5px' }} value={props.row}>{props.row}</option>
    }
    function YearOptionLists(props: any) {
        return <option key='{props.row}' style={{ background: '#150f1a', padding: '5px' }} value={props.row}>{props.row}</option>
    }
    function DayOptionLists(props: any) {
        return <option key='{props.row}' style={{ background: '#150f1a', padding: '5px' }} value={props.row}>{props.row}</option>
    }

    return (
        <>
            <Center mt='70px'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='600px'>
                    <Center>
                        <Image w='40px' src={mark}></Image>
                    </Center>
                    {!isSendcode &&
                        <>
                            <Box w='80%' pb='10px' height='500px' pt={1}>
                                <Center>
                                    <Heading className="site-font" mt='20px' color='white' as='h3' size='md'>Create your account</Heading>
                                </Center>
                                <Box pt="70px" height='270px'>
                                    {isPhone && <>
                                        <Flex pb='20px' flexDirection='row-reverse'>
                                            <Heading className="site-font" onClick={() => { setIsPhone(false) }} _hover={{ cursor: 'pointer' }} color='#5798ff' fontSize='16px'>Use Email instead </Heading>
                                        </Flex>
                                        <PhoneInput
                                            inputClass="phoneClass"
                                            enableSearch={true}
                                            buttonClass="phoneButtonClass"
                                            placeholder='   Phone number'
                                            countryCodeEditable={false}
                                            //@ts-ignore
                                            value={state['num']}
                                            onChange={(num: any) => setPhoneNumber(num)}
                                        />
                                    </>
                                    }
                                    {!isPhone &&
                                        <>
                                            <Flex pb='20px' flexDirection='row-reverse'>
                                                <Heading className="site-font" onClick={() => { setIsPhone(true) }} _hover={{ cursor: 'pointer' }} color='#5798ff' fontSize='16px'>Use phone instead </Heading>
                                            </Flex>
                                            <VStack>
                                                <label style={{ width: '100%' }} className="field field_v3" >
                                                    <input type='email' className="site-font field__input" onChange={(e: any) => setMail(e.target.value)} placeholder="Email" />
                                                    <span className="field__label-wrap">
                                                        <span className="field__label site-font">E-mail</span>
                                                    </span>
                                                </label>
                                            </VStack>
                                        </>
                                    }
                                    <Box mt={2}>
                                        <Text className="" fontWeight='normal' letterSpacing='0px' fontSize='12px' color='gray.300'>we will send a text a code. Your phone number is private and will note be visable.</Text>
                                    </Box>
                                </Box>
                            </Box>
                            {isPhone &&
                                <Button className="site-font" onClick={() => { setIsSendcode(true) }} _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} color={state['num'] === '' ? 'white' : 'black'} border='gray 1px solid' background={state['num'] === '' ? 'transparent' : 'white'} borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['num'] === '' ? true : false}>Continue</Button>}
                            {!isPhone &&
                                <Button className="site-font" onClick={() => { setIsSendcode(true) }} _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} color={state['num'] === '' ? 'white' : 'black'} border='gray 1px solid' background={state['num'] === '' ? 'transparent' : 'white'} borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['num'] === '' ? false : true}>Continue</Button>
                            }
                        </>}
                    {isSendcode &&
                        <>
                            <Box w='80%' height='500px' pt={1} className={!isVerify ? 'justify' : ''}>
                                <Center w="100%">
                                    <Box w="100%">
                                        {!isVerify ?
                                            <Box w="90%" marginX='auto'>
                                                <Heading className="site-font" color='white' fontSize='30px'>My code is </Heading>
                                                <HStack mt='30px' justifyContent='space-between'>
                                                    <PinInput size='lg' placeholder='' type='alphanumeric'>
                                                        <PinInputField onChange={(e: any) => { confirmVerify(e.target.value, 1) }} w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                        <PinInputField onChange={(e: any) => { confirmVerify(e.target.value, 2) }} w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                        <PinInputField onChange={(e: any) => { confirmVerify(e.target.value, 3) }} w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                        <PinInputField onChange={(e: any) => { confirmVerify(e.target.value, 4) }} w='80px' h='80px' fontSize='55px' fontWeight='bold' background='white' />
                                                    </PinInput>
                                                </HStack>
                                                <Flex mt='60px' flexDirection='row-reverse'>
                                                    <Heading className="site-font" color='white' fontSize='23px'>{isPhone ? state['num'] : state['username']} </Heading>
                                                </Flex>
                                                <Flex flexDirection='row-reverse'>
                                                    <Heading className="site-font" color='white' fontSize='20px'>resend </Heading>
                                                </Flex>
                                            </Box>
                                            : (isPhone ?
                                                <>
                                                    {isPro ?
                                                        <>
                                                            {/* profile page */}
                                                            <Box w='100%' h='430px'>
                                                                <Center>
                                                                    <Text className="site-font" fontSize='25px' color='white'>Welcome! Let's complete your profile</Text>
                                                                </Center>
                                                                <Box pt='80px' pb='30px'>
                                                                    <label style={{ width: '100%' }} className="field field_v3" >
                                                                        <input style={{ border: '2px grey solid' }} type='email' className="site-font field__input" onChange={(e: any) => setUser(e.target.value)} placeholder="Name" />
                                                                        <span className="field__label-wrap">
                                                                            <span className="site-font field__label">Name</span>
                                                                        </span>
                                                                    </label>
                                                                </Box>
                                                                <Text className="site-font" color='white' fontSize='25px'>Date of birth</Text>
                                                                <HStack pt='10px'>
                                                                    <Box flexGrow={2} p='2px 4px 8px 4px' color='white' border='2px grey solid' borderRadius='7px' position='relative'>
                                                                        <Text className='site-font' color='grey'>Month</Text>
                                                                        <Select onChange={(e: any) => { setM(e.target.value) }} value={date['m']} variant='unstyled' p='10px 5px 10px 0px' className="padding-start-none" border='none' marginY='-10px' outline='none'>
                                                                            {months.map((month: string) => (
                                                                                <OptionLists row={month} />
                                                                            ))}
                                                                        </Select>
                                                                    </Box>
                                                                    <Box flexGrow={1} p='2px 4px 8px 4px' color='white' border='2px grey solid' borderRadius='7px' position='relative'>
                                                                        <Text fontFamily='proxima_nova_rgregular' color='grey'>Day</Text>
                                                                        <Select onChange={(e: any) => { setD(e.target.value) }} value={date['d']} variant='unstyled' p='10px 5px 10px 0px' className="padding-start-none" border='none' marginY='-10px' outline='none'>
                                                                            {date['days'].map((day: number) => (
                                                                                <DayOptionLists row={day} />
                                                                            ))}
                                                                        </Select>
                                                                    </Box>
                                                                    <Box flexGrow={1} p='2px 4px 8px 4px' color='white' border='2px grey solid' borderRadius='7px' position='relative'>
                                                                        <Text fontFamily='proxima_nova_rgregular' color='grey'>Year</Text>
                                                                        <Select onChange={(e: any) => { setY(e.target.value) }} value={date['y']} variant='unstyled' p='10px 5px 10px 0px' className="padding-start-none" border='none' marginY='-10px' outline='none'>
                                                                            {date['years'].map((year: number) => (
                                                                                <YearOptionLists row={year} />
                                                                            ))}
                                                                        </Select>
                                                                        {/* <YearPicker />; */}
                                                                    </Box>
                                                                </HStack>
                                                                <Center pt='8px'>
                                                                    <Text fontFamily='proxima_nova_rgregular' color='whiteAlpha.700'>Your age is private and will be not visible</Text>
                                                                </Center>
                                                            </Box>
                                                            <Box w='100%'>
                                                                <Button w='100%' onClick={() => { setIsPro(false) }} _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} color={state['username'] === '' ? 'white' : 'black'} border='gray 1px solid' background={state['username'] === '' ? 'transparent' : 'white'} borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['username'] === '' ? true : false}>Continue</Button>
                                                            </Box>
                                                        </>
                                                        : <>
                                                            {!isAvatar ?
                                                                <>
                                                                    <Box w='100%' h='430px'>
                                                                        <Center>
                                                                            <Text className='site-font' fontSize='25px' color='white'>We're at the final step, {state['username']}</Text>
                                                                        </Center>
                                                                        <Box h='250px'>
                                                                            <Center margin='auto'>
                                                                                {!isImg ?
                                                                                    <HStack mt='90px'>
                                                                                        <Box onClick={() => {
                                                                                            // @ts-ignore
                                                                                            document.getElementById('fileinput').click();
                                                                                        }}
                                                                                            className="" _hover={{ cursor: 'pointer', borderColor: 'yellow' }} w='60px' h='60px' borderRadius='50%' border='2px grey dashed'
                                                                                        >
                                                                                            <AddIcon ml='36%' mt='36%' color='white'></AddIcon>
                                                                                            <input id='fileinput' style={{ display: 'none' }} type="file" accept="image/*" onChange={handleFileChange} />
                                                                                        </Box>
                                                                                        <Text className='site-font' fontSize='25px' color='white'>Upload a picture</Text>
                                                                                    </HStack>
                                                                                    : <Center>
                                                                                        <Image borderRadius='20px' mt="10px" w='90%' h='240px' src={picture['croppedImg']}></Image>
                                                                                    </Center>
                                                                                }
                                                                            </Center>
                                                                        </Box>
                                                                        <Text className='site-font' color='grey' fontSize='25px'>Choose a username</Text>
                                                                        <InputGroup _active={{ border: 'none', outline: 'none' }} borderRadius='none!important' outline='none!important' border='none!important'>
                                                                            <Input
                                                                                type="text"
                                                                                variant='unstyled'
                                                                                _active={{ border: 'none', outline: 'none' }}
                                                                                style={{
                                                                                    padding: '5px',
                                                                                    borderRadius: '0px',
                                                                                    width: '100%',
                                                                                    paddingInlineStart: '0',
                                                                                    paddingInlineEnd: '0',
                                                                                    border: 'none',
                                                                                    background: 'transparent',
                                                                                    outline: 'none',
                                                                                    borderBottom: '2px white solid',
                                                                                    color: 'grey',
                                                                                    fontSize: '25px'
                                                                                }}
                                                                                value={state['username2']}
                                                                                placeholder="user name"
                                                                                onChange={(e: any) => setUser2(e.target.value)}
                                                                            />
                                                                            <InputRightElement marginInlineEnd='-11px' children={
                                                                                state['username2'].search('@') === 0 ? <CheckIcon color='green.500' /> : <></>
                                                                            } />
                                                                        </InputGroup>
                                                                        <Box textAlign='right'>
                                                                            <Text className='' color='white'>{state['username2'].search('@') === 0 ? 'This username is available' : ''}</Text>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box w='100%'>
                                                                        <Button w='100%' _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} border='gray 1px solid' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['username2'].search('@') === 0 ? false : true}>Done</Button>

                                                                    </Box>
                                                                </>
                                                                : <>
                                                                    <Center>
                                                                        <Box w='57%' h='430px'>
                                                                            <Center>
                                                                                <Text className='site-font' fontSize='25px' color='white'>Move and Zoom</Text>
                                                                            </Center>
                                                                            <Box h='300px'>
                                                                                <HStack>
                                                                                    <Text className='site-font' color='white'>Zoom </Text>
                                                                                    <Slider aria-label='slider-ex-6' min={1}
                                                                                        max={10} defaultValue={1} step={0.1} onChange={(val) => handleSlider(val)}>
                                                                                        <SliderTrack>
                                                                                            <SliderFilledTrack />
                                                                                        </SliderTrack>
                                                                                        <SliderThumb />
                                                                                    </Slider>
                                                                                </HStack>
                                                                                {picture.cropperOpen && (
                                                                                    <Box display="block" _hover={{ cursor: 'cross' }}>
                                                                                        <AvatarEditor
                                                                                            className="avatar-editor"
                                                                                            ref={setEditorRef}
                                                                                            image={picture['img']}
                                                                                            width={270}
                                                                                            height={350}
                                                                                            border={0}
                                                                                            // color={[255, 255, 255, 0.6]} // RGBA
                                                                                            rotate={0}
                                                                                            scale={picture['zoom']}
                                                                                        />

                                                                                    </Box>
                                                                                )}
                                                                            </Box>
                                                                        </Box>
                                                                    </Center>
                                                                    <Box w='100%'>
                                                                        <Button w='100%' onClick={handleSave} _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} border='gray 1px solid' borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%">Done</Button>
                                                                    </Box>
                                                                </>
                                                            }
                                                        </>
                                                    }
                                                </> :
                                                <>
                                                    <Box w='100%' h='430px'>
                                                        <Heading className="site-font" color='white' pt='80px' fontSize='30px'>Set a password for</Heading>
                                                        <Heading className="site-font" color='white' fontSize='30px'>{state['username']}</Heading>
                                                        <InputGroup mt='80px' _active={{ border: 'none', outline: 'none' }} borderRadius='none!important' outline='none!important' border='none!important'>
                                                            <Input
                                                                type={isPasswordShown ? "text" : "password"}
                                                                variant='unstyled'
                                                                name="password"
                                                                _active={{ border: 'none', outline: 'none' }}
                                                                style={{
                                                                    padding: '5px',
                                                                    borderRadius: '0px',
                                                                    width: '100%',
                                                                    paddingInlineStart: '0',
                                                                    paddingInlineEnd: '0',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    outline: 'none',
                                                                    borderBottom: '2px white solid',
                                                                    color: 'white'
                                                                }}
                                                                value={state['pass']}
                                                                placeholder="Password"
                                                                onChange={(e: any) => setPass(e.target.value)}
                                                                required
                                                            />
                                                            <InputRightElement marginInlineEnd='-11px' children={
                                                                state['pass'].search(/[A-Z]/) === -1 ? <></> : <CheckIcon color='green.500' />
                                                            } />
                                                        </InputGroup>
                                                        {isPasswordShown ? (
                                                            <HStack justifyContent='space-between'>
                                                                <Text className='site-font' color='#5798ff'>
                                                                    {state['pass'].search(/[A-Z]/) !== -1 ? <>&nbsp;</> : <>Password must have at least 1 capital letter</>}
                                                                </Text>
                                                                <ViewIcon mr="10px" _hover={{ cursor: 'pointer' }} color='white' onClick={() => setIsPasswordShown(false)}></ViewIcon>
                                                            </HStack>
                                                        ) : (
                                                            <HStack justifyContent='space-between'>
                                                                <Text className='site-font' color='#5798ff'>
                                                                    {state['pass'].search(/[A-Z]/) !== -1 ? <>&nbsp;</> : <>Password must have at least 1 capital letter</>}
                                                                </Text>
                                                                <ViewOffIcon mr="10px" _hover={{ cursor: 'pointer' }} color='white' onClick={() => setIsPasswordShown(true)}></ViewOffIcon>

                                                            </HStack>
                                                        )}
                                                    </Box>
                                                    <Button className="site-font" onClick={() => { setIsPhone(true) }} _hover={{ border: '2px rgba(66, 153, 225, 0.6) solid' }} w='100%' color={state['pass'].search(/[A-Z]/) === -1 ? 'white' : 'black'} border='gray 1px solid' background={state['pass'].search(/[A-Z]/) === -1 ? 'transparent' : 'white'} borderRadius='30px 30px 30px 30px' h='57px' pt='20px' pb='20px' width="80%" disabled={state['pass'].search(/[A-Z]/) === -1 ? true : false}>Continue</Button>
                                                </>
                                            )
                                        }
                                        {/* wrong code, Please try again. */}
                                    </Box>
                                </Center>
                            </Box>
                        </>
                    }
                </VStack>
            </Center >
        </>
    );
}

export default Signup;
