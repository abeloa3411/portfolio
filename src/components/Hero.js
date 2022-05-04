import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
`;
const HeroCenter = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeroTitle = styled.h1`
  font-size: 50px;
  background-image: linear-gradient(45deg, #ff0a78, #43f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  border: none;
  background-image: linear-gradient(315deg, #4ecdc4 0%, #c797eb 75%);
  outline: none;
  border-radius: 5px;
  padding: 0.8rem;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroCenter>
        <div style={{ padding: "0 .5rem" }}>
          <HeroTitle>Hey there i build beautiful and fast websites</HeroTitle>
        </div>
        <ButtonContainer>
          <Link to="/contacts">
            <Button>contact me</Button>
          </Link>
        </ButtonContainer>
      </HeroCenter>
    </HeroContainer>
  );
};

export default Hero;
