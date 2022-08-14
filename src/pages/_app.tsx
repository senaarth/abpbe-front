import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { Header } from "../components/Header";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import "react-toastify/dist/ReactToastify.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer position="bottom-center" className="toast-container" />
    </ThemeProvider>
  );
};

export default MyApp;
