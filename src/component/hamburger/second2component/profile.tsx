import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text, Select, Flex, PinInput, PinInputField, Image, HStack, VStack, Button, Center, Input, InputGroup, InputRightElement, Heading } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import mark from "../../../assets/logo.png";
import { useState, useEffect } from 'react';
import { ViewIcon, AddIcon, ViewOffIcon,ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// @ts-ignore
import AvatarEditor from "react-avatar-editor";
import { StringMappingType } from "typescript";
import { Link } from "react-router-dom";

interface PictureType {
    cropperOpen: boolean
    img: string
    zoom: number
    croppedImg: string
}
interface phoneType {
    num: string
    username: string
    username2: string
    usermail: string
    pass: string
}
interface sendType {
    [key: string]: string | number | boolean | String[]
}

function Signup() {
   
   
    // Flag variables
    const [isPhone, setIsPhone] = useState(true);
    const [isSendcode, setIsSendcode] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isVerify, setIsVerify] = useState(false);
    const [isPro, setIsPro] = useState(true);
    const [isAvatar, setIsAvatar] = useState(false);
    const [isImg, setIsImg] = useState(false);

  const [state, setState] = useState<phoneType>({
        num: '',
        username: '',
        username2: '',
        usermail: '',
        pass: '',
    });
    //Avatar 
    var editor = "";
    const [picture, setPicture] = useState<PictureType>({
        cropperOpen: false,
        img: '',
        zoom: 1,
        croppedImg: "none"
    });

    const updateStatus = (json: sendType) => setState({ ...state, ...json })
    const setUser2 = (c: string) => { updateStatus({ username2: c }); }

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

    return (
        <>
            <Center mt='70px'>
                <VStack className="signBG" borderRadius={20} p={1} pb='70px!important' w='600px' height='600px'>
                    <Center w='100%' position={'relative'}>
                        <Image w='40px' src={mark}></Image>
                        <Link to='/earn-phoneverify' style={{position:'absolute',top:'0px',left:'10px'}}>
                            <ChevronLeftIcon style={{fontSize:"40px",color:'white'}}/>
                        </Link>
                    </Center>
                  
                            <Box w='80%' height='500px' pt={1}>
                              
                                <Center w="100%">
                                    <Box w="100%">
                                       {!isAvatar ?
                                            <>
                                                <Box w='100%' h='430px'>
                                              
                                                <Box h='250px'>
                                                        <Center mt='20px'>
                                                            <Text className='site-font' fontSize='25px' color='white'>Add at least one picture to your profile.</Text>
                                                        </Center>
                                                        <Center margin='auto'>
                                                            {!isImg ?
                                                                <HStack mt='110px'>
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
                                    </Box>
                                </Center>
                            </Box>
                </VStack>
            </Center >
        </>
    );
}

export default Signup;
