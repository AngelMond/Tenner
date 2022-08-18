import React from "react";
import Footer from "./index";
// import  Icon  from "./icons";
import {SiGmail} from "react-icons/si";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
// import {} from "react-icons/";


export default function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <p>Tanner es una empresa que busca acercar a los clientes y provedores de una manera ágil y sencilla</p>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link mail="mailto:moondragon2791@gmail.com"><SiGmail/>&nbsp;Gmail</Footer.Link>
                    <Footer.Link href="https://github.com/AngelMond/Tenner"><AiFillGithub/>&nbsp;GitHub</Footer.Link>
                    <Footer.Link href="#"><AiFillLinkedin/>&nbsp;Linkedin</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Collabs</Footer.Title>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;Ángel Mondragon</Footer.Link>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;Edwin Simpson</Footer.Link>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;Pablo Garcia</Footer.Link>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;Chris Nunez</Footer.Link>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;Jorge Cárdenas</Footer.Link>
                    <Footer.Link href="#"><AiFillGithub/>&nbsp;David Trujillo</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

