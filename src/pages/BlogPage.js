import React from "react";
import data from "../data";
import styled from "styled-components";

const BlogContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;
const BlogCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article`
  min-height: 350px;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    width: 340px;
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: 200px;
`;
const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const CardTitle = styled.h4``;
const CardP = styled.p``;
const CardDate = styled.div`
  width: 100%;
`;
const CardHeader = styled.div`
  width: 100%;
`;

const BlogPage = () => {
  return (
    <BlogContainer>
      <BlogCenter>
        {data.map((item) => {
          const { id, title, img, description, link } = item;
          return (
            <a
              key={id}
              href={link}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "black",
              }}
            >
              <Card>
                <CardImg src={img} alt={title} />
                <CardDesc>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardP>{description}</CardP>
                  </CardHeader>
                  <CardDate>
                    <span>{new Date().getFullYear()}</span>
                  </CardDate>
                </CardDesc>
              </Card>
            </a>
          );
        })}
      </BlogCenter>
    </BlogContainer>
  );
};

export default BlogPage;
