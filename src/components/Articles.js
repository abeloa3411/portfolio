import React from "react";
import styled from "styled-components";
import { articles } from "../data";

const ArticlesContainer = styled.div`
  width: 100%;
`;
const ArticlesCenter = styled.div`
  padding-left: 1rem;
`;
const ArticlesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ArticlesTitle = styled.h1``;
const ArticleP = styled.p``;

const ArticlesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article`
  max-width: 300px;
  height: 400px;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  @media screen and (max-width: 480px) {
    width: 340px;
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: 240px;
`;
const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const CardTitle = styled.h4``;
const CardP = styled.p``;
const CardDate = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2%;
  left: 5%;
`;
const CardHeader = styled.div`
  width: 100%;
`;

const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticlesCenter>
        <ArticlesHeader>
          <ArticlesTitle>Latest articles</ArticlesTitle>
          <ArticleP>i write articles on web development and ui/ux</ArticleP>
        </ArticlesHeader>
        <ArticlesCards>
          {articles.map((card) => {
            const { id, img, title, description, link } = card;
            return (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={id}
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
        </ArticlesCards>
      </ArticlesCenter>
    </ArticlesContainer>
  );
};

export default Articles;
