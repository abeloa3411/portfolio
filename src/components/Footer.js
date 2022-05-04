import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const FooterContainer = styled.div`
  background: #bfdef2;
  width: 100%;
`;
const FooterCeneter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 2rem;

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const FooterRight = styled.div``;
const FooterLogo = styled.div``;
const FooterIcons = styled.div`
  display: flex;
  width: 100%;
`;
const SocialIcon = styled.div`
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-7px);
    color: dodgerblue;
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
`;
const FooterLinks = styled.div``;
const FooterLinkTitle = styled.div``;
const FooterLinksMenu = styled.ul`
  margin-left: -2rem;
`;
const FooterLinksMenuItems = styled.li`
  list-style: none;
`;
const FooterCopyright = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCeneter>
        <FooterLeft>
          <FooterLogo>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3>Abel Wanyonyi</h3>
            </Link>
          </FooterLogo>
          <FooterIcons>
            <LinkItem
              style={{ color: "black" }}
              href="https://github.com/abeloa3411"
              target="_blank"
            >
              <SocialIcon>
                <BsGithub style={{ fontSize: "25px" }} />
              </SocialIcon>
            </LinkItem>
            <LinkItem
              style={{ color: "black" }}
              href="https://twitter.com/abel_wanyonyi_"
              target="_blank"
              rel="nofollow"
            >
              <SocialIcon>
                <BsTwitter style={{ fontSize: "25px" }} />
              </SocialIcon>
            </LinkItem>
            <LinkItem
              style={{ color: "black" }}
              href="https://instagram.com/dm_puppy"
              target="_blank"
              rel="nofollow"
            >
              <SocialIcon>
                <BsInstagram style={{ fontSize: "25px" }} />
              </SocialIcon>
            </LinkItem>
            <LinkItem
              style={{ color: "black" }}
              href="https://linkedin.com/in/abel-wanyonyi-4408b8201"
              target="_blank"
              rel="nofollow"
            >
              <SocialIcon>
                <BsLinkedin style={{ fontSize: "25px" }} />
              </SocialIcon>
            </LinkItem>
            <LinkItem
              style={{ color: "black" }}
              href="https://facebook.com/abeloa3411"
              target="_blank"
              rel="nofollow"
            >
              <SocialIcon>
                <BsFacebook style={{ fontSize: "25px" }} />
              </SocialIcon>
            </LinkItem>
          </FooterIcons>
          <FooterCopyright>
            <p>&copy;2022. Abel Wanyonyi. All rights reserved</p>
          </FooterCopyright>
        </FooterLeft>
        <FooterRight>
          <FooterLinks>
            <FooterLinkTitle>
              <h4>Quick Links</h4>
            </FooterLinkTitle>
            <FooterLinksMenu>
              <FooterLinksMenuItems>
                <LinkItem
                  style={{ color: "black" }}
                  href="https://twitter.com/abel_wanyonyi_"
                  target="_blank"
                  rel="nofollow"
                >
                  Twitter
                </LinkItem>
              </FooterLinksMenuItems>
              <FooterLinksMenuItems>
                <Link
                  to="/contacts"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contacts
                </Link>
              </FooterLinksMenuItems>
              <FooterLinksMenuItems>Links</FooterLinksMenuItems>
              <FooterLinksMenuItems>FAQs</FooterLinksMenuItems>
            </FooterLinksMenu>
          </FooterLinks>
        </FooterRight>
      </FooterCeneter>
    </FooterContainer>
  );
};

export default Footer;
