import Head from "next/head";
// import Link from "next/link";

import Layout from "../components/Layout";
import { myProjects } from "../constants/projects";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>isagul - projects</title>
      </Head>
      <div className="info">
        <h1>My Open Source Projects</h1>
        <p>
          I am passionate about open source software and giving back to others.
        </p>
      </div>
      <div className="projects">
        {myProjects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="project-title">
                <a className="project-name" href={project.live_url} target="_blank">
                  {project.name}
                </a>
                <div className="project-icons">
                  {project.github_url !== null && (
                    <a
                      href={`${project.github_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github-square live-link-text"></i>
                    </a>
                  )}
                  {project.npm_link !== null && (
                    <a
                      href={`${project.npm_link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-npm live-link-text"></i>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-detail">{project.detail}</p>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .projects {
            height: 80%;
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0 auto;
            max-width: 800px;
            padding: 0 40px;
          }
          .projects p {
            margin: 0;
          }
          .projects .project {
            border-bottom: 1px solid #3f4246;
            padding: 1.45rem 0;
          }
          .projects .project .project-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .projects .project .project-title .project-icons{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .projects .project .project-title .project-icons > a {
            margin-right: 8px;
            text-decoration: none;
          }
          
          .projects .project .project-title .project-name-link .project-name {
            font-weight: bold;
            font-size: 1.1rem;
            position: relative;
            width: max-content;
            margin: 0;
          }
          .projects
            .project
            .project-title
            .project-name-link
            .project-name:hover:after {
            content: "";
            position: absolute;
            margin-top: 3px;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: #cf5050;
          }
          .projects .project .project-title .project-name-link:hover {
            text-decoration: none;
            color: black;
          }
          .projects .project .project-title .project-live-link,
          .projects .project .project-title .project-link {
            color: black;
            text-decoration: none;
            position: relative;
          }
          .projects .project .project-title .project-link {
            margin-bottom: -3px;
          }
          .projects .project .project-title .project-link .live-link-text {
            margin-bottom: 0;
          }
          .projects
            .project
            .project-title
            .project-live-link
            .live-link-text:hover:after,
          .projects
            .project
            .project-title
            .project-link
            .live-link-text:hover:after {
            content: "";
            position: absolute;
            margin-top: 3px;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: #cf5050;
          }
          .projects .project .project-title .project-live-link i,
          .projects .project .project-title .project-link i {
            font-size: 20px;
          }
          .projects .project .project-detail {
            font-size: 0.7975rem;
            margin-top: 10px;
            text-align: justify;
          }
          .info {
            width: 100%;
            margin: 0 auto;
            max-width: 800px;
            padding: 20px 40px;
            user-select: none;
          }
          .info p {
            color: #718096;
          }
          @media screen and (max-width: 420px) {
            .info h1 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Projects;
