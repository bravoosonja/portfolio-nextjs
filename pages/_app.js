import { AnimatePresence } from "framer-motion";
// styles
import "../styles/global.scss";
// layout
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
