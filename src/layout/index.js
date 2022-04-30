import HeaderLogin from "../component/header";
// import Header from "../component/header";
import { useMediaQuery, Container, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Layout(props) {
    let location = useLocation();
    const [dis, setDis] = useState(false);
    useEffect(() => {
        if (location.pathname === '/') {
            setDis(false);
            props.setIsHome(true);
        } else {
            setDis(false);
            props.setIsHome(false);
        }
        if (location.pathname === '/api' || location.pathname === '/w91' || location.pathname === '/w92' || location.pathname === '/disclaimer' || location.pathname === '/permission' || location.pathname === '/end') {
            setDis(true);
        }
        if (location.pathname === '/signup' || location.pathname === '/signin') {
            setDis(true);
        }
    }, [location])
    return (
        <>
            <Container style={{ display: `${dis ? 'none' : ''}` }} maxW='container.xl'>
                <HeaderLogin props={props} isHome={props.isHome} />
            </Container>
            {props.children}
        </>
    )
}
export default Layout;