import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;
const WorkTitle = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
const LinkRoute = styled.a`
  text-decoration: none;
  margin-right: 3px;
`;

const Work = () => {
  return (
    <WorkContainer>
      <WorkTitle>I'm a frontend developer</WorkTitle>
      <LinkContainer>
        <LinkRoute href="#">read more about me</LinkRoute>
        <AiOutlineArrowRight />
      </LinkContainer>
    </WorkContainer>
  );
};

export default Work;
