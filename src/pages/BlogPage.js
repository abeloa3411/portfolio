import React from "react";
import articles from "../data";
import styled from "styled-components";

const Card = styled.article`
  min-height: 350px;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;
const CardImg = styled.img`
  width: 100%;
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
    <div>
      {articles.map((item) => {
        const { id, title, img, description } = item;
        return (
          <a>
            <Card key={id}>
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
    </div>
  );
};

export default BlogPage;
