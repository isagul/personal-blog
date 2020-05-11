import Head from 'next/head';
import Layout from '../components/Layout';


const About = () => {
  return (
    <Layout>
      <Head>
        <title>isagul - about</title>
      </Head>
      <div className="about-me">
        <div>
          <h4>
            <span className="curly-braces">{"{ "}</span>{"Hi I'm "}
            <span className="my-name">Isa</span>
            <span className="curly-braces">{" }"}</span>
          </h4>
          <p>I live in Istanbul. I am a Front End developer building websites and web applications.
          I interested in JavaScript and have professional experience working with React and Angular.
                </p>
          <p>Also, I have used these technologies: Redux, RxJS, Sass/Less, Gulp, Webpack, ES6, NodeJS, MongoDB</p>
        </div>
      </div>
      <style jsx>{`
        .about-me {
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 120px);
          user-select:none;
        }
        .about-me .my-name {
          padding-left: 10px;
          padding-right: 10px;
          background: yellow;
          color: black;
          border: 1px solid black;
          border-radius: 3px;
        }
        .about-me div {
          background: #262626b3;
          height: auto;
          width: 50vw;
          padding: 2rem;
          font-family: 'Nunito', sans-serif;
        }
        @media only screen and (max-width: 425px) {
          .about-me div {
            width: 100vw;
            margin: 0 20px;
          }
        }
        .about-me div h4 {
          -webkit-background-clip: text;
          margin-bottom: 4%;
          text-align: center;
          color: #CF5050;
        }
        .about-me div h4 .curly-braces {
          font-weight: bold;
          color: white;
        }
        .about-me div p {
          color: white;
          text-align: left;
        }
        .about-me div iframe {
          margin-left: auto;
          display: block;
          margin-right: auto;
        }      
      `}</style>
    </Layout>
  );
};

export default About;