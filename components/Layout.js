import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

const Layout = (props) => {
  const [theme, setTheme] = useState("light");
  const _isMounted = useRef(false);

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (!_isMounted.current) {
      if (currentTheme === null) {
        localStorage.setItem("theme", "light");
      } else {
        setTheme(currentTheme);
      }
    }
    return () => {
      _isMounted.current = true;
    };
  }, [theme]);

  function changeTheme() {
    let currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <div className="layout">
          <Head>
            <title>isagul - frontend developer</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="isagul - frontend developer"/>
            <link rel="icon" href="/favicon-16x16.png" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Raleway:wght@300&family=Roboto:wght@100&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <GlobalStyles />
          <Header toggleTheme={changeTheme} />
          {props.children}
          <style jsx>
            {`
              .layout {
                min-height: 100vh;
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
              font-family: "Nunito";
            }
            body {
              background: rgb(239, 242, 244);
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
    </ThemeProvider>
  );
};

export default Layout;
