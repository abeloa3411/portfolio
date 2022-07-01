import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

const ContactContainer = styled.section`
  width: 100%;
`;
const ContactsCenter = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactTitle = styled.header``;
const Title = styled.h3`
  text-align: center;
  font-size: 40px;
`;
const Paragraph = styled.p`
  margin-top: -10px;
  padding: 0 1rem;
`;
const ContactsSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;
const SocialIcon = styled.div`
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-7px);
    color: dodgerblue;
  }
`;

const ContactsPage = () => {
  return (
    <ContactContainer>
      <ContactsCenter>
        <ContactTitle>
          <Title>Contact</Title>
          <Paragraph>
            The easiest way to find me is on twitter
            <BsTwitter style={{ color: "dodgerblue", fontSize: "25px" }} />, but
            am also available in these platforms
          </Paragraph>
        </ContactTitle>
        <ContactsSocial>
          <a
            style={{ color: "black" }}
            href="https://twitter.com/abel_wanyonyi_"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <BsTwitter style={{ fontSize: "40px" }} />
            </SocialIcon>
          </a>
          <a
            style={{ color: "black" }}
            href="https://linkedin.com/in/abel-wanyonyi-4408b8201"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <BsLinkedin style={{ fontSize: "40px" }} />
            </SocialIcon>
          </a>
          <a
            style={{ color: "black" }}
            href="https://instagram.com/dm_puppy"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <BsInstagram style={{ fontSize: "40px" }} />
            </SocialIcon>
          </a>
          <a
            style={{ color: "black" }}
            href="https://github.com/abeloa3411"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <BsGithub style={{ fontSize: "40px" }} />
            </SocialIcon>
          </a>
        </ContactsSocial>
      </ContactsCenter>
    </ContactContainer>
  );
};

export default ContactsPage;
