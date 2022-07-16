import Footer from "../components/Footer/Footer";
import Layout from "../components/layout/Layout";
import { AuthContextProvider } from "../components/store/auth-context";
import { CartContextProvider } from "../components/store/cart-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default MyApp;
