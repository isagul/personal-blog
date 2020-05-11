import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="layout">
      <Head>
        <title>isagul - frontend developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Raleway:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      {props.children}
      <style jsx>{`
        .layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;     
          font-family: 'Nunito';     
        }
        body {
          background: rgb(239, 242, 244);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;