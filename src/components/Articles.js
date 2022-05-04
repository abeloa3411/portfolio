import React from "react";
import styled from "styled-components";
import cards from "../data";

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
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 580px) {
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

const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticlesCenter>
        <ArticlesHeader>
          <ArticlesTitle>Latest articles</ArticlesTitle>
          <ArticleP>i write articles on web development and ui/ux</ArticleP>
        </ArticlesHeader>
        <ArticlesCards>
          {cards.map((card) => {
            const { id, img, title, description, link } = card;
            return (
              <a
                href={link}
                target="_blank"
                rel="nowhere"
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
                  <CardImg src={img} />
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
