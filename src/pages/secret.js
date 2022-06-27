import Link from 'next/link';
import React from "react";
import Header from "../components/Header/Header";
import Secret from "../components/Secret/Secret";
import { Layout } from "../layout/Layout";

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { Container, Span, Div1, Div3, SocialIcons } from '../components/Header/HeaderStyles';
import Footer from '../components/Footer/Footer';
const Home = () => {
    return (
        <>
            <head>
                <title>Shh...</title>
            </head>
            <Container secret>
                <Div1>
                    <Link href="/">
                        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
                        <FaLaptopCode size="3rem" />&nbsp;<Span>JX</Span>
                        </a>
                    </Link>
                </Div1>
                <Div3>
                    <SocialIcons href='https://github.com/jxhau'>
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href='https://linkedin.com/in/jiaxiu-hau'>
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href='https://twitter.com/jxhau'>
                        <AiFillTwitterCircle size="3rem" />
                    </SocialIcons>
                </Div3>
            </Container>
            <Secret />
            <Footer />
        </>
        
    )
}

export default Home;