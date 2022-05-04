import React from "react";
import styled from "styled-components";
import projectData from "../Projects";

const ProjectsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
const ProjectsCenter = styled.div`
  padding-left: 1rem;
  margin-bottom: 2rem;
`;
const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProjectsTitle = styled.h1``;
const ArticleP = styled.p`
  padding-bottom: 1rem;
`;

const ProjectsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem 0 0;

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

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsCenter>
        <ProjectsHeader>
          <ProjectsTitle>Latest Projects</ProjectsTitle>
          <ArticleP>
            i have a lot of projects but i cant show all of them, Here are few
            of the projects
          </ArticleP>
        </ProjectsHeader>
        <ProjectsCards>
          {projectData.map((card) => {
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
        </ProjectsCards>
      </ProjectsCenter>
    </ProjectsContainer>
  );
};

export default Projects;
