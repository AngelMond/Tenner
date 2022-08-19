import React from "react";
import Footer from "./index";
// import  Icon  from "./icons";
import {SiGmail} from "react-icons/si";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {TbLocation} from "react-icons/tb";
import {MdAlternateEmail} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {BiWorld} from "react-icons/bi";
// import {} from "react-icons/";


export default function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link>Tenner is a company that seeks to bring customers and suppliers closer in an agile and simple way. 
                        Hire freelance developers and get on-demand services for your business to grow. 
                    </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link mail="mailto:moondragon2791@gmail.com"><SiGmail/>&nbsp;Gmail</Footer.Link>
                    <Footer.Link href="https://github.com/AngelMond/Tenner"><AiFillGithub/>&nbsp;GitHub</Footer.Link>
                    <Footer.Link href="#"><AiFillLinkedin/>&nbsp;Linkedin</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact</Footer.Title>
                    <Footer.Link><TbLocation/>&nbsp;Address: Mexico, City</Footer.Link>
                    <Footer.Link><MdAlternateEmail/>&nbsp;sales@tenner.com</Footer.Link>
                    <Footer.Link><BsTelephone/>&nbsp;+52 5571097378</Footer.Link>
                    <Footer.Link><BiWorld/>&nbsp;Tenner.com</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Collabs</Footer.Title>
                    <Footer.Link href="https://github.com/AngelMond"><AiFillGithub/>&nbsp;Ángel Mondragon</Footer.Link>
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

