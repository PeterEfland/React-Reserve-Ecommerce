import App from "next/app";
<<<<<<< HEAD
import Layout from "../components/_App/Layout";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
=======

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return <Component />;
>>>>>>> origin/master
  }
}

export default MyApp;
